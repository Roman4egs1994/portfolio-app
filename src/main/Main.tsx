import React from 'react';
import style from './Main.module.scss'
import {IconSocialNetwork} from "../common/componets/icon/IconSocialNetwork/IconSocialNetworkType";
import {hover} from "@testing-library/user-event/dist/hover";


export const Main = () => {

    const iconStyle = {
        display: "block",
        // pudding: "10px",
        position: 'absolute',
        right: '0',
        bottom: '0'
    }
    const styleLi = {
        paddingBottom: '10px'
    }

    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.containerCenter}>
                    <div className={style.textCenter}>
                        <h1 className={style.name}>
                            Roman Rybkin
                        </h1>
                        <h4 className={style.headLine}>
                            I’m a
                            <span className={style.singleHeadLine}>

                            </span>
                        </h4>
                    </div>
                    <div className={style.fixedBlock}>
                        <IconSocialNetwork style={iconStyle} styleLi={styleLi}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

