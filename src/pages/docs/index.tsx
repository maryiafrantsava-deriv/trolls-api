import DocsLayout from "components/Documentation/Layout/DocsLayout";

type ComponentWithLayout = React.FC & {
  Layout: React.FC
}

const Docs: ComponentWithLayout = () => {
    return <div>Quick Start</div>
};

Docs.Layout = DocsLayout;

export default Docs;
