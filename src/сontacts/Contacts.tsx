import React from 'react';
import styled from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Form} from "./form/Form";
import Title from "../common/componets/title/Title";
import {ContactInfo} from "./ContactInfo/ContactInfo";
import {motion} from "framer-motion";

export const Contacts = () => {

    const contactsContainer = styleContainer.container + " " + styled.contactsContainer


    const animationBlockDescription = {
        hidden: {
            x: 0,
            y: 200,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2, duration: 0.7}
        })
    }

    return (
        <motion.div
            className={styled.contactsBlock}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
            style={{overflow: 'hidden'}}
            id={'contact'}
        >
            <motion.div
                className={contactsContainer}
                variants={animationBlockDescription}
            >
                <Title title={'Get in Touch'} description={'Feel free to contact me anytimes'}/>
                <motion.div className={styled.forms}
                            variants={animationBlockDescription}
                >
                    <Form/>
                    <ContactInfo/>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
