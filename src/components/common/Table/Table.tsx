import React from "react";
import { DataTableAppRegistrationPropTypes } from "utils/data-table-app-registration";
import styles from "./Table.module.scss";
import { data_table_app_registration } from "utils/data-table-app-registration";

export type DataMessagesApiListPropTypes = {
    name: string;
    app_id: number;
    scopes: Array<string>;
    redirect_uri: string;
}
type TablePropTypes = {
    dataMessagesApiList: Array<DataMessagesApiListPropTypes>;
    isSendApiList: boolean;
};

export const Table: React.FC<TablePropTypes> = ({ dataMessagesApiList, isSendApiList }) => {

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

    dataMessagesApiList = dataMessagesApiList || [];
    const trs = dataMessagesApiList.map((item, idx: number) => {

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
            `${styles["table-wrapper"]} ${styles["table-wrapper-display"]}`: 
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
                </tbody>
            </table>
        </div>
    );
};