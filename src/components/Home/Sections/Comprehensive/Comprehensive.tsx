import React from "react";
import data_comprehensive from "utils/data-comprehensive";
import styles from "../Comprehensive/Comprehensive.module.scss";
import Title from "components/common/Title/Title";

type ComprehensivePropsType = {
    id: string;
  };

const Comprehensive: React.FC<ComprehensivePropsType> = ({id}) => {

    return id === "comprehensive" ? (
        <section className={`${styles["main-page-row"]}`}>
            <div className={`${styles.rowContainer}`}>
                <div className={`${styles.singleContainer}`}>
                    <img
                        className={`${styles.libraryIcon}`}
                        src={data_comprehensive.icon}
                        width={64}
                        height={64}
                        alt="preview"
                    />
                    <Title headerSize="h1">{data_comprehensive.title}</Title>
                    <div className={`${styles.subheader}`}>
                        <span>{data_comprehensive.textFirstPart}</span>
                        <span>{data_comprehensive.textSecondPart}</span>
                    </div>
                    {data_comprehensive.link}
                </div>
            </div>
        </section>
    ) : null;
}

export default Comprehensive;