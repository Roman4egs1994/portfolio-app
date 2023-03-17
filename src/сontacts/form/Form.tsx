import React from 'react';
import styled from './Form.module.scss'
import {ButtonLink} from "../../common/componets/button/ButtonLink";


export const Form = () => {
    return (
        <>
            <div className={styled.formBlock}>
                <form className={styled.contactForm}>
                    <h4 className={styled.title}>Message Me</h4>
                    <div className={styled.flex}>
                        <div className={styled.formGroupMini}>
                            <input
                                className={styled.formControl}
                                type="email"
                                placeholder="Name"
                            />
                        </div>
                        <div className={styled.formGroupMini}>
                            <input
                                className={styled.formControl}
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className={styled.formGroupStandard}>
                            <input
                                className={styled.formControlStandard}
                                type="email"
                                placeholder="Subject"
                            />
                        </div>
                        <div className={styled.formMessage}>
                            <textarea
                                name="message"
                                placeholder="Message"
                            />
                        </div>
                        <div className={styled.submit}>
                            <ButtonLink title={'Send Message'} styleSettings={styled.buttonForm}/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

