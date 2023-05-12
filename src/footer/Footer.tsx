import React from 'react';
import styled from './footer.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import Logotype from '../common/assets/logo/logoNew.png'

export const Footer = () => {

    const footerContainer = styleContainer.container + " " + styled.footerContainer

    return (
        <div className={styled.footerBlock}>
            <div className={footerContainer}>
                <div className={styled.hrFooter}></div>
                <div className={styled.center}>
                    <div className={styled.footerLogo}>
                        <a href="https://roman4egs1994.github.io/potfolio-app/">
                            <img src={Logotype} alt="logo"/>
                        </a>
                    </div>
                    <ul className={styled.siteSocial}>
                        <li>
                            <a target={"_blank"} href="https://www.instagram.com/romanpirs__?utm_source=qr">instagram</a>
                        </li>
                        <li>
                            <a target={"_blank"} href="https://www.linkedin.com/in/roman-rybkin-456260267/">LinkedIn</a>
                        </li>
                        <li>
                            <a target={"_blank"} href="https://github.com/Roman4egs1994">GitHub</a>
                        </li>
                        <li>
                            <a target={"_blank"} href="mailto:romanmoisidi@gmail.com">gmail</a>
                        </li>
                        <li>
                            <a  target={"_blank"} href="https://t.me/RomanSetGet94">telegram</a>
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
