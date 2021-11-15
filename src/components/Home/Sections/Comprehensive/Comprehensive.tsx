import React from "react";
import dataComprehensive from '../Comprehensive/DataComprehensive';
import styles from '../Comprehensive/Comprehensive.module.scss';
import Title from "components/common/Title/Title";

type ComprehensivePropsType = {
    id: string;
  };

const Comprehensive: React.FC<ComprehensivePropsType> = ({id}) => {

    return id === 'comprehensive' ? (
        <div className={`${styles.rowContainer} ${styles.gray}`}>
            <div className={`${styles.singleContainer}`}>
                    <img
                        className={`${styles.libraryIcon}`}
                        src={dataComprehensive.icon}
                        width={64}
                        height={64}
                        alt="preview"
                    />
                    <Title headerSize='h1'>{dataComprehensive.title}</Title>
                    <div className={`${styles.subheader}`}>
                        <span>{dataComprehensive.textFirstPart}</span>
                        <span>{dataComprehensive.textSecondPart}</span>
                    </div>
                    {dataComprehensive.link}
            </div>
        </div>
    ) : null;
}

export default Comprehensive;