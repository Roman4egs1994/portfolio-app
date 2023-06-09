import React from 'react';
import styled from './Nav.module.scss'
import {Link} from "react-scroll";
import {Navigate, Route, Routes} from "react-router-dom";



type NavPropsType = {
    style?: object
}

export const Nav = (props: NavPropsType) => {
    return (
        <ul className={styled.navbar} style={props.style} >
            <li className={styled.navItem} >
                <Link activeClass={styled.active}
                      className={styled.navLink}
                      to="AboutMe"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={1}
                      duration={500}
                      delay={200}
                      isDynamic={true}
                >
                    About
                </Link>
            </li>
            <li className={styled.navItem}>
                <Link activeClass={styled.active}
                      className={styled.navLink}
                      to="skill"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={1}
                      duration={500}
                      delay={200}
                      isDynamic={true}
                >
                    Skills
                </Link>
            </li>
            <li className={styled.navItem}>
                <Link activeClass={styled.active}
                      className={styled.navLink}
                      to="project"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={1}
                      duration={500}
                      delay={200}
                      isDynamic={true}
                >
                    Project
                </Link>
            </li>
            <li className={styled.navItem}>
                <Link activeClass={styled.active}
                      className={styled.navLink}
                      to="contacts"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={1}
                      duration={500}
                      delay={200}
                      isDynamic={true}
                >
                    Contacts
                </Link>
            </li>
            {/*<Routes>*/}
            {/*    /!*    <Route path={'/'} element={<Main/>}/>*!/*/}
            {/*    <Route  path={'/404'} element={<h1>404</h1>}/>*/}
            {/*    <Route  path={'*'} element={<Navigate to={'/404'}/>}/>*/}
            {/*</Routes>*/}
        </ul>
    );
};

