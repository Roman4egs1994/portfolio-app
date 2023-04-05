import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styled from './ReactTypingEffect.module.scss'


type ReactTypingEffectText = {
    text: string | string[] //текст
    speed?: number | undefined; //по умолчанию 500 мс. Скорость печати
    eraseSpeed?: number | undefined; //по умолчанию 500 мс. Скорость стирания текста
    eraseDelay?: number | undefined;   //по умолчанию 5000 мс. Время ждать, прежде чем стереть текст.
    typingDelay?: number | undefined;  // по умолчанию 2500 мс. Время ждать, прежде чем начать печатать.

}


export const ReactTypingEffectText = (props: ReactTypingEffectText) => {
    return (
        <>
            <ReactTypingEffect
                text={props.text}
                speed={props.speed}
                eraseSpeed={props.eraseSpeed}
                typingDelay={props.typingDelay}
                eraseDelay={props.typingDelay}
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