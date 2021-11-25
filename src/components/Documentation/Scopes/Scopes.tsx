import React from "react";
import styles from "./Scopes.module.scss";
import { DataScopesPropTypes } from "utils/data-scopes";

type ScopesPropTypes = {
    dataScopes: Array<DataScopesPropTypes>;
    handleChange: Function;
};

export const Scopes: React.FC<ScopesPropTypes> = ({ dataScopes, handleChange }) => {

    const scopes = dataScopes.map(( item ) => {
        return (
            <div key={item.id} className={styles["scopes-field"]}>
                <input id={item.id} type={item.type} value={item.value} onChange={( event ) => handleChange( event )}/>
                <label htmlFor={item.id}>{item.label}</label>
            </div>
        );
    });

    return (
        <div className={styles["scopes"]}>
            <p className={`${styles["scopes-field-text"]} ${styles["scopes-field-text"]}`}>Scopes:</p>
            {scopes}
        </div>
    );
};