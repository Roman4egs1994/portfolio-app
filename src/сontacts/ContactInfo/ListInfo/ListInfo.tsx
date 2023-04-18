import React from 'react';
import styled from "./ListInfo.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
     faCommentSms,
    faEnvelopeSquare,
    faLocation,
    faPenToSquare,

} from "@fortawesome/free-solid-svg-icons";

export const ListInfo = () => {

    const styleIcon = {
        color: '#009e66',
        fontSize: '35px',
        lineHeight: '100%',
        marginRight: '15px',
        cursor: 'pointer',
        backgroundColor: '#111010'
    }

    const location = <FontAwesomeIcon style={styleIcon} icon={faLocation}/>
    const email = <FontAwesomeIcon style={styleIcon} icon={faPenToSquare}/>
    const mobileNumber = <FontAwesomeIcon style={styleIcon} icon={faCommentSms}/>
    const mail = <FontAwesomeIcon style={styleIcon} icon={faEnvelopeSquare}/>
    return (
        <>
            <ul className={styled.listInfo}>
                <li>
                    <div className={styled.flex}>
                            <span className={styled.icon}>
                                <i className={styled.logo}>{email}</i>
                            </span>
                        <div className={styled.details}>
                            <h6 className={styled.name}>Name</h6>
                            <span>Roman Moisidi</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styled.flex}>
                            <span className={styled.icon}>
                                <i className={styled.logo}>{location}</i>
                            </span>
                        <div className={styled.details}>
                            <h6 className={styled.name}>Location</h6>
                            <span>Ulyanovsk, Russia.</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styled.flex}>
                            <span className={styled.icon}>
                                <i className={styled.logo}>{mobileNumber}</i>
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
                                <i className={styled.logo}>{mail}</i>
                            </span>
                        <div className={styled.details}>
                            <h6 className={styled.name}>Email Me</h6>
                            {/*<span>emma@example.com</span>*/}
                            <a target={'_blank'} href="mailto:romanmoisidi@gmail.com">romanmoisidi@gmail.com</a>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

