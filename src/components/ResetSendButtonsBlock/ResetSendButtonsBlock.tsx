import { APIType } from "appid";
import Button from "components/common/Button/Button";
import { MessageType } from "components/RequestJSONBox/RequestJSONBox";
import React from "react";
import style from "./ResetSendButtonsBlock.module.scss";

type ResetSendButtonsBlockPropsType = {
    isAppRegistration: boolean | undefined;
    sendRequest: React.MouseEventHandler<HTMLButtonElement>;
    resetMessagesInConsole: (messages: Array<MessageType>) => void;
    current_api: APIType;
};

export const ResetSendButtonsBlock: React.FC<ResetSendButtonsBlockPropsType> = React.memo(
    ({ isAppRegistration, sendRequest, resetMessagesInConsole, current_api }) => {
        const onClick = React.useCallback(() => {
            current_api.connection.close();
            localStorage.removeItem("token");
            resetMessagesInConsole([]);
        }, [resetMessagesInConsole, current_api]);

        return (
            <div className={style["json-btn-wrapper"]}>
                <div
                    id="playground-reset-btn"
                    className={
                        isAppRegistration
                            ? `${style["btn-reset"]} ${style["gray-btn-submit"]}`
                            : `${style["btn-reset"]} ${style["btn-reset-playground"]}`
                    }
                >
                    <Button text={"Reset Connection"} clickHandler={onClick} />
                </div>
                <div className={style["btn-submit"]}>
                    <Button
                        id="playground-send-btn"
                        className={style["btn-submit"]}
                        text={"Send Request"}
                        clickHandler={sendRequest}
                    />
                </div>
            </div>
        );
    }
);

ResetSendButtonsBlock.displayName = "ResetSendButtonsBlock";
