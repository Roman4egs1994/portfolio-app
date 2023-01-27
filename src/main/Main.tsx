import React from 'react';
import styled from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styled.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styled.greetingText}>
                    <span>Hi There</span>
                    <h1>I am Roman Rybkin</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={styled.photo}>
                    PHOTO
                </div>
            </div>
        </div>
    );
};

