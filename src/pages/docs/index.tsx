import DocsLayout from "components/Documentation/Layout/DocsLayout";
import useIsMobile from "hooks/useIsMobile";

type ComponentWithLayout = React.FC & {
  Layout: React.FC
}

const Docs: ComponentWithLayout = () => {
  return (
    <div>
      Quick Start and blah-blah-blah
    </div>
  );
};

Docs.Layout = DocsLayout;

export default Docs;