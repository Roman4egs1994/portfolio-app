import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStore} from "../../../store/reduxStore";
import {onOffCollapsedAC} from "../../../store/reducers/app-reducer";
import {Nav} from "../../../nav/Nav";
import styled from './BurgerMenu.module.scss'

export const BurgerMenu = () => {

    const dispatch = useDispatch()
    const collapsed = useSelector<AppRootStore, boolean>((state) => state.appReducer.collapsed)

    const onclickCollapsedMenuHandler = () => {
        dispatch(onOffCollapsedAC(collapsed))
    }


    return (

        <>
            <div>
                <span onClick={onclickCollapsedMenuHandler} className={styled.navBarMenu}>
                <span className={styled.line}></span></span>
            </div>

            <div className={!collapsed ? styled.navBarMenuOpen : ''}>
                {!collapsed  && <Nav/>}
            </div>

        </>

    );
};
