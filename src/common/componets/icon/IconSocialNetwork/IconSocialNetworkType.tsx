import React, {CSSProperties} from 'react';
import styled from './IconSocialNetwork.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faInstagram,
    faLinkedin,
    faTelegram
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons'

// import {ReactComponent as Telegram1} from '../../../../common/assets/icon/telegram.svg'

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


    const iconsItem = [
        {link: '', icon: telegram},
        {link: '', icon: instagram},
        {link: '', icon: linkedinIn},
        {link: '', icon: gitHub},
        {link: '', icon: email}
    ]

    // const styleForIcons = isIconColumn ? "column" : "row"
    return (
        <>

            <ul style={props.style} className={styled.followSocialNetwork}>
                {
                    iconsItem.map((icon) => {
                        return (
                            <li style={props.styleLi} className={styled.item}>
                                <a href={icon.link}>{icon.icon}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className={styled.experiment}>


            </div>
        </>

    );
};

