import { ComponentWithLayout } from "../../types";
import DocsLayout from "components/Documentation/Layout/DocsLayout";
import Accordion from "components/common/Accordion/Accordion";

const FAQ: ComponentWithLayout = () => {
    return (
        <div className="with-bg">
            <h1 className="doc-main-title">FAQ</h1>
            <Accordion />
        </div>
    );
};

FAQ.Layout = DocsLayout;

export default FAQ;
