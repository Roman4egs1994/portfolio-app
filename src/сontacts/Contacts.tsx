import React from 'react';
import styled from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Form} from "./form/Form";
import Title from "../common/componets/title/Title";
import {ContactInfo} from "./ContactInfo/ContactInfo";
import {motion} from "framer-motion";
import {animationBlockDescription} from "../common/styles/motionSettings/motionSettings";
import {useAppDispatch, useAppSelector} from "../app/castomDispatchAndUseSelector/castomUseAppDispatch";
import {ModalWindow} from "../common/componets/modalWindow/ModalWindow";
import {ModalStatusType, modalWindowsOnOffAC} from "../common/componets/modalWindow/modalReducer";
import {StatusLoadingType} from "../app/app-reducer";




export const Contacts = () => {



    const  dispatch = useAppDispatch()
    const modalWindowOnOff = useAppSelector<ModalStatusType>(state => state.modalWindowReducer.modalWindow)
    const statusLoading = useAppSelector<StatusLoadingType>(state => state.appReducer.statusLoading)

    const contactsContainer = styleContainer.container + " " + styled.contactsContainer
    const animationMotion = animationBlockDescription

    const onclickCloseModalWindow = () => dispatch(modalWindowsOnOffAC("closeStatus"))

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

                <motion.div className={styled.forms} variants={animationMotion}>
                    <Form/>
                    <ContactInfo/>
                </motion.div>
                {modalWindowOnOff === 'openPositive'
                    ? <ModalWindow
                    title={'Message'}
                    footer={<button onClick={onclickCloseModalWindow}>close</button>}
                    // visible={true}
                    content={'Your message has been sent successfully'}
                    onClose={onclickCloseModalWindow}
                    />
                    : <></>}
                {modalWindowOnOff === 'openNegative' ? <ModalWindow
                        title={'Message'}
                        footer={<button onClick={onclickCloseModalWindow}>close</button>}
                        // visible={true}
                        content={'your message was not delivered. Try again later or other contact methods'}
                        onClose={onclickCloseModalWindow}
                    />
                    : <></>}
            </motion.div>
        </motion.div>
    );
};
