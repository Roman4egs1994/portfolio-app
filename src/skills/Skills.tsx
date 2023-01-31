import React from 'react';
import styled from './Skills.module.css'
// import styleContainer from './../common/styles/Container.module.css'
import styleContainer from '../common/styles/Container.module.css'

import {Skill} from "./skill/Skill";
import {v1} from "uuid";

type SkillsType = {
    id: string
    title: string
    description: string
}


export const Skills = () => {

    const skills: SkillsType[] = [
        {id: v1(), title: "JS", description: "texttexttexttexttexttexttexttexttexttextexttextexttexttexttext"},
        {id: v1(), title: "CSS", description: 'texttexttexttexttexttexttexttexttexttexttexttext'},
        {id: v1(), title: "React", description: "texttexttexttexttexttexttexttexttexttexttexttext"}
    ]

    const divSkillsContainer = styleContainer.container + " " + styled.skillsContainer;

    const mySkills = skills.map(el => <Skill key={el.id} title={el.title} description={el.description}/>)

    return (
        <div className={styled.skillsBlock}>
            <div className={divSkillsContainer}>
                <h2 className={styled.title}>Skills</h2>
                <div className={styled.skills}>
                    {mySkills}
                </div>
            </div>
        </div>
    );
};

