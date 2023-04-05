import React from 'react';
import styled from './Nav.module.scss'
import {Link} from "react-scroll";



type NavPropsType = {
    style?: object
}

export const Nav = (props: NavPropsType) => {




    return (
        <ul className={styled.navbar} style={props.style} >
            <li className={styled.navItem} >
                {/*<a className={styled.navLink} href="#AboutMe">About</a>*/}
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
                {/*<a className={styled.navLink} href="#skill">Skills</a>*/}
                <Link activeClass={styled.active}
                      className={styled.navLink}
                      to="skill"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={1000}
                      isDynamic={true}
                >
                    Skills
                </Link>
            </li>
            <li className={styled.navItem}>
                {/*<a className={styled.navLink} href="#project">Project</a>*/}
                <Link activeClass={styled.active}
                      className={styled.navLink}
                      to="project"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={1000}
                      isDynamic={true}
                >
                    Project
                </Link>
            </li>
            <li className={styled.navItem}>
                {/*<a className={styled.navLink} href="#contact">Contacts</a>*/}
                <Link activeClass={styled.active}
                      className={styled.navLink}
                      to="project"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={1000}
                      isDynamic={true}
                >
                    Contacts
                </Link>
            </li>
        </ul>
    );
};

