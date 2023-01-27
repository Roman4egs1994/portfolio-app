import React from 'react';
import styled from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {v1} from "uuid";

export const Projects = () => {

    const projectsContainer = styleContainer.container + " " + styled.projectContainer

    const stateProject = [
        {
            id: v1(),
            image: "https://cdnb.ganttpro.com/uploads/2017/04/project-planning-and-a-project-plan.png",
            title: "Social Network",
            description: "Социальная сеть Социальная сеть Социальная сеть Социальная сеть Социальная сеть "
        },
        {
            id: v1(),
            image: "https://cdnb.ganttpro.com/uploads/2017/04/project-planning-and-a-project-plan.png",
            title: "Todolist",
            description: "Todolist Todolist Todolist TodolistTodolist TodolistTodolistTodolist TodolistTodolist"
        },
        {
            id: v1(),
            image: "https://cdnb.ganttpro.com/uploads/2017/04/project-planning-and-a-project-plan.png",
            title: "Counter",
            description: "CounterCounterCounterCounterCounter rCounterrCounterrCounterrCounterCounter CounterCounter   CounterCounter"
        }
    ]

    const mappedProject = stateProject.map(el => <Project key={el.id} image={el.image} title={el.title} description={el.description}/>)

    return (
        <div className={styled.projectsBlock}>
            <div className={projectsContainer}>
                <h2 className={styled.title}>Projects</h2>
                <div className={styled.projects}>
                    {mappedProject}
                </div>
            </div>
        </div>
    );
};

