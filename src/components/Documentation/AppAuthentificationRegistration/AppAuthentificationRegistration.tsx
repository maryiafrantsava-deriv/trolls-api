import Title from "components/common/Title";
import TextContent from "components/Home/Sections/TextContent";
import React, { useState } from "react";
import data_get_api_token, { data_register_your_app }  from "utils/data-app-registration";
import styles from "./AppAuthentificationRegistration.module.scss";
import InputList from "components/common/InputList";
import TokenInputField from "components/TokenInputField/TokenInputField";
import RequestJSONBox from "components/RequestJSONBox";
import Table from "components/common/Table";
import { data_table_app_registration } from "utils/data-table-app-registration";
import Scopes from "../Scopes";
import { data_scopes } from "utils/data-scopes";
import Button from "components/common/Button/Button";

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
export type NewInputListTextPropTypes = {
    [key: string]: string;
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

    const [inputListText, setInputListText] = useState([{num: 0, id: "", text: ""}]);
    const [isRegister, setRegister] = useState( false );

    const newInputListText: NewInputListTextPropTypes = {};
    
    inputListText.map((item) => {
        console.log("newInputListText 000", newInputListText.undefined);
        newInputListText[(item.id).split("-")[1]] = item.text;
    });
    console.log("newInputListText", newInputListText);
    
    const runRegister = ( event: any ) => {
        // let request = app_id ? { app_update: app_id, scopes: [] } : { app_register: 1, scopes: [] };
        event.preventDefault();
        setRegister(true);
        console.log("runRegister: ");
    }

    const editInputText = React.useCallback(( num: number, inputId: string, inputText: string ): void => {

        let editInputText = {
            num: num,
            id: inputId,
            text: inputText
        };
        const editInputListText = [
            ...inputListText.slice(0, num ),
            editInputText,
            ...inputListText.slice(num + 1)
        ];
        setInputListText(editInputListText);
    }, [inputListText, setInputListText])

    return (
        <>
            <div className={styles.registrationTitle}>
                <TextContent data={data_get_api_token}/>
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
            <form id={styles.frmNewApplication}>
                <div className={styles["form-content"]}>
                    <fieldset>
                        <Title headerSize="h2" className={styles.titleRegister}>{titleRegister}</Title>
                        <InputList 
                            inputsData={data_register_your_app} 
                            inputListText={inputListText}
                            setInputListText={setInputListText}
                            handleEditInputText={editInputText}
                        />
                    </fieldset>
                    <Scopes dataScopes={data_scopes}/>
                    <Button 
                        id="btnRegister" 
                        className={styles["primary-btn-submit"]} 
                        text={"Register"} 
                        clickHandler={ (event) => runRegister(event) }
                    />
                </div>
            </form>
            <div className={styles["horizontal-separator-grey"]}></div>
            <div className={styles["request-container"]}>
                <Table data_table={data_table_app_registration} />
                <fieldset className={styles["mb-0"]}>
                    <RequestJSONBox
                        isAppRegistration={true}
                        newInputListText={newInputListText}
                        isRegister={isRegister}
                    />
                </fieldset>
            </div>
        </>
    )
};

export default React.memo(AppAuthentificationRegistration);

