import Title from "components/common/Title";
import TextContent from "components/Home/Sections/TextContent";
import React from "react";
import data_get_api_token from "utils/data-app-registration";
import styles from "./AppAuthentificationRegistration.module.scss";
import { data_register_your_app } from "utils/data-app-registration";
import Input from "components/common/InputList";
import TokenInputField from "components/TokenInputField/TokenInputField";

export type AppAuthentificationRegistrationPropsType = {
    title: Array<string>;
    textFirstPart: Array<string>;
    textSecondPart: Array<string>;
    textFocus: Array<string>;
    button: Array<JSX.Element>;
    textFieldset: Array<string>;
    labelButton: Array<string>;
    titleRegister: Array<string>;
}

export type RegisterYourAppPropsType = {
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

    return (
        <>
            <div className={styles.registrationTitle}>
                <TextContent data={data_get_api_token}/>
            </div>

            <div className={styles.cta}>
                <Title headerSize="h3" className={""}>{textFocus}</Title>
                {button}
            </div>

            <TokenInputField 
                isAppRegistration={true}
                label={textFieldset}
            />

            <form id={styles.frmNewApplication}>
                <div className={styles["form-content"]}>
                    <fieldset>
                        <Title headerSize="h2" className={""}>{titleRegister}</Title>
                        <Input inputsData={data_register_your_app} />
                    </fieldset>
                </div>
            </form>
        </>
    )
};

export default AppAuthentificationRegistration;

