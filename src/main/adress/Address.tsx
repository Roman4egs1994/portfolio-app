import React from 'react';
import styled from "./Address.module.scss";

export const Address = () => {
    return (
        <>
            <address className={styled.profileInfo}>
                <div className={styled.row}>
                    <div className={styled.rowSingleInfo}>
                        <span>Name:</span>
                        <p>Roman Rybkin</p>
                    </div>
                    <div className={styled.rowSingleInfo}>
                        <span>Email:</span>
                        <p>
                            <a href="emma@example.com">roman@example.com</a>
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
                        <p>USA, NY</p>
                    </div>

                </div>

            </address>
        </>
    );
};

