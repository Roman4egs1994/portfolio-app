import React from 'react';
import styled from './AboutMe.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import photoProfile from '../common/assets/photoProfile/Profile.jpg'
import Title from "../common/componets/title/Title";
import {Address} from "./adress/Address";
import {ButtonLink} from "../common/componets/button/ButtonLink";
import {IconSocialNetwork} from "../common/componets/icon/IconSocialNetwork/IconSocialNetworkType";


export const AboutMe = () => {
    const projectsContainer = styleContainer.container + " " + styled.mainContainer
    return (
        <div className={styled.mainBlock}>

            <div className={projectsContainer}>
                <Title description={'Get to know me'} title={'About Me'}/>
                <div className={styled.main}>
                    <div className={styled.photo}>
                        <img src={photoProfile} alt="Profile"/>
                    </div>
                    <div className={styled.profile}>
                        <h2>Who am i?</h2>
                        <h6>I'm Roman Rybkin, a visual UX/UI Designer and Web Developer</h6>
                        <p className={styled.text}>I am a freelancer based in the United Kingdom
                            and i have been building noteworthy UX/UI designs and websites for years,
                            which comply with the latest design trends.
                            I help convert a vision and an idea into meaningful and useful products.
                            Having a sharp eye for product evolution helps me prioritize tasks,
                            iterate fast and deliver faster.</p>
                        <Address/>
                        <div className={styled.cvAndSocialNetworks}>
                            {/*<a className={styled.buttonGreen} href="" role={'button'}>Download CV</a>*/}
                            <div className={styled.btn}>
                                <ButtonLink title={'Download CV'}/>
                            </div>
                            <IconSocialNetwork/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

