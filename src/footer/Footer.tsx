import React from 'react';
import styled from './footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {

    const footerContainer = styleContainer.container + " " + styled.footerContainer

    return (
        <div className={styled.footerBlock}>
            <div className={footerContainer}>

            </div>
        </div>
    );
};
