import FeedbackSection from "../components/FeedbackSection/FeedbackSection";
import Comprehensive from "../components/Home/Sections/Comprehensive";
import { BenefitSection } from "../components/BenefitsSection/BenefitSection";

const Home = () => {
    return (
        <div>
            Good luck Trolls!
            <BenefitSection />
            <Comprehensive id="comprehensive"/>
            <FeedbackSection id="home" />
        </div>
    );
};

export default Home;
