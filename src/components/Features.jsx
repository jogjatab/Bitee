import { features } from "../constants/index";
import styles, { layout } from "../styles/styles";

const Features = () => {
    return (
        <section id="features" className={`${styles.paddingY}`}>
            <div className="block ss:hidden min-h-[100px]"></div>
            <h2 className={`text-center ${styles.heading2}`}>
                We provide you the best
            </h2>
            <p className={`${styles.paragraph} mt-5 text-center`}>
                Best services provided by our community
            </p>
            <div className={` ${styles.paddingY} flex items-center justify-between text-center flex-wrap`}>
                {
                    features.map(feature => (
                        <div key={feature.id} className=" rounded-[10px] mr-5 p-5 w-[100%] ss:w-[90%] sm:w-[46%] md:w-[30%] feature-card">
                            <div className="text-4xl p-4 my-5 text-center inline-block w-auto primary_gradient rounded-full">
                                {<feature.icon />}
                            </div>
                            <h1 className={`text-white text-xl font-medium`}> {feature.title}</h1>
                            <p className={`font-normal text-greyish text-[14px] leading-[30.8px] mt-5 text-center`}>
                                {feature.content}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Features