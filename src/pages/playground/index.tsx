import { api, APIType, generateDerivApiInstance } from "appid";
import Title from "components/common/Title";
import RequestJSONBox from "components/RequestJSONBox/RequestJSONBox";
import SelectRequestInput from "components/SelectRequestInput/SelectRequestInput";
import React, { useEffect, useRef, useState } from "react";
import data_get_api_token from "utils/data-app-registration";
import playground_requests from "utils/playground_requests";
import TokenInputField from "../../components/TokenInputField/TokenInputField";
import style from "./Playground.module.scss";

export type MessageType = {
    body: string | Error | {};
    type: string;
};

const PlayGround: React.FC = () => {
    const [current_api, setCurrentAPI] = useState<APIType>(api);
    const [is_initial_socket, setIsInitialSocket] = useState<boolean>(true);
    const [messages, setMessages] = useState<Array<MessageType>>([]);
    const request_input = useRef<HTMLTextAreaElement>(null);
    const [selected_value, setSelectedValue] = useState<string>("Select API Call - Version 3");
    const [request, setRequest] = useState("");
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        const _token = localStorage.getItem("token");
        setToken(() => (_token === null ? "" : _token));
    }, []);

    const sendRequest = React.useCallback(() => {
        if (!request_input.current?.value && selected_value === "Select API Call - Version 3") {
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
    }, [current_api, request_input, messages, is_initial_socket, selected_value]);

    const handleAuthenticateClick = React.useCallback(
        (inserted_token: string) => {
            setToken(inserted_token);
            localStorage.setItem("token", inserted_token);
            setSelectedValue("Authorize");
            new Promise(res => {
                res(
                    setRequest(
                        JSON.stringify(
                            {
                                authorize: inserted_token || token,
                            },
                            null,
                            2
                        )
                    )
                );
            }).then(() => sendRequest());
        },
        [token, sendRequest]
    );

    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = React.useCallback(e => {
        e.preventDefault();
        setSelectedValue(e.currentTarget.value);
        const request_body = playground_requests.find(el => el.name === e.currentTarget.value);
        setRequest(JSON.stringify(request_body?.body, null, 4));
    }, []);

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
        <div id="content" className={`${style["playground-content"]} ${style.dark}`}>
            <div className={style["header-title"]}>
                <Title headerSize="h1" className="">
                    API Playground
                </Title>
            </div>
            <div className={`${style["page-wrapper"]} ${style.dark}`}>
                <div className={style["playground"]}>
                    <div className={`${style["playground-page-wrapper"]} ${style.dark}`}>
                        <div className={`${style["playground-api-json"]} ${style.dark}`}>
                            <SelectRequestInput selected_value={selected_value} handleChange={handleSelectChange} />
                            <div className={`${style["api-token"]} ${style.dark}`}>
                                <TokenInputField sendTokenToJSON={handleAuthenticateClick} />
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
                            <div id="playground-req-schema"></div>
                            <div id="playground-res-schema"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayGround;
