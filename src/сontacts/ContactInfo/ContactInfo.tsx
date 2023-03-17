import React from 'react';
import styled from './ContactInfo.module.scss'
import {ListInfo} from "./ListInfo/ListInfo";


export const ContactInfo = () => {
    return (
        <div className={styled.contact}>
            <div className={styled.contactInfo}>
                <h4 className={styled.title}>Contact Info</h4>
                <p className={styled.description}>Always available for freelance work if the right project comes along,
                    Feel free to contact me!
                </p>
                <ListInfo/>
            </div>
        </div>
    );
};
