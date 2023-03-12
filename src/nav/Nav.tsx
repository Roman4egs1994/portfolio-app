import React from 'react';
import styled from './Nav.module.scss'


export const Nav = () => {
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

