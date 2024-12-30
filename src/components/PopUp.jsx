import styles from "../styles/styles";
import { AiOutlineClose } from 'react-icons/ai'
import { Counter } from '../components';

const PopUp = ({ close }) => (
    <>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-[300px] ss:w-[550px] sm:w-[700px] md:w-[1000px] my-6 mx-auto">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-black-gradient-2  outline-none focus:outline-none">
                    <div className={`text-center pb-5 pt-10 `}>
                        <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] sm:text-[65px] text-[30px] text-white ss:leading-[100.8px] leading-[75px]"> Best <span className="primary_text_shade">Deals </span> Ends In  </h1>
                    </div>

                    <div className="sm:p-5 p-1">
                        <Counter />
                    </div>

                    <div className='pb-5 text-center' onClick={close}>
                        <button className={`py-4 px-8 my-8 font-poppins font-medium text-[16px] text-primary primary_gradient rounded-lg outline-none`}> OK, Got it </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
)

export default PopUp