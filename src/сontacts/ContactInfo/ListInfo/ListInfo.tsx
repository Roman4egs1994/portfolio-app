import React from 'react';
import styled from "./ListInfo.module.scss";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAutomobile, faBath, faBathtub, faCommentSms,
    faEnvelopeSquare, faHotTubPerson, faHouseSignal,
    faLocation,
    faLocationPin, faMailBulk, faMailForward, faMailReply, faMailReplyAll,
    faMapLocationDot, faMobile, faMobileAndroid, faMobileAndroidAlt,
    faMobileButton, faMobilePhone, faMobileRetro,
    faMobileScreen,
    faPencil,
    faPencilAlt,
    faPenToSquare,
    faPersonCircleCheck,
    faRoadCircleExclamation, faSignal, faSignal5, faSignalPerfect, faSms, faVoicemail,
    faXmarkCircle
} from "@fortawesome/free-solid-svg-icons";

export const ListInfo = () => {

    const styleIcon = {
        color: '#009e66',
        fontSize: '40px',
        lineHeight: '100%',
        marginRight: '15px',
        cursor: 'pointer',
        backgroundColor: '#111010'
    }

    const location = <FontAwesomeIcon style={styleIcon} icon={faLocation}/>
    const email = <FontAwesomeIcon style={styleIcon} icon={faPenToSquare}/>
    const mobileNumber = <FontAwesomeIcon style={styleIcon} icon={faCommentSms}/>
    const mail = <FontAwesomeIcon style={styleIcon} icon={faMailForward}/>
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
                            <span>Roman Rybkin</span>
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
                            <span>4155 Mann Island, Liverpool, United Kingdom.</span>
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
                            <a href="mailto:emma@example.com">emma@example.com</a>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

