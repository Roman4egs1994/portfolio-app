import React, {forwardRef, LegacyRef} from 'react';
import styled from "./Address.module.scss";
import {motion} from 'framer-motion'




export const Address = React.forwardRef((props, ref:LegacyRef<HTMLElement>) => {

    return (
            <address
                className={styled.profileInfo}
                ref={ref}
            >
                <div className={styled.row}>
                    <div className={styled.rowSingleInfo}>
                        <span>Name:</span>
                        <p>Roman Moisidi</p>
                    </div>
                    <div className={styled.rowSingleInfo}>
                        <span>Email:</span>
                        <p>
                            <a  href="mailto:romanmoisidi@gmail.com">romanmoisidi@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className={styled.row}>
                    <div className={styled.rowSingleInfo}>
                        <span>Age:</span>
                        <p>29</p>
                    </div>
                    <div className={styled.rowSingleInfo}>
                        <span>From:</span>
                        <p>Russia, Ulyanovsk</p>
                    </div>

                </div>
            </address>
    );
});

export const MAddress = motion(Address)