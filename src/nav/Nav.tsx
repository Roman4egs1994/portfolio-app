import React from 'react';
import styled from './Nav.module.scss'
import {useSelector} from "react-redux";
import {AppRootStore} from "../store/reduxStore";


export const Nav = () => {
    const collapsed = useSelector<AppRootStore, boolean>((state) => state.appReducer.collapsed)

    return (
        <ul className={styled.navbar}>
            <li className={styled.navItem}>
                <a className={styled.navLink} href="">About</a>
            </li>
            <li className={styled.navItem}>
                <a className={styled.navLink} href="">Skills</a>
            </li>
            <li className={styled.navItem}>
                <a className={styled.navLink} href="">Project</a>
            </li>
            <li className={styled.navItem}>
                <a className={styled.navLink} href="">Contacts</a>
            </li>
        </ul>
    );
};

