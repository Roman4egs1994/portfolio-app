import React from 'react';
import styled from './Works.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Work} from "./work/Work";

export const Works = () => {

    const worksContainer = styleContainer.container + " " + styled.worksContainer

    return (
        <div className={styled.worksBlock}>
            <div className={worksContainer}>
                <h2 className={styled.title}>Works</h2>
                <div className={styled.works}>
                    <Work/>
                </div>
            </div>
        </div>
    );
};

