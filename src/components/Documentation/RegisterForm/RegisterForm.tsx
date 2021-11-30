import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { data_register_your_app } from "utils/data-app-registration";
import Scopes from "../Scopes";
import Button from "components/common/Button/Button";
import styles from "./RegisterForm.module.scss";
import RegisterSchema, { initialValuesRegister } from "./RegisterSchema";

type RegisterFormPropsType = {
    setRegister: Function;
    setInputListText: Function;
};

export const RegisterForm: React.FC<RegisterFormPropsType> = React.memo(({
    setRegister,
    setInputListText,
}) => {

    const [registerData, setRegisterData] = useState({});

    useEffect(() => {
        const _register_data = localStorage.getItem("register_data");
        setRegisterData(() => (_register_data === null ? "" : _register_data));
    }, []);

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
                <ErrorMessage
                    name={item.id}
                    component="div"
                    className={styles["text-danger"]}
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
                initialValues={initialValuesRegister}
                validationSchema={RegisterSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    setRegister(true);
                    setInputListText(values);
                    setRegisterData(values);
                    localStorage.setItem("register_data", JSON.stringify(values, null, 2));
                    
                }}
            >
                <Form>
                    {fields}
                    <Scopes />
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