import { benefitIconsArray } from "../../utils/content";
import { BenefitIcon } from "../BenefitsSection/BenefitIcon/BenefitIcon";
import styles from "./BenefitSection.module.scss";

export const BenefitSection = () => {
    return (
        <section className={`${styles["main-page-row"]}`}>
            <div className={`${styles["column-container"]} `}>
                <h1>{"Benefits of using Deriv API"}</h1>
                <div className={`${styles.container} ${styles["benefits-icons"]}`}>
                    {benefitIconsArray.map((el, index) => {
                        return <BenefitIcon title={el.title} imgPath={el.imgPath} key={index} />;
                    })}
                </div>
            </div>
        </section>
    );
};
