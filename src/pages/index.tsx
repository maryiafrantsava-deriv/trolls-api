import FeedbackSection from "../components/FeedbackSection/FeedbackSection";
import Section from "../components/Home/Section/Section";
import { BenefitIcon } from "../components/BenefitsSection/BenefitIcon/BenefitIcon";
import { benefitIconsArray } from "../utils/content";
import styles from "../styles/Home.module.scss";

const Home = () => {
    return (
        <div>
            Good luck Trolls!
            <Section>
                <FeedbackSection id="home" />
            </Section>
            <Section
                title={"Benefits of using Deriv API"}
                sectioClassName={styles.mainBenefitSection}
                childrenClassname={styles.benefitColumnContainer}
            >
                <div className={styles.benefitIconsContainer}>
                    {benefitIconsArray.map((el, index) => {
                        return <BenefitIcon title={el.title} imgPath={el.imgPath} key={index} />;
                    })}
                </div>
            </Section>
        </div>
    );
};

export default Home;
