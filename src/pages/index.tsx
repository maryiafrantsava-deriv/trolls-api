import FeedbackSection from "../components/FeedbackSection/FeedbackSection";
import Comprehensive from '../components/Home/Sections/Comprehensive';
import { BenefitSection } from "../components/BenefitsSection/BenefitSection";

const Home = () => {
    return (
        <div>
            <Comprehensive id='comprehensive'/>
            Good luck Trolls!
            <BenefitSection />
            <FeedbackSection id="home" />
        </div>
    );
};

export default Home;
