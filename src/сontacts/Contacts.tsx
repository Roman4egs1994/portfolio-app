import React from 'react';
import styled from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Form} from "./form/Form";
import Title from "../common/componets/title/Title";
import {ContactInfo} from "./ContactInfo/ContactInfo";
import {motion} from "framer-motion";
import {animationBlockDescription} from "../common/styles/motionSettings/motionSettings";

export const Contacts = () => {

    const contactsContainer = styleContainer.container + " " + styled.contactsContainer
    const animationMotion = animationBlockDescription

    return (
        <motion.div
            className={styled.contactsBlock}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
            style={{overflow: 'hidden'}}
            id={'contacts'}
        >
            <motion.div
                className={contactsContainer}
                variants={animationMotion}
            >
                <Title title={'Get in Touch'} description={'Feel free to contact me anytimes'}/>
                <motion.div className={styled.forms}
                            variants={animationMotion}
                >
                    <Form/>
                    <ContactInfo/>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
