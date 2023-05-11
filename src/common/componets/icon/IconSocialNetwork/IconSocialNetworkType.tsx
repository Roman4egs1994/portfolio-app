import React, {ReactElement} from 'react';
import styled from './IconSocialNetwork.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'


type iconsItemType = {
    link: string
    icon: ReactElement<any, any>
}

type IconSocialNetworkType = {
    style?: any
    styleLi?: any
}

export const IconSocialNetwork = (props: IconSocialNetworkType) => {

    const styleIcon = {
        color: '#cecece',
        fontSize: '23px',
        lineHeight: '100%',
        marginRight: '15px',
        cursor: 'pointer',
        backgroundColor: '#111010'
    }

    const telegram = <FontAwesomeIcon style={styleIcon} icon={faTelegram}/>
    const instagram = <FontAwesomeIcon style={styleIcon} icon={faInstagram}/>
    const linkedinIn = <FontAwesomeIcon style={styleIcon} icon={faLinkedin}/>
    const gitHub = <FontAwesomeIcon style={styleIcon} icon={faGithub}/>
    const email = <FontAwesomeIcon style={styleIcon} icon={faEnvelopeSquare}/>


    const iconsItem:iconsItemType[] = [
        {link: 'https://t.me/RomanSetGet94', icon: telegram},
        {link: 'https://www.instagram.com/romanpirs__?utm_source=qr', icon: instagram},
        {link: 'https://www.linkedin.com/in/roman-rybkin-456260267/', icon: linkedinIn},
        {link: 'https://github.com/Roman4egs1994', icon: gitHub},
        {link: 'mailto:romanmoisidi@gmail.com', icon: email}
    ]


    return (
        <>
            <ul style={props.style} className={styled.followSocialNetwork}>
                {
                    iconsItem.map((icon,index) => {
                        return (
                            <li  key={index} style={props.styleLi} className={styled.item}>
                                <span> <a target={"_blank"} href={icon.link}>{icon.icon}</a></span>
                            </li>
                        )
                    })
                }
            </ul>
        </>

    );
};

