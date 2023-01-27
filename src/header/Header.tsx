import React from 'react';
import styled from './Header.module.css'
import {Nav} from "../nav/Nav";


export const Header = () => {
    return (
        <div className={styled.header}>
            <Nav/>
        </div>
    );
};

