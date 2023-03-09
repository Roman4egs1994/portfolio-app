import React from 'react';
import styled from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {v1} from "uuid";
import Title from "../common/componets/title/Title";
import imageProject1 from '../common/img/imageInProjects/item-1.jpg'
import imageProject2 from '../common/img/imageInProjects/item-2.jpg'
import imageProject3 from '../common/img/imageInProjects/item-3.jpg'
import imageProject4 from '../common/img/imageInProjects/item-4.jpg'
import imageProject5 from '../common/img/imageInProjects/item-5.jpg'
import imageProject6 from '../common/img/imageInProjects/item-6.jpg'

export const Projects = () => {

    const projectsContainer = styleContainer.container + " " + styled.projectContainer

    const stateProject = [
        {
            id: v1(),
            image: imageProject1 ,
            title: "Social Network",
            description: "Социальная сеть Социальная сеть Социальная сеть Социальная сеть Социальная сеть "
        },
        {
            id: v1(),
            image: imageProject2,
            title: "Todolist",
            description: "Todolist Todolist Todolist TodolistTodolist TodolistTodolistTodolist TodolistTodolist"
        },
        {
            id: v1(),
            image: imageProject3,
            title: "Counter",
            description: "CounterCounterCounterCounterCounter rCounterrCounterrCounterrCounterCounter CounterCounter   CounterCounter"
        },
        {
            id: v1(),
            image: imageProject4,
            title: "Counter",
            description: "CounterCounterCounterCounterCounter rCounterrCounterrCounterrCounterCounter CounterCounter   CounterCounter"
        },
        {
            id: v1(),
            image: imageProject5,
            title: "Counter",
            description: "CounterCounterCounterCounterCounter rCounterrCounterrCounterrCounterCounter CounterCounter   CounterCounter"
        },
        {
            id: v1(),
            image: imageProject6,
            title: "Counter",
            description: "CounterCounterCounterCounterCounter rCounterrCounterrCounterrCounterCounter CounterCounter   CounterCounter"
        },
    ]

    const mappedProject = stateProject.map(el => <Project key={el.id} title={el.title} description={el.description} imageProject={el.image}/>)

    return (
        <div className={styled.projectsBlock}>
            <div className={projectsContainer}>
                <Title title={'Portfolio'} description={'Showcasing some of my best work'}/>
                <div className={styled.projects}>
                    {mappedProject}
                </div>
                {/*<img src={imageProject1} alt="asdas"/>*/}
            </div>
        </div>
    );
};

