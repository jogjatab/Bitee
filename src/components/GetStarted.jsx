import styles from "../styles/styles";
import { FaRocket } from "react-icons/fa";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full primary_gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="primary_text_shade flex">Get <FaRocket className="ml-2 primary_text_shade text-lg animate-pulse text-blue-200" />
          </span>
        </p>
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="primary_text_shade">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;