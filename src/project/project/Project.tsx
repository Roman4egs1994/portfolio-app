import React from 'react';
import styled from './Project.module.css'
import animation from './ProjectAnimation.module.css'

type ProjectPropsType = {
    title: string
    imageProject: string

    headerProject: string
    href:string
}


export const Project: React.FC<ProjectPropsType> = (props) => {
    const { title,imageProject,headerProject,href, ...otherProps} = props



    return (
        <div className={styled.project}>
            <div className={styled.imageProjectAndBtn}>
                <ul className={animation.hoverEffectScale}>
                    <li>
                        <img src={imageProject} alt=""/>
                            <div>
                                <h2>{headerProject}</h2>
                                <a href={href}>more info</a>
                            </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

// <img src={imageProject} alt={'image project'}/>
{/*<button className={styled.watchProjectBtn}>Watch</button>*/}