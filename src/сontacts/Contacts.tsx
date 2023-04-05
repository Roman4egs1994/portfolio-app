import React from 'react';
import styled from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Form} from "./form/Form";
import Title from "../common/componets/title/Title";
import {ContactInfo} from "./ContactInfo/ContactInfo";
import {motion, useMotionValueEvent, useScroll, Variants} from "framer-motion";
export const Contacts = () => {

    const contactsContainer = styleContainer.container + " " + styled.contactsContainer


    const cardVariants: Variants = {
        offscreen: {
            y: 300
        },
        onscreen: (custom: number) => ({
            y: 0,
            rotate: 0,
            transition: {
                type: "just",
                bounce: 0.5,
                duration: 1
            }
        })
    };

    return (
        <motion.div
            className={styled.contactsBlock}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.35 }}
        >
            <motion.div
                className={contactsContainer}
                variants={cardVariants}
            >
                <Title title={'Get in Touch'} description={'Feel free to contact me anytimes'}/>
                <div className={styled.forms}>
                    <Form/>
                    <ContactInfo/>
                </div>
            </motion.div>
        </motion.div>
    );
};
