import React from 'react';
// @ts-ignore
import FluidAnimation from 'react-fluid-animation'

type WaveAnimationPropsType={
    className?: string
}

export const WaveAnimation = (props: WaveAnimationPropsType) => {

    const defaultConfig = {
        textureDownsample: 2,
        densityDissipation: 0.98,
        velocityDissipation: 0.99,
        pressureDissipation: 0.9,
        pressureIterations: 25,
        curl: 36,
        splatRadius: 0.01
    };

    return (
        <>
            <FluidAnimation
                config={defaultConfig}
                className={props.className}
            />
        </>
    );
};

