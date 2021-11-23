import React from "react";
import styles from "./Scopes.module.scss";
import { DataScopesPropTypes } from "utils/data-scopes";

type ScopesPropTypes = {
    dataScopes: Array<DataScopesPropTypes>;
};

export const Scopes: React.FC<ScopesPropTypes> = ({dataScopes}) => {

    const scopes = dataScopes.map(( item: { id: string; type: string; value: string; label: string; }) => {
        return (
            <div key={item.id} className={styles["scopes-field"]}>
                <input id={item.id} type={item.type} value={item.value}/>
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