import CodeContent from "components/common/CodeContent/CodeContent";
import React from "react";
import style from "components/PlaygroundComponent/PlaygroundComponent.module.scss";
import { MessageType } from "components/PlaygroundComponent/PlaygroundComponent";

const ConsoleMessage: React.FC<{ message: MessageType }> = ({ message }) => {
    const payload = JSON.stringify(message.body, null, 4);
    return (
        <div className={style[message.type]}>
            <CodeContent lang="json" data={payload}></CodeContent>
        </div>
    );
};

export default ConsoleMessage;
