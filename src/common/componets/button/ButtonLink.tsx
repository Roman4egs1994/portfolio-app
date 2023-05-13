import React from 'react';
import styled from './ButtonLink.module.scss'


type ButtonLinkPropsType = {
    title: string
    styleSettings?: string
    callBack?: () => void
    type?: 'submit'
    disabled?: boolean
    style?: object
}

export const ButtonLink: React.FC<ButtonLinkPropsType> = (props) => {
    const {title, styleSettings, callBack, type, style, disabled, ...otherProps} = props


    const styles = styled.buttonGreen + " " + styleSettings

    const onclickCallBackHandler = () => {
        if (callBack) {
            callBack()
        }
    }


    return (
        <>
            <button
                type={type}
                disabled={disabled}
                className={styles}
                onClick={onclickCallBackHandler}
                style={style}
            >
                {title}
            </button>
        </>
    );
};

