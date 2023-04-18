import React from 'react';
import styled from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {MSkill} from "./skill/Skill";
import Title from "../common/componets/title/Title";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {AppRootStore} from "../app/store";
import {SkillsStateType} from "./skills-reducer";
import {animationBlockDescription} from "../common/styles/motionSettings/motionSettings";

export const Skills = () => {


    const skills = useSelector<AppRootStore,SkillsStateType[]>((state) => state.skillsReducer)

    /** Настройки анимации */
    const settingsMotion = animationBlockDescription

    const divSkillsContainer = styleContainer.container + " " + styled.skillsContainer;
    const mySkills = skills.map(el =>
        <MSkill
            key={el.id}
            title={el.title}
            description={el.description}
            icon={el.icon}
        />)

    return (
        <motion.div
            className={styled.skillsBlock}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
            style={{overflow: 'hidden'}}
        >
            <div id={"skill"} className={divSkillsContainer}>
                <Title description={'This is my skills'} title={"Skills"}/>
                <motion.div
                    className={styled.skills}
                    variants={settingsMotion}
                >
                    {mySkills}
                </motion.div>
            </div>
        </motion.div>
    );
};

