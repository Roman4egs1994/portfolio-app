import React from 'react';
// @ts-ignore
import FluidAnimation from 'react-fluid-animation'

type WaveAnimationPropsType={
    className?: string
}

export const WaveAnimation = (props: WaveAnimationPropsType) => {
    return (
        <>
            <FluidAnimation

                // style={{ height: '100vh' }}
                className={props.className}
            />
        </>
    );
};

