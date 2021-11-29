import Title from "components/common/Title";
import { PlaygroundComponent } from "components/PlaygroundComponent/PlaygroundComponent";
import React from "react";
import style from "components/PlaygroundComponent/PlaygroundComponent.module.scss";

const PlayGround: React.FC = () => {
    return (
        <div id="content" className={`${style["playground-content"]} ${style.dark}`}>
            <div className={style["header-title"]}>
                <Title headerSize="h1" className="">
                    API Playground
                </Title>
            </div>
            <div className={`${style["page-wrapper"]} ${style.dark}`}>
                <div className={style["playground"]}>
                    <PlaygroundComponent />
                </div>
            </div>
        </div>
    );
};

export default PlayGround;
