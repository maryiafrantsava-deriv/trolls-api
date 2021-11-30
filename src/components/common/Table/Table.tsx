import React from "react";
import styles from "./Table.module.scss";
import { data_table_app_registration } from "utils/data-table-app-registration";
import { InputListTextPropTypes } from "components/Documentation/AppAuthentificationRegistration/AppAuthentificationRegistrationPropTypes";

export type DataMessagesApiListPropTypes = {
    name: string;
    app_id: number;
    scopes: Array<string>;
    redirect_uri: string;
}
type TablePropTypes = {
    dataMessagesApiList: Array<DataMessagesApiListPropTypes>;
    isSendApiList: boolean;
    inputListText?: InputListTextPropTypes;
};
export type DataListPropTypes = {
    name: string;
    app_id: number;
    scopes: Array<string>;
    redirect_uri: string;
}

export const Table: React.FC<TablePropTypes> = ({ dataMessagesApiList, isSendApiList, inputListText }) => {

    const ths = data_table_app_registration.map((item, idx) => {
        const isLastChild = idx === item.id - 1;

        return (
            <th
                key={item.id}
                colSpan={isLastChild ? 2 : 1}
                className={styles["flex-tr-child"]}>
                {item.label}
            </th>
        );
    });

    inputListText = inputListText || {};

    let dataList: Array<DataListPropTypes> = [];
    dataList = dataMessagesApiList || [];

    const trs = dataList.map((item, idx: number) => {

        const { name, app_id, scopes, redirect_uri } = item;

        return (
            <tr key={idx} className={styles["flex-tr"]}>
                <td className={styles["flex-tr-child"]}>{name}</td>
                <td className={styles["flex-tr-child"]}>{app_id}</td>
                <td className={styles["flex-tr-child"]}>{scopes.join(", ")}</td>
                <td className={styles["flex-tr-child"]}>{redirect_uri}</td>
                <td className={styles["flex-tr-child"]}>
                    <button>Delete</button>
                    <button>Update</button>
                </td>
            </tr>
        );
    });

    return (
        <div className={isSendApiList ?
            `${styles["table-wrapper"]} ${styles["table-wrapper-display"]}` :
            `${styles["table-wrapper"]} ${styles["table-wrapper-no-display"]}`
        }>
            <table className={styles["flex-table"]} id="applications-table">
                <thead>
                    <tr className={styles["flex-tr"]}>
                        {ths}
                    </tr>
                </thead>
                <tbody>
                    {trs}
                    {inputListText.hasOwnProperty("name") ?
                        (<tr className={styles["flex-tr"]}>
                            <td className={styles["flex-tr-child"]}>{inputListText.name}</td>
                            <td className={styles["flex-tr-child"]}>{inputListText.app_id}</td>
                            <td className={styles["flex-tr-child"]}>{inputListText.scopes}</td>
                            <td className={styles["flex-tr-child"]}>{inputListText.redirect_uri}</td>
                            <td className={styles["flex-tr-child"]}>
                                <button>Delete</button>
                                <button>Update</button>
                            </td>
                        </tr>) : null}
                </tbody>
            </table>
        </div>
    );
};