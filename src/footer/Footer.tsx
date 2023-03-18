import React from 'react';
import styled from './footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {FooterElement} from "./footerElement/footerElement";

export const Footer = () => {

    const footerContainer = styleContainer.container + " " + styled.footerContainer

    return (
        <div className={styled.footerBlock}>
            <div className={footerContainer}>
                <div className={styled.hrFooter}></div>
                <div className={styled.center}>
                    <div className={styled.footerLogo}>
                        <a href="">
                            <img src="" alt="L O G O"/>
                        </a>
                    </div>
                    <ul className={styled.siteSocial}>
                        <li>
                            <a href="">instagram</a>
                        </li>
                        <li>
                            <a href="">LinkedIn</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">gmail</a>
                        </li>
                        <li>
                            <a href="">telegram</a>
                        </li>
                    </ul>
                    <p className={styled.footerText}>
                        <small>&copy; Copyright © All rights reserved</small>
                    </p>
                </div>

            </div>
        </div>
    );
};
