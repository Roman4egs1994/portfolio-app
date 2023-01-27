import React from 'react';
import styled from './Project.module.css'

type ProjectPropsType = {
    image: string
    title: string
    description: string
}


export const Project: React.FC<ProjectPropsType> = (props) => {
    const {image, title, description, ...otherProps} = props

    return (
        <div className={styled.project}>
            <div className={styled.imageProjectAndBtn}>
                <img src={image} alt="img"/>
                <button className={styled.watchProjectBtn}>Watch</button>
            </div>
            <div className={styled.description}>
                <h2 className={styled.title}>{title}</h2>
                <span>{description}</span>
            </div>
        </div>
    );
};

