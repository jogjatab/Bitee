import { useState, useEffect } from 'react'
import styles from '../styles/styles';

const Counter = () => {
    const [days, setDays] = useState(20);
    const [hours, setHours] = useState(10);
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(10);

    let interval;

    const startCountdown = () => {
        let counterDate = new Date("December 6,2022").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = counterDate - now;
            const remaining_days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const remiaining_hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const remiaining_minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const remaining_seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setDays(remaining_days);
                setHours(remiaining_hours);
                setMinutes(remiaining_minutes);
                setSeconds(remaining_seconds);
            }

        }, 1000);
    }

    useEffect(() => {
        startCountdown();
    })

    return (
        <div className='flex text-center items-center justify-center flex-wrap'>
            <div className='mx-1 sm:mx-3'>
                <div className='flex items-center justify-between'>
                    <h1 className="flex-1 font-poppins font-semibold  ss:text-[52px] sm:text-[72px] text-[35px] text-white ss:leading-[100.8px] leading-[75px]"> {days} <span className="primary_text_shade">: </span>   </h1>
                </div>
                <p className='sm:mr-10'> Days</p>
            </div>
            <div className='mx-1 sm:mx-3'>
                <div className='flex items-center justify-between'>
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] sm:text-[72px] text-[35px] text-white ss:leading-[100.8px] leading-[75px]"> {hours} <span className="primary_text_shade">: </span>   </h1>
                </div>
                <p className='mx-1 sm:mr-12'> Hours</p>
            </div>
            <div className='sm:mx-3'>
                <div className='flex items-center justify-between'>
                    <h1 className="flex-1 font-poppins font-semibold  ss:text-[52px] sm:text-[72px] text-[35px] text-white ss:leading-[100.8px] leading-[75px]"> {minutes} <span className="primary_text_shade">: </span>   </h1>
                </div>
                <p className='mx-1 sm:mr-12'> Minutes</p>
            </div>
            <div className='sm:mx-3'>
                <div className='flex items-center justify-between'>
                    <h1 className="flex-1 font-poppins font-semibold  ss:text-[52px] sm:text-[72px] text-[35px] text-white ss:leading-[100.8px] leading-[75px]"> {seconds} <span className="primary_text_shade"> </span>   </h1>
                </div>
                <p> Seconds</p>
            </div>
        </div>
    )
}

export default Counter;