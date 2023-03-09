import React from 'react';
import styled from "./title.module.css";

type TitlePropsType = {
    description: string
    title: string
}

const Title:React.FC<TitlePropsType> = (props) => {
    const {description, title, ...otherProps} = props
    return (
        <>
            <div className={styled.title}>
                <p>{description}</p>
                <h2>{title}</h2>
                <div className={styled.animatedBar}></div>
            </div>
        </>
    );
};

export default Title;