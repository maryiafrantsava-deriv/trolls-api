import React from "react";
import styles from "./Scopes.module.scss";
import { Field } from "formik";
import { data_scopes } from "utils/data-scopes";

export const Scopes: React.FC = () => {

    const scopes = data_scopes.map(( item ) => {
        return (
            <div key={item.id} className={styles["scopes-field"]}>
                <Field id={item.id} name="scopes" type={item.type} value={item.value}/>
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