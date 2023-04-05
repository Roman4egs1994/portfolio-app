import React from 'react';
import styled from "./title.module.scss";
import {motion, Variants} from "framer-motion";

type TitlePropsType = {
    description: string
    title: string
}

const Title:React.FC<TitlePropsType> = (props) => {
    const {description, title, ...otherProps} = props

    // const titleAnimation= {
    //     hidden: {
    //         x: 0,
    //         y: 100,
    //         opacity: 0
    //     },
    //     visible: {
    //         x:0 ,
    //         y:0,
    //         opacity: 1,
    //         transition: {delay: 0.1, duration: 0.6},
    //     }
    // }

    const cardVariants: Variants = {
        offscreen: {
            y: 200
        },
        onscreen: {
            y: 0,
            rotate: 0,
            transition: {
                type: "just",
                bounce: 0.5,
                duration: 1
            }
        }
    };

    return (
                <motion.div
                    className={styled.title}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={cardVariants}
                    style={{overflow: 'hidden'}}
                >
                    <p>{description}</p>
                    <h2>{title}</h2>
                    <div className={styled.animatedBar}></div>
                </motion.div>
    );
};

export default Title;