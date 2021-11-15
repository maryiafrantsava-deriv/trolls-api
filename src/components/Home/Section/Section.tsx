import React from "react";
import styles from "./Section.module.scss";

type SectionPropsType = {
    title?: string;
    background?: string;
    sectioClassName?: string;
    childrenClassname?: string;
};

const Section: React.FC<SectionPropsType> = ({ title, background, children, sectioClassName, childrenClassname }) => (
    <section className={`${styles.sectionWrapper} ${sectioClassName}`}>
        {title && (
            <div>
                <h1>{title}</h1>
            </div>
        )}
        <div className={childrenClassname}>{children}</div>
    </section>
);

export default Section;
