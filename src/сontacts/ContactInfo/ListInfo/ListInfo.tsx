import React from 'react';
import styled from "./ListInfo.module.scss";

export const ListInfo = () => {
    return (
        <>
            <ul className={styled.listInfo}>
                <li>
                    <div className={styled.flex}>
                            <span className={styled.icon}>
                                <i className={styled.logo}></i>
                            </span>
                        <div className={styled.details}>
                            <h6 className={styled.name}>Name</h6>
                            <span>Roman Rybkin</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styled.flex}>
                            <span className={styled.icon}>
                                <i className={styled.logo}></i>
                            </span>
                        <div className={styled.details}>
                            <h6 className={styled.name}>Location</h6>
                            <span>4155 Mann Island, Liverpool, United Kingdom.</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styled.flex}>
                            <span className={styled.icon}>
                                <i className={styled.logo}></i>
                            </span>
                        <div className={styled.details}>
                            <h6 className={styled.name}>Call Me</h6>
                            <span>+44 1632 967704</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styled.flex}>
                            <span className={styled.icon}>
                                <i className={styled.logo}></i>
                            </span>
                        <div className={styled.details}>
                            <h6 className={styled.name}>Email Me</h6>
                            {/*<span>emma@example.com</span>*/}
                            <a href="mailto:emma@example.com">emma@example.com</a>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

