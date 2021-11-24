import React from "react";
import { DataTableAppRegistrationPropTypes } from "utils/data-table-app-registration";
import styles from "./Table.module.scss";


type TablePropTypes = {
    data_table: Array<DataTableAppRegistrationPropTypes>;
};

export const Table: React.FC<TablePropTypes>  = ({data_table}) => {

    const ths = data_table.map((item: { id: number; label: string; }, idx ) => {
        const isLastChild = idx === item.id - 1; 

        return (
            <th
                key={ item.id } 
                colSpan={ isLastChild ? 2 : undefined }
                className={styles["flex-tr-child"]}>
                { item.label }
            </th>       
        );
    });

    return (
        <div className={styles["table-wrapper"]}>
            <table className={styles["flex-table"]} id="applications-table">
                <thead>
                    <tr className={styles["flex-tr"]}>
                        {ths}
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
};