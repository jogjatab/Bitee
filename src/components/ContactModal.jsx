import { useState } from "react";
import styles from "../styles/styles";
import { AiOutlineClose, AiOutlineSend } from 'react-icons/ai'

import { db } from '../Server/Firebase/config';
import { collection, addDoc } from "firebase/firestore";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactModal = ({ close }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [loader, setloader] = useState(false)

    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        setloader(true);
        if (formData.name && formData.email && formData.subject && formData.message) {
            addDoc(collection(db, "queries"), formData).then(() => {
                toast('Message Send Successfully')
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
                setloader(false);
            }).catch((error) => {
                toast(error.message);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
                setloader(false);
            });

        } else {
            toast(' All Fields are required');
            setloader(false);
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />

            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-black-gradient-2  outline-none focus:outline-none w-[340px] xs:w-[500px] sm:w-[750px]">

                        <div className="p-3 sm:p-10 flex justify-between border-b border-solid border-slate-50 pb-5">
                            <div>
                                <h2 className="text-2xl font-semibold my-2"> Have any Queries? </h2>
                                <p className={`${styles.paragraph}`}> No worries, Send your queries to us. </p>
                            </div>
                            <div className="p-3 sm:p-0 text-2xl sm:text-3xl font-extrabold cursor-pointer" onClick={close}>
                                <AiOutlineClose />
                            </div>
                        </div>

                        <div>
                            <form onSubmit={submitForm} className="text-white flex flex-col">
                                <div className="px-3 py-3 sm:px-10 sm:py-8 border-b border-solid border-slate-50">
                                    <div className="my-5">
                                        <input onChange={inputHandler} value={formData.name} name="name" type="text" placeholder="Your Name" className="border border-solid border-Slate-50 outline-none px-5 py-3 rounded-2xl w-full bg-transparent" />
                                    </div>
                                    <div className="my-5">
                                        <input onChange={inputHandler} value={formData.email} name="email" type="email" placeholder="Your Work Email" className="border border-solid border-Slate-50 outline-none px-5 py-3 rounded-2xl w-full bg-transparent" />
                                    </div>
                                    <div className="my-5">
                                        <input onChange={inputHandler} value={formData.subject} name="subject" type="subject" placeholder="Your Subject" className="border border-solid border-Slate-50 outline-none px-5 py-3 rounded-2xl w-full bg-transparent" />
                                    </div>
                                    <div className="my-5">
                                        <textarea onChange={inputHandler} value={formData.message} name="message" rows="2" id="" className="border border-solid border-Slate-50 outline-none px-5 py-3 rounded-2xl w-full bg-transparent" placeholder="Your Message"></textarea>
                                    </div>
                                </div>

                                <div className="sm:px-10">
                                    <button disabled={loader} type="submit" className={`flex ${styles.flexCenter} py-4 px-8 my-3 sm:my-8 font-poppins font-medium text-[16px] text-primary primary_gradient rounded-full outline-none ${loader && 'opacity-50'}`}>
                                        Send Message <span className='ml-3'> <AiOutlineSend /> </span>
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default ContactModal;