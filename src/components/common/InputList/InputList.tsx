import React from "react";
import Input from "../Input";
import styles from "./InputList.module.scss";

type DataType = {
    num: number;
    id: string;
    label: string;
    maxLength: number;
    helperText: string;
}
export type DataInputType = {
    num: number;
    id: string;
    text: string;
}

type InputListPropsType = {
    inputsData: Array<DataType>;
    inputListText: Array<DataInputType>;
    setInputListText: Function;
    handleEditInputText: Function;
};

export const InputList: React.FC<InputListPropsType> = React.memo(({
    inputsData,
    inputListText,
    setInputListText,
    handleEditInputText,
}) => {
    const onInputChange = React.useCallback((event: any, num: any, id: any) => {
        const inputTextName = event.target.value;
        handleEditInputText(num, id, inputTextName);
    }, [ handleEditInputText ])

    return (
        <>
            {inputsData.map((item, idx) => {

                const { ...itemProps } = item;
                const isFilled = item.helperText.length > 0;
                const isLastChild = idx === inputsData.length - 1;

                return <div key={item.id} className={styles["input-wrapper"]} >
                    <p className={styles["helper-label"]}>{item.label}</p>
                    <Input
                        {...itemProps}
                        isLastChild={isLastChild}
                        inputListText={inputListText}
                        setInputListText={setInputListText}
                        handleEditInputText={handleEditInputText}
                        handleInputChange={onInputChange}
                    />
                    {isFilled ? (
                        <p className={styles["helper-text"]}>{item.helperText}</p>
                    ) : null}
                </div>
            })
            }
        </>


    );
});

InputList.displayName = "InputsList";