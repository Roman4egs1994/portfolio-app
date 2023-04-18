import React from 'react';
import styled from './ButtonLink.module.scss'


type ButtonLinkPropsType = {
    title: string
    styleSettings?: string
    callBack?: () => void
    type?: 'submit'
}

export const ButtonLink: React.FC<ButtonLinkPropsType> = (props) => {
const {title, styleSettings, callBack, type, ...otherProps} = props


    const style = styleSettings + " " + styled.buttonGreen

    const onclickCallBackHandler = () => {
        if (callBack) {
            callBack()
        }
    }


    return (
        <>
            <button type={type} className={style} onClick={onclickCallBackHandler}>{title}</button>
        </>
    );
};

