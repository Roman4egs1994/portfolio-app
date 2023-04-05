import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styled from './ReactTypingEffect.module.scss'


type ReactTypingEffectText = {
    text: string[]
}


export const ReactTypingEffectText = (props:ReactTypingEffectText) => {
    return (
        <>
            <ReactTypingEffect
                // text={["React developer!", "Frontend!"]}
                text = {props.text}
                displayTextRenderer={(text, i) => {
                    return (
                        <>
                            {text.split('').map((el, i) => {
                                const key = `${i}`;
                                return (
                                    <span
                                        key={key}
                                    >{el}</span>
                                );
                            })}
                        </>
                    );
                }}
            />
        </>
    );
};