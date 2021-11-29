import Title from "components/common/Title";
import TextContent from "components/Home/Sections/TextContent";
import React, { useEffect, useRef, useState } from "react";
import data_get_api_token from "utils/data-app-registration";
import styles from "./AppAuthentificationRegistration.module.scss";
import TokenInputField from "components/TokenInputField/TokenInputField";
import RequestJSONBox from "components/RequestJSONBox";
import Table from "components/common/Table";
import { data_table_app_registration } from "utils/data-table-app-registration";
import RegisterForm from "../RegisterForm";
import { api, APIType, generateDerivApiInstance } from "appid";
import { MessageType } from "../../PlaygroundComponent/PlaygroundComponent";

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

    const [current_api, setCurrentAPI] = useState<APIType>(api);
    const [is_initial_socket, setIsInitialSocket] = useState<boolean>(true);
    const [messages, setMessages] = useState<Array<MessageType>>([]);
    const request_input = useRef<HTMLTextAreaElement>(null);
    const [request, setRequest] = useState("");
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        const sessionStorage_data = sessionStorage.getItem("session_data");
        const session_data_object = sessionStorage_data !== null ? JSON.parse(sessionStorage_data) : {token: ""};
        setToken(session_data_object.token);
    }, []);

    const sendRequest = React.useCallback(() => {
        if (!request_input.current?.value) {
            alert("Invalid JSON!");
            return;
        }
        const request = request_input.current?.value && JSON.parse(request_input.current?.value);
        // We have to update api instance if websockets connection is closed as a result of reset:
        let relevant_api = current_api;
        if (current_api.connection.readyState !== 1 && is_initial_socket) {
            relevant_api = generateDerivApiInstance();
            setIsInitialSocket(false);
        } else if (current_api.connection.readyState !== 1 && !is_initial_socket) {
            relevant_api = generateDerivApiInstance();
            setIsInitialSocket(true);
        }
        request &&
            relevant_api
                .send(request)
                .then((res: string) =>
                    setMessages([...messages, { body: request, type: "req" }, { body: res, type: "res" }])
                )
                .catch((err: Error) =>
                    setMessages([...messages, { body: request, type: "req" }, { body: err, type: "err" }])
                );
        setCurrentAPI(relevant_api);
    }, [current_api, request_input, messages, is_initial_socket]);

    const handleAuthenticateClick = React.useCallback(
        (inserted_token: string) => {
            setToken(inserted_token);
            sessionStorage.setItem("session_data", JSON.stringify({request: "", selected_value: "", token: inserted_token}));
            Promise.resolve(setRequest(JSON.stringify({authorize: inserted_token || token}, null, 2))).then(() => {
                sendRequest();
            });
        },
        [token, sendRequest]
    );

    const handleTextAreaInput: React.ChangeEventHandler<HTMLTextAreaElement> = e => setRequest(e.target.value);

    const json_box_props = {
        current_api,
        sendRequest,
        messages,
        setMessages,
        request_example: request,
        handleChange: handleTextAreaInput,
        request_input,
    };

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
                sendTokenToJSON={handleAuthenticateClick}
                token={token}
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
                        {...json_box_props}
                    />
                </fieldset>
            </div>
        </>
    )
};

export default React.memo(AppAuthentificationRegistration);

