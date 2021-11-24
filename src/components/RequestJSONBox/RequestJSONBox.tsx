import { api, generateDerivApiInstance } from "appid";
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
    const [messages, setMessages] = useState<MessageType[]>([]);
    const request_input = useRef<HTMLTextAreaElement>(null);
    const sendRequest = React.useCallback(() => {
        const request = request_input.current?.value && JSON.parse(request_input.current?.value);
        const api_instance = api.connection.readyState !== 1 ? generateDerivApiInstance() : api;
        request &&
            api_instance
                .send(request)
                .then((res: any) =>
                    setMessages([...messages, { body: request, type: "req" }, { body: res, type: "res" }])
                )
                .catch((err: any) =>
                    setMessages([...messages, { body: request, type: "req" }, { body: err, type: "err" }])
                );
    }, [request_input, messages]);

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
