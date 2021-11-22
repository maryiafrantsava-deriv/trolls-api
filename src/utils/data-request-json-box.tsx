import Link from "next/link";
import Button from "components/common/Button/Button";
import { MouseEventHandler } from "react";

type RequestJsonBoxPropsType = {
    title: Array<string>;
    buttonReset: Array<JSX.Element>;
    buttonSend?: Function;
}

const data_request_json_box: RequestJsonBoxPropsType = {
    title: [ "Request JSON" ],
    buttonReset: [ <Link href={"javascript:;"} key="btn-reset">
        <a id="playground-reset-btn">
            <Button text={"Reset Connection"} />
        </a>
    </Link> ],
    buttonSend: (sendRequest: MouseEventHandler<HTMLButtonElement> | undefined): JSX.Element => {
        return <Button key="btn-submit" id="playground-send-btn" text={"Send Request"} clickHandler={sendRequest} />;
        ;
    },
};

export default data_request_json_box;