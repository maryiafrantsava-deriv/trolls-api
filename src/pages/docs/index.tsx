import DocsLayout from "components/Documentation/Layout/DocsLayout";
import QuickStartIntro from "components/Documentation/QuickStartIntro/QuickStartIntro";

type PageComponentWithLayout = React.FC & {
    Layout: React.FC;
};

const Docs: PageComponentWithLayout = () => {
    return <QuickStartIntro />;
};

Docs.Layout = DocsLayout;

export default Docs;
