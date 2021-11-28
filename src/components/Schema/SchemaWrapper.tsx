import React, {useState, useEffect} from "react";
import Title from "../common/Title/Title";
import send from "../../utils/send";
import receive from "../../utils/receive"
import style from "./SchemaWrapper.module.scss"

type SchemaWrapperProps = {
    info: any;
}

const SchemaWrapper:React.FC<SchemaWrapperProps> = ({info}) => {

    console.log(info)
    if(info){
        return (
            <div className={`${style["page-wrapper"]} ${style.dark}`}>
                <Title className="" headerSize={"h3"}>{info.title}</Title>
                <p>{info.description}</p>
            </div>
        )
    } else {
        return null
    }


}

export default SchemaWrapper;
