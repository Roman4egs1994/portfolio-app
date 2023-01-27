import React from 'react';
import styled from './Nav.module.css'


export const Nav = () => {
    return (
        <div className={styled.nav}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    );
};

