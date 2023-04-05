import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {AboutMe} from "./aboutMe/AboutMe";
import {Skills} from "./skills/Skills";
import {Projects} from "./project/Projects";
import {Contacts} from "./сontacts/Contacts";
import {Footer} from "./footer/Footer";
import {Main} from "./main/Main";
import { useMotionValueEvent, useScroll} from "framer-motion";




function App() {





    return (
        <div
            className="App"
        >
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
