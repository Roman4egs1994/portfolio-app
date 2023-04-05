import React, {FunctionComponent, SVGProps, useRef} from 'react';
import styled from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {MSkill, Skill} from "./skill/Skill";
import {v1} from "uuid";
import Title from "../common/componets/title/Title";
import reactIcon from '../common/assets/icon/reactIcon.png'
import cssIcon from '../common/assets/icon/cssIcon.png'
import storyBookIcon from '../common/assets/icon/storybookIcon.png'
import typeScript from '../common/assets/icon/typescriptIcon.png'
import redux from '../common/assets/icon/reduxIcon.png'
import figma from '../common/assets/icon/figmaIcon.png'
import {motion, useMotionValueEvent, useScroll, Variants} from "framer-motion";


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

    // const cardVariants: Variants = {
    //     offscreen: {
    //         y: 200
    //     },
    //     onscreen: (custom: number) => ({
    //         y: 0,
    //         rotate: 0,
    //         transition: {
    //             type: "just",
    //             bounce: 0.5,
    //             duration: 1
    //         }
    //     })
    // };
    const animationBlockDescription = {
        hidden: {
            x:0,
            y: 200,
            opacity: 0
        },
        visible: (custom:number) => ({
            x: 0,
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 ,duration: 0.7}
        })
    }

    const divSkillsContainer = styleContainer.container + " " + styled.skillsContainer;
    const mySkills = skills.map(el =>
        <MSkill
            key={el.id}
            title={el.title}
            description={el.description}
            icon={el.icon}
        />)

    // const { scrollY  } = useScroll();
    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     console.log("Page scroll: ", latest)
    // })

    return (
        <motion.div
            className={styled.skillsBlock}
            // initial="offscreen"
            // whileInView="onscreen"
            // viewport={{ once: true, amount: 0.35 }}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
            style={{overflow: 'hidden'}}
        >
            <div id={"skill"} className={divSkillsContainer}>
                <Title description={'This is my skills'} title={"Skills"}/>
                <motion.div
                    className={styled.skills}
                    variants={animationBlockDescription}
                >
                    {mySkills}
                </motion.div>
            </div>
        </motion.div>
    );
};

