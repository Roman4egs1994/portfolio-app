import React from 'react';
import styled from './AboutMe.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import photoProfile from '../common/assets/photoProfile/Profile.jpg'
import Title from "../common/componets/title/Title";
import {Address, MAddress} from "./adress/Address";
import {ButtonLink} from "../common/componets/button/ButtonLink";
import {IconSocialNetwork} from "../common/componets/icon/IconSocialNetwork/IconSocialNetworkType";
import {delay, motion, Variants} from "framer-motion";


export const AboutMe = () => {
    const projectsContainer = styleContainer.container + " " + styled.mainContainer

    // const animationBlockImage = {
    //     hidden: {
    //         x: 0,
    //         y: 200,
    //         opacity: 0
    //     },
    //     visible: {
    //         x: 0,
    //         y: 0,
    //         opacity: 1,
    //         transition: {delay: 0.2, duration: 0.7},
    //     }
    // }
    // const animationBlockDescription = {
    //     hidden: {
    //         x:0,
    //         y: 200,
    //         opacity: 0
    //     },
    //     visible: (custom:number) => ({
    //         x: 0,
    //         y: 0,
    //         opacity: 1,
    //         transition: { delay: custom * 0.2 ,duration: 0.7}
    //     })
    // }

    const cardVariants: Variants = {
        offscreen: {
            y: 200
        },
        onscreen: (custom: number) => ({
            y: 0,
            rotate: 0,
            transition: {
                type: "just",
                bounce: 0.5,
                duration: 1
            }
        })
    };

    return (
        <div className={styled.mainBlock}>

            <div className={projectsContainer}>
                <Title description={'Get to know me'} title={'About Me'}/>
                <motion.div
                    className={styled.main}
                    // initial="hidden"
                    // whileInView="visible"
                    // viewport={{amount: 0.2, once: true}}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.35 }}
                >
                    <div className={styled.photo}>
                        <motion.img variants={cardVariants} src={photoProfile} alt="Profile"
                        />
                    </div>
                    <motion.div className={styled.profile}
                                variants={cardVariants}
                    >
                        <motion.h2
                            variants={cardVariants}
                        >Who am i?</motion.h2>
                        <motion.h6
                            variants={cardVariants}
                        >I'm Roman Rybkin, a visual UX/UI Designer and Web Developer</motion.h6>
                        <motion.p
                            className={styled.text}
                            variants={cardVariants}
                        >I am a freelancer based in the United Kingdom
                            and i have been building noteworthy UX/UI designs and websites for years,
                            which comply with the latest design trends.
                            I help convert a vision and an idea into meaningful and useful products.
                            Having a sharp eye for product evolution helps me prioritize tasks,
                            iterate fast and deliver faster.</motion.p>
                        <MAddress
                            variants={cardVariants}
                        />
                        <motion.div className={styled.cvAndSocialNetworks}
                                    variants={cardVariants}
                        >
                            <motion.div className={styled.btn}>
                                <ButtonLink title={'Download CV'}/>
                            </motion.div>
                            <IconSocialNetwork/>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

