import React from "react";
import style from "./Schema.module.scss";

type SchemaBodyProps = {
    properties: any;
}

type CodeStringProps = {
    description: string;
}

const Properities: React.FC<SchemaBodyProps> = ({properties}) => {
    const names = Object.keys(properties);

    const CodeString: React.FC<CodeStringProps> = ({description}) => {
        const highlightCode = description.split(" ").map((el, i) => {
            return (/`([^`]*)`/.test(el)) ?
                <span
                    className={`${style["schema-role"]} ${style["schema-code"]}`}
                    key={el + i}
                >{`${el.slice(1, el.length - 1)}`}
                </span>
                : ` ${el} `;
        });
        return (
            <div className={style["schema-body-description"]}>{highlightCode}</div>
        );
    }

    return (
        <div>{names.map((el, i) => {
            const {type, description, pattern, enum: _enum, items} = properties[el];

            return (
                <div className={style["schema-body-signature"]} key={el + i}>
                    <div className={style["schema-body-header"]}>
                        <p><strong>{el}</strong></p>
                        {_enum ? <div className={style["schema-body-type"]}>{type}
                            <div className={style["schema-enums"]}>{_enum.map((el: string, i: number) => <div
                                className={`${style["schema-role"]} ${style["schema-code"]} ${style["schema-enums"]}`}
                                key={el + i}>{el}</div>)}
                            </div>
                        </div> : null}
                        {pattern ? <div className={style["schema-regex-container"]}>
                            <div className={style["schema-pattern-type"]}>{type}</div>
                            <div className={style["schema-body-pattern"]}>{pattern}</div>
                        </div> : null}
                    </div>
                    <CodeString description={description}/>
                </div>
            );
        })}

        </div>
    )
};


const SchemaBody: React.FC<SchemaBodyProps> = ({properties}) => {
    return (
        <div className={style["schema-body"]}>
            <Properities properties={properties}/>
        </div>
    );
}

export default SchemaBody;
