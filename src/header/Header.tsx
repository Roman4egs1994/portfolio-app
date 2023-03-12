import React from 'react';
import styled from './Header.module.scss'
import {Nav} from "../nav/Nav";


export const Header = () => {
    return (
        <nav className={styled.header}>
            <a className={styled.navBarBrand} href="">
                <img src="" alt="logo"/>
            </a>
            <Nav/>
        </nav>
    );
};

