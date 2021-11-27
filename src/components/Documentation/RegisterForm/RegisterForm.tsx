import React, { ChangeEventHandler, useState } from "react";
import { Formik, Field, Form } from "formik";
import { data_register_your_app } from "utils/data-app-registration";
import Scopes from "../Scopes";
import Button from "components/common/Button/Button";
import styles from "./RegisterForm.module.scss";

type RegisterFormPropsType = {
    setRegister: Function;
    setInputListText: Function;
};

export const RegisterForm: React.FC<RegisterFormPropsType> = React.memo(({
    setRegister,
    setInputListText,
}) => {

    const fields = data_register_your_app.map((item, idx) => {
        const isFilled = item.helperText.length > 0;
        const isLastChild = idx === data_register_your_app.length - 1;
        return (
            <div key={item.id} className={styles["input-wrapper"]} >
                <p className={styles["helper-label"]}>{item.label}</p>
                <Field
                    id={item.id}
                    type="text"
                    name={item.id}
                    placeholder={item.label}
                    maxLength={item.maxLength}
                    className={isLastChild ? styles.lastChild : ""}
                />
                {isFilled ? (
                    <p className={styles["helper-text"]}>{item.helperText}</p>
                ) : null}
            </div>
        )
    });

    return (
        <>
            <Formik
                initialValues={{
                    app_register: 1,
                    scopes: [],
                    name: "",
                    redirect_uri: "",
                    verification_uri: "",
                    homepage: "",
                    github: "",
                    appstore: "",
                    googleplay: "",
                    app_markup_percentage: "",
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    console.log(JSON.stringify(values, null, 2));
                    setRegister(true);
                    setInputListText(values);
                }}
            >
                <Form>
                    {fields}
                    <Scopes/>
                    <div className={styles["btn-container"]}>
                        <Button 
                            id="btnRegister" 
                            className={styles["primary-btn-submit"]} 
                            text={"Register"}
                            type="submit"
                        />
                    </div>
                </Form>
            </Formik>
        </>
    );
});

RegisterForm.displayName = "RegisterForm";