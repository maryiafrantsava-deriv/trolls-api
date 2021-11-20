import Title from "components/common/Title";
import TextContent from "components/Home/Sections/TextContent";
import React from "react";
import data_get_api_token from "utils/data-app-registration";
import styles from "./AppAuthentificationRegistration.module.scss";
import { data_register_your_app } from "utils/data-app-registration";
import Input from "components/common/InputList";

export type AppAuthentificationRegistrationPropsType = {
    title: Array<string>;
    textFirstPart: Array<string>;
    textSecondPart: Array<string>;
    textFocus: Array<string>;
    link: Array<JSX.Element>;
    textFieldset: Array<string>;
    labelButton: Array<string>;
}

export type RegisterYourAppPropsType = {
    id: string;
    label: string;
    maxLength: number;
    helperText: string;
}

const AppAuthentificationRegistration: React.FC = () => (
    <>
        <div className={styles.registrationTitle}>
            <TextContent data={data_get_api_token}/>
        </div>
        <form id={styles.frmNewApplication}>
            <div className={styles["form-content"]}>
                <fieldset>
                    <Title headerSize="h2" className={""}>Register your app</Title>
                    <Input inputsData={data_register_your_app} />
                </fieldset>
            </div>
        </form>
    </>
);

export default AppAuthentificationRegistration;

