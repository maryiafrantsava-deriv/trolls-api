import FeedbackSection from "../components/FeedbackSection/FeedbackSection";
import { BenefitSection } from "../components/BenefitsSection/BenefitSection";

const Home = () => {
    return (
        <div>
            Good luck Trolls!
            <BenefitSection />
            <FeedbackSection id="home" />
        </div>
    );
};

export default Home;
