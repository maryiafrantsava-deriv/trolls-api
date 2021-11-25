import { api, APIType, generateDerivApiInstance } from "appid";
import Title from "components/common/Title";
import ConsoleMessage from "components/ConsoleMessage/ConsoleMessage";
import { ResetSendButtonsBlock } from "components/ResetSendButtonsBlock/ResetSendButtonsBlock";
import React, { useRef, useState } from "react";
import styles from "../../pages/playground/Playground.module.scss";
import style from "./RequestJSONBox.module.scss";

type RequestJSONBoxPropTypes = {
    request_example?: string;
    handleChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    isAppRegistration?: boolean;
};

export type MessageType = {
    body: string;
    type: string;
};

const RequestJSONBox: React.FC<RequestJSONBoxPropTypes> = ({ request_example, handleChange, isAppRegistration }) => {
    const [messages, setMessages] = useState<Array<MessageType>>([]);
    const [is_initial_socket, setIsInitialSocket] = useState<boolean>(true);
    const [current_api, setCurrentAPI] = useState<APIType>(api);
    const request_input = useRef<HTMLTextAreaElement>(null);

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

    return (
        <div className={isAppRegistration ? style["form-content"] : style["playground-box"]}>
            {isAppRegistration ? (
                <Title className={style["app-registration-subheader"]} headerSize="h3">
                    Request JSON
                </Title>
            ) : (
                <label className={style["inline-label"]}>Request JSON</label>
            )}
            <textarea
                id="playground-request"
                className={
                    isAppRegistration
                        ? `${style["textarea-request"]} ${style["registration-request"]}`
                        : `${style["textarea-request"]} ${style["playground-request"]}`
                }
                placeholder={"Request JSON"}
                ref={request_input}
                value={request_example}
                onChange={handleChange}
                spellCheck={isAppRegistration ? false : undefined}
            />
            <ResetSendButtonsBlock
                isAppRegistration={isAppRegistration}
                sendRequest={sendRequest}
                resetMessagesInConsole={setMessages}
                current_api={current_api}
            />
            {messages && (
                <div id="playground-console" className={styles["playground-console"]}>
                    {messages?.map((message, index) => (
                        <ConsoleMessage key={"message" + index} message={message}></ConsoleMessage>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RequestJSONBox;
