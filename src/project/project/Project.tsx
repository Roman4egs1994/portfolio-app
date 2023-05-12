import React from 'react';
import styled from './Project.module.scss'
import animation from './ProjectAnimation.module.scss'
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../app/castomDispatchAndUseSelector/castomUseAppDispatch";
import {ProjectStateType} from "../project-reducer";

type ProjectPropsType = {
    title: string
    imageProject: string

    headerProject: string
    href: string

    disabled?: boolean
}


export const Project: React.FC<ProjectPropsType> = (props) => {
    const {title, imageProject, headerProject, href, disabled, ...otherProps} = props



    return (
        <div className={styled.project}>
            <div className={styled.imageProjectAndBtn}>
                <ul className={animation.hoverEffectScale}>
                    <li>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src={imageProject} alt="image project"/>
                        <div>
                            <h2>{headerProject}</h2>
                            {/*<a target={"_blank"} href={href} rel="noreferrer">more info</a>*/}
                            <form action={href} target={"_blank"}>
                                <button className={styled.buttonOpenProject} disabled={disabled}>more info</button>
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

