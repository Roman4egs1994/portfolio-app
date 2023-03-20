import React, {FunctionComponent, SVGProps} from 'react';
import styled from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {v1} from "uuid";
import Title from "../common/componets/title/Title";
import reactIcon  from '../common/assets/icon/reactIcon.png'
import cssIcon  from '../common/assets/icon/cssIcon.png'
import storyBookIcon  from '../common/assets/icon/storybookIcon.png'
import typeScript  from '../common/assets/icon/typescriptIcon.png'
import redux  from '../common/assets/icon/reduxIcon.png'
import figma from '../common/assets/icon/figmaIcon.png'


type SkillsType = {
    icon: string
    id: string
    title: string
    description: string
}

export const Skills = () => {

    const skills: SkillsType[] = [
        {
            id: v1(),
            icon: reactIcon,
            title: "React",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            id: v1(),
            icon: typeScript,
            title: "TypeScript",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: v1(),
            icon: cssIcon,
            title: "Design Trends",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            id: v1(),
            icon: figma,
            title: "Figma",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            id: v1(),
            icon: storyBookIcon,
            title: "Storybook",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            id: v1(),
            icon: redux,
            title: "Redux",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }
    ]

    const divSkillsContainer = styleContainer.container + " " + styled.skillsContainer;

    const mySkills = skills.map(el => <Skill key={el.id} title={el.title} description={el.description} icon={el.icon}/>)

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

