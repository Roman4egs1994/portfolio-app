import React from 'react';
import styled from './ButtonLink.module.scss'


type ButtonLinkPropsType = {
    title: string
    styleSettings?:string
}

export const ButtonLink = (props:ButtonLinkPropsType) => {

    const style = props.styleSettings + " " + styled.buttonGreen

    return (
            <>
                <button className={style}>{props.title}</button>
            </>
    );
};

