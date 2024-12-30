import { useState } from 'react';
import CryptoConvert from 'crypto-convert';
const convert = new CryptoConvert();
import { VscArrowSwap } from 'react-icons/vsc';
import { Button } from '../components';
import styles from '../styles/styles';
import { convertor_dropdown_data1, convertor_dropdown_data2 } from '../constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CryptoConvertor = () => {
    const [state, setState] = useState({
        value: 1,
        crypto_1: "BTC",
        crypto_2: "USD",
        answer: 0,
        showAnswer: false,
        target: 1,
        showBTC: "",
        showUSD: ""
    })

    const convertNow = async () => {
        const ready = await convert.ready();
        if (state.value) {
            let result = convert[state.crypto_1][state.crypto_2](state.value);
            setState({
                ...state,
                showAnswer:true,
                answer: result,
                target: state.value,
                showBTC: state.crypto_1,
                showUSD: state.crypto_2 
            })
        } else {
            toast("Please Enter Value");
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
            <div className='mt-5 sm:mt-0 p-3 sm:p-10 rounded-xl converter_card'>
                <p className={`${styles.paragraph} mb-3`}> Convert Now </p>
                <div>
                    <input value={state.value} onChange={(e) => setState({...state, value: e.target.value})} name="value" type="number" placeholder="Enter Value" className="border border-solid border-Slate-50 outline-none px-5 py-3 rounded-2xl w-full bg-transparent" />
                </div>
                <div className='flex justify-between flex-col xs:flex-row items-center my-5'>
                    <select value={state.crypto_1} onChange={(e) => setState({...state, crypto_1: e.target.value})}  name="cryptValue" className='border border-solid border-Slate-50 outline-none px-5 py-3 rounded-2xl w-[100%] xs:w-[40%] bg-transparent'>
                      {
                        convertor_dropdown_data1.map((data, index)=>(
                            <option key={index} className='bg-primary text-white' value={data.value}> {data.title} </option>
                        ))
                      }
                    </select>

                    <div className='my-3 xs:my-0 w-[50px] h-[50px] primary_gradient rounded-full flex items-center justify-center text-primary '> 
                        <VscArrowSwap />
                    </div>

                    <select value={state.crypto_2} onChange={(e) => setState({...state, crypto_2: e.target.value})} name="currencyValue" className='border border-solid border-Slate-50 outline-none px-5 py-3 rounded-2xl w-[100%] xs:w-[40%] bg-transparent'>
                       {
                        convertor_dropdown_data2.map((data, index)=>(
                            <option key={index} className='bg-primary text-white' value={data.value}> {data.title} </option>
                        ))
                       }

                    </select>
                </div>

                <Button title={'Convert'} onclick={convertNow} />

                <p className={`${styles.paragraph}`}>
                    { state.showAnswer && ` Result: ${state.target} ${state.showBTC} = ${state.answer} ${state.showUSD} `}
                </p>

            </div>
        </>

    )
}

export default CryptoConvertor