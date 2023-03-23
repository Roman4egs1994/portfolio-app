import React from 'react';
import styled from './Header.module.scss'
import {Nav} from "../nav/Nav";
import {BurgerMenu} from "../common/componets/BurgerMenu/BurgerMenu";


export const Header = () => {
    return (
        <nav className={styled.header}>
            <a className={styled.navBarBrand} href="">
                <img src="" alt="logo"/>
            </a>
            <div className={styled.displayNoneNavigate}>
                <Nav/>
            </div>
            <div className={styled.displayActiveNavigate}>
                <BurgerMenu/>
            </div>
        </nav>
    );
};

