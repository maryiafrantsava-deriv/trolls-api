import Title from "components/common/Title";
import TextContent from "components/Home/Sections/TextContent";
import React, { useEffect, useRef, useState } from "react";
import data_get_api_token from "utils/data-app-registration";
import styles from "./AppAuthentificationRegistration.module.scss";
import TokenInputField from "components/TokenInputField/TokenInputField";
import RequestJSONBox from "components/RequestJSONBox";
import Table from "components/common/Table";
import RegisterForm from "../RegisterForm";
import { api, APIType, generateDerivApiInstance } from "appid";
import { MessageType } from "../../PlaygroundComponent/PlaygroundComponent";
import { DataMessagesApiListPropTypes } from "components/common/Table/Table";

const AppAuthentificationRegistration: React.FC = () => {

    const {
        textFocus,
        button,
        textFieldset,
        titleRegister
    } = data_get_api_token;

    const [inputListText, setInputListText] = useState({});
    const [isRegister, setRegister] = useState(false);
    const [isSendApiList, setSendApiList] = useState(false);
    const [current_api, setCurrentAPI] = useState<APIType>(api);
    const [is_initial_socket, setIsInitialSocket] = useState<boolean>(true);
    const [messages, setMessages] = useState<Array<MessageType>>([]);
    const [messagesApiList, setMessagesApiList] = useState<Array<MessageType>>([]);
    const request_input = useRef<HTMLTextAreaElement>(null);
    const [request, setRequest] = useState("");
    const [token, setToken] = useState<string>("");

    // useEffect(() => {
    //     () => messages;
    // }, [messages]);

    console.log("messages", messages);
    console.log("messages2", messagesApiList);

    // type EchoReqPropTypes = {
    //     app_list: number;
    //     req_id: number;
    // }

    // type DataMessagesApiListPropTypes2 = {
    //     app_list: Array<DataMessagesApiListPropTypes>;
    //     echo_req: any;
    //     msg_type: string;
    //     req_id: number;
    // }
    // type TablePropTypes = {
    //     dataMessagesApiList: Array<DataMessagesApiListPropTypes2>;
    // };

    const dataMessagesApiList: Array<DataMessagesApiListPropTypes> = messagesApiList[1]?.body?.app_list;
    console.log("dataMessagesApiList!!!!", dataMessagesApiList);

    useEffect(() => {
        const sessionStorage_data = sessionStorage.getItem("session_data");
        const session_data_object = sessionStorage_data !== null ? JSON.parse(sessionStorage_data) : { token: "" };
        setToken(session_data_object.token);
    }, []);

    const sendRequestApiList = React.useCallback(() => {
        const request_app_list = {
            "app_list": 1
        };
        !request_input.current?.value ? alert("Invalid JSON!") : null;
        const request = request_app_list;
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
                .then((res: string) => {
                    setMessagesApiList([...messagesApiList, { body: request, type: "req" }, { body: res, type: "res" }])
                    console.log("res sendRequestApiList", res);
                }
                )
                .catch((err: Error) =>
                    setMessagesApiList([...messagesApiList, { body: request, type: "req" }, { body: err, type: "err" }])
                );

        setCurrentAPI(relevant_api);
        setSendApiList(true);
    }, [current_api, is_initial_socket, messagesApiList]);

    const sendRequest = React.useCallback((is_auth?: boolean) => {
        if (!request_input.current?.value) {
            alert("Invalid JSON!");
            return;
        }
        const _request = request_input.current?.value && JSON.parse(request_input.current?.value);
        let relevant_api = current_api;
        if (current_api.connection.readyState !== 1 && is_initial_socket) {
            relevant_api = generateDerivApiInstance();
            setIsInitialSocket(false);
        } else if (current_api.connection.readyState !== 1 && !is_initial_socket) {
            relevant_api = generateDerivApiInstance();
            setIsInitialSocket(true);
        }
        if (is_auth === true && _request) {
            relevant_api
                .send(_request)
                .then((res: string) => setMessages([...messages, { body: _request, type: "req" }, { body: res, type: "res" }]))
                .catch((err: Error) => setMessages([...messages, { body: _request, type: "req" }, { body: err, type: "err" }]))
                .then(() => sendRequestApiList())
        } else if (_request) {
            relevant_api
                .send(_request)
                .then((res: string) => setMessages([...messages, { body: _request, type: "req" }, { body: res, type: "res" }]))
                .catch((err: Error) => setMessages([...messages, { body: _request, type: "req" }, { body: err, type: "err" }]))
        }
        
        setCurrentAPI(relevant_api);
    }, [current_api, is_initial_socket, messages, sendRequestApiList]);


    const handleAuthenticateClick = React.useCallback(
        (inserted_token: string) => {
            setToken(inserted_token);
            sessionStorage.setItem("session_data", JSON.stringify({ request: "", selected_value: "", token: inserted_token }));
            Promise.resolve(setRequest(JSON.stringify({ authorize: inserted_token || token }, null, 2)))
                .then(() => sendRequest(true))
        },
        [token, sendRequest]
    );

    // if(isSendRequest){
    //     Promise.then(() => sendRequest(true); ///should besend request
    // }

    const handleTextAreaInput: React.ChangeEventHandler<HTMLTextAreaElement> = e => setRequest(e.target.value);
    
    const json_box_props = {
        current_api,
        sendRequest,
        messages: [...messages, messagesApiList[1] || [] ],
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
                <Table 
                    dataMessagesApiList={dataMessagesApiList}
                    isSendApiList={isSendApiList}/>
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

