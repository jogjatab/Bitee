import styles, { layout } from '../styles/styles';
import {CryptoConvertor} from '../components';

const Converter = () => (
    <section id="convertor" className={`flex flex-col-reverse md:flex-row flex-wrap justify-between ${styles.paddingY}`}>
        <div className="block ss:hidden min-h-[100px]"></div>
        <div className={`relative w-full md:w-[40%]`}>
            <CryptoConvertor />

            <div className="hidden sm:block absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="hidden sm:block absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </div>

        <div className='w-full md:w-[50%]'>
            <h2 className={styles.heading2}>
                Easily convert any <br className="md:block hidden" /> crypto currency
                in  <br className="md:block hidden" /> other currency
            </h2>
            <p className={`${styles.paragraph} md:max-w-[470px] mt-5 mb-5`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos libero delectus sequi laborum fugit voluptate.
            </p>
        </div>
    </section>
);

export default Converter;