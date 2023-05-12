import React from 'react';
import styled from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Project} from "./project/Project";
import Title from "../common/componets/title/Title";
import { motion} from "framer-motion";

import {ProjectStateType} from "./project-reducer";
import {animationBlockDescription} from "../common/styles/motionSettings/motionSettings";
import {useAppSelector} from "../app/castomDispatchAndUseSelector/castomUseAppDispatch";

export const Projects = () => {

    const animationMotion = animationBlockDescription
    const projectsContainer = styleContainer.container + " " + styled.projectContainer
    const projects = useAppSelector<ProjectStateType>(state => state.projectReducer)

    const mappedProject = projects.projects.map(el => <Project
        key={el.id}
        title={el.title}
        imageProject={el.image}
        headerProject={el.headerProject}
        href={el.href}
        disabled={el.status === 'not ready'}
    />
    )

    return (
        <motion.div className={styled.projectsBlock}
                    id={"project"}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.2, once: true}}
                    style={{overflow: 'hidden'}}
        >
            <motion.div className={projectsContainer} variants={animationMotion}>
                <Title title={'Projects'} description={'Showcasing some of my best work'}/>
                <div className={styled.projects}>
                    {mappedProject}
                </div>
            </motion.div>
        </motion.div>
    );
};

