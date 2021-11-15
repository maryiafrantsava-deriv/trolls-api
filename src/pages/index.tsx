import FeedbackSection from "../components/FeedbackSection/FeedbackSection";
import Section from "components/Home/Section/Section";
import Comprehensive from '../components/Home/Sections/Comprehensive';

const Home = () => {
    return (
        <div>
            <Section>
                <Comprehensive id='comprehensive'/>
            </Section>
            <Section>
                <FeedbackSection id="home" />
            </Section>
        </div>
    );
};

export default Home;
