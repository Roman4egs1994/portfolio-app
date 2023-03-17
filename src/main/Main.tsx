import React from 'react';
import style from './Main.module.scss'


export const Main = () => {
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
                </div>
            </div>
        </div>
    );
};

