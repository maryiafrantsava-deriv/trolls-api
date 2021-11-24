import { api } from "appid";
import Button from "components/common/Button/Button";
import { MessageType } from "components/RequestJSONBox/RequestJSONBox";
import React from "react";
import style from "./ResetSendButtonsBlock.module.scss";

type ResetSendButtonsBlockPropsType = {
    isAppRegistration: boolean | undefined;
    sendRequest: React.MouseEventHandler<HTMLButtonElement>;
    resetMessagesInConsole: (messages: MessageType[]) => void;
};

export const ResetSendButtonsBlock: React.FC<ResetSendButtonsBlockPropsType> = React.memo(
    ({ isAppRegistration, sendRequest, resetMessagesInConsole }) => {
        const onClick = React.useCallback(() => {
            api.connection.close();
            resetMessagesInConsole([]);
        }, [resetMessagesInConsole]);

        return (
            <div className={style["json-btn-wrapper"]}>
                <div
                    className={
                        isAppRegistration
                            ? `${style["btn-reset"]} ${style["gray-btn-submit"]}`
                            : `${style["btn-reset"]} ${style["btn-reset-playground"]}`
                    }
                >
                    <div id="playground-reset-btn">
                        <Button text={"Reset Connection"} clickHandler={onClick} />
                    </div>
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
