import React from 'react';
import styled from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Form} from "./form/Form";

export const Contacts = () => {

    const contactsContainer = styleContainer.container + " " + styled.contactsContainer

    return (
        <div className={styled.contactsBlock}>
            <div className={contactsContainer}>
                <h2 className={styled.title}>Contacts</h2>
                <div className={styled.forms}>
                    <Form/>
                </div>
            </div>
        </div>
    );
};
