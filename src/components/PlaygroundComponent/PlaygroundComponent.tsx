import { api, APIType, generateDerivApiInstance } from "appid";
import Title from "components/common/Title";
import RequestJSONBox from "components/RequestJSONBox";
import SelectRequestInput from "components/SelectRequestInput/SelectRequestInput";
import SchemaWrapper from "components/Schema/SchemaWrapper";
import TokenInputField from "components/TokenInputField/TokenInputField";
import React, { useEffect, useRef, useState } from "react";
import data_get_api_token from "utils/data-app-registration";
import playground_requests from "utils/playground_requests";
import send from "utils/send";
import receive from "utils/receive"
import style from "./PlaygroundComponent.module.scss";

export type MessageType = {
    body: string | Error | {};
    type: string;
};

type StoredData = {
    request: string;
    selected_value: string;
    token: string;
};

export const PlaygroundComponent = () => {
    const [current_api, setCurrentAPI] = useState<APIType>(api);
    const [is_initial_socket, setIsInitialSocket] = useState<boolean>(true);
    const [messages, setMessages] = useState<Array<MessageType>>([]);
    const request_input = useRef<HTMLTextAreaElement>(null);
    const [request_info, setRequestInfo] = useState<object | undefined>({});
    const [response_info, setResponseInfo] = useState<object | undefined>({});
    const [text_data, setTextData] = useState<StoredData>({
        request: "",
        selected_value: "Select API Call - Version 3",
        token: "",
    });

    useEffect(() => {
        const onHashChanged = () => {
            setTextData((relevant_text_data: StoredData) => {
                const data_object = { ...relevant_text_data, selected_value: window.location.hash.slice(1) };
                sessionStorage.setItem("session_data", JSON.stringify(data_object));
                return data_object;
            });
        };
        const sessionStorage_data = sessionStorage.getItem("session_data");
        const session_data_object = sessionStorage_data !== null ? JSON.parse(sessionStorage_data) : text_data;
        setTextData({ ...session_data_object });
        window.addEventListener("hashchange", onHashChanged);
        return () => {
            setTextData((relevant_text_data: StoredData) => {
                const data_object = { request: "", selected_value: "", token: relevant_text_data.token };
                sessionStorage.setItem("session_data", JSON.stringify(data_object));
                return data_object;
            });
            window.removeEventListener("hashchange", onHashChanged);
        };
    }, []);

    const sendRequest = React.useCallback(() => {
        if (!request_input.current?.value && text_data.selected_value === "Select API Call - Version 3") {
            alert("Invalid JSON!");
            return;
        }
        const _request = request_input.current?.value && JSON.parse(request_input.current?.value);
        // We have to update api instance if websockets connection is closed as a result of reset:
        let relevant_api = current_api;
        if (current_api.connection.readyState !== 1 && is_initial_socket) {
            relevant_api = generateDerivApiInstance();
            setIsInitialSocket(false);
        } else if (current_api.connection.readyState !== 1 && !is_initial_socket) {
            relevant_api = generateDerivApiInstance();
            setIsInitialSocket(true);
        }
        _request &&
            relevant_api
                .send(_request)
                .then((res: string) =>
                    setMessages([...messages, { body: _request, type: "req" }, { body: res, type: "res" }])
                )
                .catch((err: Error) =>
                    setMessages([...messages, { body: _request, type: "req" }, { body: err, type: "err" }])
                );
        setCurrentAPI(relevant_api);
    }, [current_api, request_input, messages, is_initial_socket, text_data]);

    const handleAuthenticateClick = React.useCallback(
        (inserted_token: string) => {
            const new_text_data = {
                token: inserted_token,
                selected_value: "Authorize",
                request: JSON.stringify({ authorize: inserted_token }, null, 2),
            };
            sessionStorage.setItem("session_data", JSON.stringify(new_text_data));
            Promise.resolve(setTextData({ ...new_text_data })).then(() => {
                sendRequest();
            });
        },
        [setTextData, sendRequest]
    );

    const setInfo = (selected:string) => {
        const request_data = send.find(el => Object.keys(el.properties)[0] === selected);
        const response_data = receive.find(el => Object.keys(el.properties)[0] === selected);
        setRequestInfo(request_data);
        setResponseInfo(response_data)
    }

    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = React.useCallback(
        e => {
            e.preventDefault();
            const request_body = playground_requests.find(el => el.name === e.currentTarget.value);
            const new_text_data = {
                ...text_data,
                selected_value: e.currentTarget.value,
                request: JSON.stringify(request_body?.body, null, 4),
            };
            setTextData({ ...new_text_data });
            const a = new_text_data.selected_value;
            setInfo(new_text_data.selected_value);

            sessionStorage.setItem(
                "session_data",
                JSON.stringify({ ...new_text_data, selected_value: request_body?.title })
            );
        },
        [text_data]
    );

    const handleTextAreaInput: React.ChangeEventHandler<HTMLTextAreaElement> = React.useCallback(
        e => setTextData({ ...text_data, request: e.target.value }),
        [text_data]
    );

    const json_box_props = {
        current_api,
        sendRequest,
        messages,
        setMessages,
        request_example: text_data.request,
        handleChange: handleTextAreaInput,
        request_input,
    };

    return (
        <div className={`${style["playground-page-wrapper"]} ${style.dark}`}>
            <div className={`${style["playground-api-json"]} ${style.dark}`}>
                <SelectRequestInput selected_value={text_data.selected_value} handleChange={handleSelectChange} />
                <div className={`${style["api-token"]} ${style.dark}`}>
                    <TokenInputField sendTokenToJSON={handleAuthenticateClick} token={text_data.token} />
                    <div className={style["vertical-separator"]}></div>
                    <div className={style["cta"]}>
                        <Title headerSize="h3" className={style["title"]}>
                            {data_get_api_token.textFocus}
                        </Title>
                        <div className={style["cta-button"]}>{data_get_api_token.button}</div>
                    </div>
                </div>
                <RequestJSONBox {...json_box_props} />
            </div>
            <div id="playground" className={style["playground-api-docs"]}>
                <div className={style["playground-req-schema"]}>
                    <SchemaWrapper info={request_info} />
                </div>
                <div className={style["playground-res-schema"]}>
                    <SchemaWrapper info={response_info} />
                </div>
            </div>
        </div>
    );
};
