import React, {forwardRef, LegacyRef} from 'react';
import styled from './Skill.module.scss'
import {motion} from "framer-motion";
import {Address} from "../../aboutMe/adress/Address";




type SkillPropsType = {
    icon:string
    title: string
    description: string
}


export const Skill: React.FC<SkillPropsType> = forwardRef((props,ref:LegacyRef<HTMLDivElement>) => {
    const {
        title,
        description,
        icon
    } = props


    return (
        <div
            className={styled.skill}
            ref={ref}
        >
            <div className={styled.icon}>
                <img className={styled.elementIcon} src={icon}/>
            </div>
            <h3 className={styled.title}>{title}</h3>
            <span className={styled.description}>{description}</span>
        </div>
    );
});


export const MSkill = motion(Skill)