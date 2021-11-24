import FeedbackSection from "../components/FeedbackSection/FeedbackSection";
import Comprehensive from "../components/Home/Sections/Comprehensive";
import { BenefitSection } from "../components/BenefitsSection/BenefitSection";
import DerivApi from "components/Home/Sections/DerivApi/DerivApi";
import WaysApi from "components/Home/Sections/WaysApi/WaysApi";
import GetStarted from "components/Home/Sections/GetStarted/GetStarted"
import ClientFeedbackCarousel from "components/Home/Sections/ClientFeedbackCarousel";

const Home = () => (
    <div id="home-page">
        <DerivApi />
        <BenefitSection />
        <WaysApi />
        <GetStarted />
        <ClientFeedbackCarousel />
        <Comprehensive />
        <FeedbackSection id="home" />
    </div>
);

export default Home;
