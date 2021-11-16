import FeedbackSection from "../components/FeedbackSection/FeedbackSection";
import Comprehensive from "../components/Home/Sections/Comprehensive";
import { BenefitSection } from "../components/BenefitsSection/BenefitSection";
import DerivApi from "components/Home/Sections/DerivApi/DerivApi";

const Home = () => {
    return (
        <div>
            <DerivApi />
            <BenefitSection />
            <Comprehensive />
            <FeedbackSection id="home" />
        </div>
    );
};

export default Home;
