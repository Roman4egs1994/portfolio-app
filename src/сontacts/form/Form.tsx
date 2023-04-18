import React from 'react';
import styled from './Form.module.scss'
import {ButtonLink} from "../../common/componets/button/ButtonLink";
import axios from "axios";



export const Form =() => {

    const onclickFormSendMessage = () => {
        // alert('Cообщение отправлено')
        axios.post("http://localhost:3010/sendMessage")
            .then((res) => {
                alert('Your message has be sent')
            })
    }

    return (
        <>
            <div className={styled.formBlock}>
                <form className={styled.contactForm} id={"contact-form"}>
                    <h4 className={styled.title}>Message Me</h4>
                    <div className={styled.flex}>
                        <div className={styled.formGroupMini}>
                            <input
                                className={styled.formControl}
                                type="text"
                                placeholder="Name"
                                required={true}
                            />
                        </div>
                        <div className={styled.formGroupMini}>
                            <input
                                className={styled.formControl}
                                type="Email"
                                placeholder="Email"
                                required={true}
                            />
                        </div>
                        <div className={styled.formGroupStandard}>
                            <input
                                className={styled.formControlStandard}
                                type="text"
                                placeholder="Subject"
                                required={true}
                            />
                        </div>
                        <div className={styled.formMessage}>
                            <textarea
                                name="message"
                                placeholder="Message"
                                required={true}
                            />
                        </div>
                        <div className={styled.submit}>
                            <ButtonLink
                                title={'Send Message'}
                                styleSettings={styled.buttonForm}
                                callBack={onclickFormSendMessage}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

