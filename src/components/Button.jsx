import styles from '../styles/styles';

const Button = ({title, icon, onclick}) => (
    <button type="button" onClick={onclick} className={`flex ${styles.flexCenter} py-4 px-8 my-8 font-poppins font-medium text-[16px] text-primary primary_gradient rounded-full outline-none ${styles}`}>
    {title} <span className='ml-3'> {icon} </span>
    </button>
)

export default Button;