import React from 'react';
import styled from './Skill.module.scss'




type SkillPropsType = {
    icon:string
    title: string
    description: string
}


export const Skill: React.FC<SkillPropsType> = (props) => {
    const {
        title,
        description,
        icon
    } = props


    return (
        <div className={styled.skill}>
            <div className={styled.icon}>
                <img className={styled.elementIcon} src={icon}/>
            </div>
            <h3 className={styled.title}>{title}</h3>
            <span className={styled.description}>{description}</span>
        </div>
    );
};
