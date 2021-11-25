import React, { useState } from "react";
import Button from "../common/Button/Button";
import style from "./TokenInputField.module.scss";

type TokenInputFieldPropsType = {
    isAppRegistration?: boolean;
    label?: string;
    sendTokenToJSON?: (token: string) => void; // will be required later
};

const TokenInputField: React.FC<TokenInputFieldPropsType> = ({ isAppRegistration, label, sendTokenToJSON }) => {
    const [token, setToken] = useState("");

    return (
        <fieldset id="api-token-fieldset" className={style["api-token-fieldset"]}>
            <div className={style["api-token-wrapper"]}>
                {isAppRegistration ? <p className={style["helper-label"]}>{label}</p> : null}
                <input
                    type="text"
                    id="api-token"
                    className={isAppRegistration ? style["api-token-input-registration"] : style["api-token-input"]}
                    placeholder="API Token"
                    value={token}
                    onChange={e => setToken(e.currentTarget.value)}
                />
                <Button
                    id="send-auth-manually-btn"
                    className={`${style["btn-authenticate"]} ${style.bold}`}
                    text="Authenticate"
                    clickHandler={() => sendTokenToJSON?.(token)}
                />
            </div>
        </fieldset>
    );
};

export default React.memo(TokenInputField);
