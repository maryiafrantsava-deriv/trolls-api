import Section from "../../components/Home/Section/Section";
import FeedbackSection from "../../components/FeedbackSection/FeedbackSection";
import DocsLayout from "../../components/Documentation/Layout/DocsLayout";

const BugBounty = () => {
    return (
        <Section>
            <FeedbackSection id="bugBounty" />
        </Section>
    );
};

BugBounty.Layout = DocsLayout;

export default BugBounty;
