import useIsMobile from "hooks/useIsMobile";
import Sidebar from "./Sidebar/Sidebar";
import style from "./DocsLayout.module.scss";

const DocsLayout: React.FC = ({ children }) => {
    const is_mobile = useIsMobile();

    return (
        <div id="content" className={style["doc-content"]}>
            <div className={`${style["page-wrapper"]} ${style.documentation}`}>
                <Sidebar is_mobile={is_mobile} />
                <div className={style["vertical-separator"]}></div>
                <div className={style["page-content"]}>{children}</div>
            </div>
        </div>
    );
};

export default DocsLayout;
