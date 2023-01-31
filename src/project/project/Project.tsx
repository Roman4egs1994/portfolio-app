import React from 'react';
import styled from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}


export const Project: React.FC<ProjectPropsType> = (props) => {
    const { title, description, ...otherProps} = props

    return (
        <div className={styled.project}>
            <div className={styled.imageProjectAndBtn}>
                <button className={styled.watchProjectBtn}>Watch</button>
            </div>
            <div className={styled.description}>
                <h2 className={styled.title}>{title}</h2>
                <span className={styled.descriptionSpan}>{description}</span>
            </div>
        </div>
    );
};

