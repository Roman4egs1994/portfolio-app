import React from 'react';
import styled from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
}


export const Skill: React.FC<SkillPropsType> = (props) => {
    const {
        title,
        description,
    } = props


    return (
        <div className={styled.skill}>
            <div className={styled.icon}></div>
            <h3 className={styled.title}>{title}</h3>
            <span className={styled.description}>{description}</span>
        </div>
    );
};
