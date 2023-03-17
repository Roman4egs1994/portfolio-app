import React from 'react';
import styled from './Contacts.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Form} from "./form/Form";
import Title from "../common/componets/title/Title";

export const Contacts = () => {

    const contactsContainer = styleContainer.container + " " + styled.contactsContainer

    return (
        <div className={styled.contactsBlock}>
            <div className={contactsContainer}>
                <Title title={'Get in Touch'} description={'Feel free to contact me anytimes'}/>
                <div className={styled.forms}>
                    <Form/>

                </div>
            </div>
        </div>
    );
};
