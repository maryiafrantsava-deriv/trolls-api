import Title from "components/common/Title";
import TextContent from "components/Home/Sections/TextContent";
import React, { useState } from "react";
import data_get_api_token from "utils/data-app-registration";
import styles from "./AppAuthentificationRegistration.module.scss";
import TokenInputField from "components/TokenInputField/TokenInputField";
import RequestJSONBox from "components/RequestJSONBox";
import Table from "components/common/Table";
import { data_table_app_registration } from "utils/data-table-app-registration";
import RegisterForm from "../RegisterForm";

export type AppAuthentificationRegistrationPropTypes = {
    title: Array<string>;
    textFirstPart: Array<string>;
    textSecondPart: Array<string>;
    textFocus: Array<string>;
    button: Array<JSX.Element>;
    textFieldset: Array<string>;
    labelButton: Array<string>;
    titleRegister: Array<string>;
}
// export type InputListTextPropTypes = {
//     [key: string]: string;
// }
export type InputListTextPropTypes = {
    [key: string]: string | Array<string>;
}

export type RegisterYourAppPropTypes = {
    num: number;
    id: string;
    label: string;
    maxLength: number;
    helperText: string;
}

const AppAuthentificationRegistration: React.FC = () => {

    const {
        textFocus,
        button,
        textFieldset,
        titleRegister
    } = data_get_api_token;

    const [inputListText, setInputListText] = useState({});
    const [isRegister, setRegister] = useState(false);

    console.log("AAR", inputListText);

    return (
        <>
            <div className={styles.registrationTitle}>
                <TextContent data={data_get_api_token} />
            </div>
            <div className={styles.cta}>
                <Title headerSize="h3" className={styles.textFocus}>{textFocus}</Title>
                <div className={styles["cta-button"]}>
                    {button}
                </div>
            </div>
            <TokenInputField
                isAppRegistration={true}
                label={textFieldset.toString()}
            />
            <div className={styles["horizontal-separator-grey"]}></div>
            <div id={styles.frmNewApplication}>
                <div className={styles["form-content"]}>
                    <fieldset className={styles["fieldset-container"]}>
                        <Title headerSize="h2" className={styles.titleRegister}>{titleRegister}</Title>
                        <RegisterForm
                            setRegister={setRegister}
                            setInputListText={setInputListText}
                        />
                    </fieldset>
                </div>
            </div>
            <div className={styles["horizontal-separator-grey"]}></div>
            <div className={styles["request-container"]}>
                <Table data_table={data_table_app_registration} />
                <fieldset className={styles["mb-0"]}>
                    <RequestJSONBox
                        isAppRegistration={true}
                        inputListText={inputListText}
                        isRegister={isRegister}
                    />
                </fieldset>
            </div>
        </>
    )
};

export default React.memo(AppAuthentificationRegistration);

