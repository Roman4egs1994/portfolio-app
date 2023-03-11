import React from 'react';
import styled from './Skills.module.scss'
// import styleContainer from './../common/styles/Container.module.css'
import styleContainer from '../common/styles/Container.module.css'

import {Skill} from "./skill/Skill";
import {v1} from "uuid";
import Title from "../common/componets/title/Title";

type SkillsType = {
    id: string
    title: string
    description: string
}


export const Skills = () => {

    const skills: SkillsType[] = [
        {id: v1(), title: "React", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: v1(), title: "TypeScript", description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {id: v1(), title: "CSS", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: v1(), title: "Figma", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: v1(), title: "Storybook", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: v1(), title: "Redux", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
    ]

    const divSkillsContainer = styleContainer.container + " " + styled.skillsContainer;

    const mySkills = skills.map(el => <Skill key={el.id} title={el.title} description={el.description}/>)

    return (
        <div className={styled.skillsBlock}>
            <div className={divSkillsContainer}>
                <Title description={'This is my skills'} title={"Skills"}/>
                <div className={styled.skills}>
                    {mySkills}
                </div>
            </div>
        </div>
    );
};

