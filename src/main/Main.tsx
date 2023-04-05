import React from 'react';
import style from './Main.module.scss'
import {IconSocialNetwork} from "../common/componets/icon/IconSocialNetwork/IconSocialNetworkType";






export const Main = () => {



    const iconStyle = {
        display: "block",
        position: 'absolute',
        right: '0',
        bottom: '0'
    }
    const styleLi = {
        paddingBottom: '10px'
    }

    const particlesOpt = {
        'particles':{
            "number": {
                "value": 150,
                "density":{
                    "enable": true,
                    "value_area": 800
                }
            }
        }
    }

    return (
        <div className={style.main}>
            {/*<Particle/>*/}
            <div className={style.container}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                {/*<Particles className={style.particle}  params={particlesOpt}/>*/}
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

