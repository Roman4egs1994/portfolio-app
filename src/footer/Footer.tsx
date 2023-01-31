import React from 'react';
import styled from './footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {FooterElement} from "./footerElement/footerElement";

export const Footer = () => {

    const footerContainer = styleContainer.container + " " + styled.footerContainer

    return (
        <div className={styled.footerBlock}>
            <div className={footerContainer}>
                {/*<h2 className={styled.title}>Roman Rybkin</h2>*/}
                <div className={styled.footerElements}>
                    <FooterElement/>
                    <FooterElement/>
                    <FooterElement/>
                    <FooterElement/>
                </div>
                <div className={styled.footerText}>
                    <span>&copy; 2023 Все права защищены</span>
                </div>
            </div>
        </div>
    );
};
