import React from 'react';
import styled from './AboutMe.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import photoProfile from '../common/assets/photoProfile/Profile.jpg'
import Title from "../common/componets/title/Title";
import { MAddress} from "./adress/Address";
import {ButtonLink} from "../common/componets/button/ButtonLink";
import {IconSocialNetwork} from "../common/componets/icon/IconSocialNetwork/IconSocialNetworkType";
import {motion} from "framer-motion";
import {Tilt} from 'react-tilt'
import {animationBlockDescription} from "../common/styles/motionSettings/motionSettings";
import {defaultOptionsTiltPhoto} from "../common/styles/titlePhotoSettings/titlePhotoSettings";

export const AboutMe = () => {
    const projectsContainer = styleContainer.container + " " + styled.mainContainer
    const animationMotion = animationBlockDescription
    const animationPhotoProfile = defaultOptionsTiltPhoto

    return (
        <div id="AboutMe" className={styled.mainBlock}>
            <div className={projectsContainer}>
                <Title description={'Get to know me'} title={'About Me'} />
                <motion.div
                    className={styled.main}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.2, once: true}}
                    style={{overflow: 'hidden'}}
                >
                        <div className={styled.photo}>
                            <Tilt options={animationPhotoProfile}>
                            <motion.img variants={animationMotion} src={photoProfile} alt="Profile"
                            />
                            </Tilt>
                        </div>
                    <motion.div className={styled.profile}
                                variants={animationMotion}
                    >
                        <motion.h2
                            variants={animationMotion}
                        >Who am i?
                        </motion.h2>
                        <motion.h6
                            variants={animationMotion}
                        >I'm Roman Moisidi, a visual UX/UI Designer and Web Developer
                        </motion.h6>
                        <motion.p
                            className={styled.text}
                            variants={animationMotion}
                        >I am a beginner web developer. I write frontend development on the well-known React library.
                            I have about a year experience in development.
                            I am constantly learning and delving into the world of development and React.
                            I fanatically approach my work and devote a lot of time to it and approach my work with an architectural approach.
                            I am very charged for my professional growth and I want to achieve great heights in web development.
                        </motion.p>
                        <MAddress
                            variants={animationMotion}
                        />
                        <motion.div className={styled.cvAndSocialNetworks}
                                    variants={animationMotion}
                        >
                            <motion.div className={styled.btn}>
                                <form action="https://drive.google.com/file/d/169uA2VYxowRMa7rKpE-hn4Z6MldLRaG8/view?usp=sharing" target="_blank">
                                <ButtonLink  title={'Download CV'} />
                                </form>
                            </motion.div>
                            <IconSocialNetwork/>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

