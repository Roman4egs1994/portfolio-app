
import style from './Main.module.scss'
import {IconSocialNetwork} from "../common/componets/icon/IconSocialNetwork/IconSocialNetworkType";
import {ReactTypingEffectText} from "../common/componets/typingText/ReactTypingEffect";
import React, {useEffect, useRef, useState} from 'react'
import {WaveAnimation} from "../common/componets/WaveAnimation/WaveAnimation";
import styleContainer from "../common/styles/Container.module.scss";
import styled from "../project/Projects.module.scss";
import {Header} from "../header/Header";
// import FluidAnimation from 'react-fluid-animation'



export const Main = () => {

    // const iconStyle = {
    //     display: "block",
    //     position: 'absolute',
    //     right: '0',
    //     bottom: '0'
    // }
    // const styleLi = {
    //     paddingBottom: '10px'
    // }

    const textTyping = ["React developer.", "Frontend developer."]
    // const projectsContainer = styleContainer.container + " " + styled.projectContainer

    const [shouldRender, setShouldRender] = useState(true);
    const [pixelsScrolled, setPixelsScrolled] = useState(0);
    const MAX_SCROLL = 2000;

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollBottom = scrollTop + window.innerHeight;
            // @ts-ignore
            const componentTop = ref.current.offsetTop;
            // @ts-ignore
            const componentBottom = componentTop + ref.current.clientHeight;

            const pixelsScrolled = scrollTop + window.innerHeight - componentTop;

            if (scrollBottom >= componentTop && scrollTop <= componentBottom) {
                setShouldRender(true);
            } else {
                setShouldRender(false);
            }

            setPixelsScrolled(pixelsScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (pixelsScrolled >= MAX_SCROLL) {
            setShouldRender(false);
        }
    }, [pixelsScrolled]);

    const ref = useRef<HTMLDivElement>(null);


    return (
        <>
            <div ref={ref}>
                {shouldRender &&<WaveAnimation className={style.fluidAnimation}/>}
            </div>
            <div className={style.main}>
                <div className={style.container}>
                    <div className={style.containerCenter}>
                        <div className={style.textCenter}>
                            <h1 className={style.name}>
                                Roman Moisidi
                            </h1>
                            <h4 className={style.headLine}>
                                I’m a
                                <span className={style.singleHeadLine}>
                                <ReactTypingEffectText
                                    text={textTyping}
                                    speed={200}
                                    eraseSpeed={200}
                                    eraseDelay={5000}
                                    typingDelay={500}
                                />
                            </span>
                            </h4>
                        </div>

                        {/*<div className={style.fixedBlock}>*/}
                        {/*    <IconSocialNetwork style={iconStyle} styleLi={styleLi}/>*/}
                        {/*</div>*/}

                    </div>


                </div>
            </div>
        </>

    );
};

