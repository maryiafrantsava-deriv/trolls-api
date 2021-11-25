import React, { ChangeEventHandler } from "react";
import { DataInputType } from "../InputList/InputList";
import styles from "./Input.module.scss";

type InputPropsType = {
    num: number;
    id: string;
    label: string;
    maxLength: number;
    isLastChild?: boolean;
    inputListText: Array<DataInputType>;
    setInputListText: Function;
    handleEditInputText: Function;
    handleInputChange: Function;
};

export const Input: React.FC<InputPropsType>  = React.memo(({ 
    num,
    id, 
    label, 
    maxLength, 
    isLastChild, 
    inputListText, 
    handleInputChange,
}) => {

    const onInputChange: ChangeEventHandler<HTMLInputElement> = React.useCallback((event) => {
        handleInputChange( event, num, id );
    }, [num, id, handleInputChange])    

    return (
        <>
            <input 
                id={id} 
                type="text" 
                name="input"
                placeholder={label} 
                maxLength={maxLength}
                className={isLastChild ? styles.lastChild : ""}
                value={ inputListText[num]?.text }
                onChange={onInputChange}
            />
        </>
    );
});

Input.displayName = "Input";