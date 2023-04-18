import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStore} from "../../../app/store";
import {onOffCollapsedAC} from "../../../app/app-reducer";
import {Nav} from "../../../nav/Nav";
import styled from './BurgerMenu.module.scss'
import {useAppDispatch} from "../../../app/castomDispatchAndUseSelector/castomUseAppDispatch";

export const BurgerMenu = () => {

    const dispatch = useAppDispatch()
    const collapsed = useSelector<AppRootStore, boolean>((state) => state.appReducer.collapsed)

    const onclickCollapsedMenuHandler = () => {
        dispatch(onOffCollapsedAC(collapsed))
    }

    const styleNav = {
        padding: '0 0 0 20px',
        fontSize: '10px',
        flexDirection: 'column'
    }

    return (
        <>
            <div>
                <span onClick={onclickCollapsedMenuHandler} className={styled.navBarMenu}>
                <span className={styled.line}></span></span>
            </div>

            <div className={collapsed ? styled.navBarMenuOpen : ''}>
                {collapsed  && <Nav style={styleNav} />}
            </div>

        </>

    );
};
