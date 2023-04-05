import React, {RefObject} from 'react';
import styled from './Form.module.scss'
import {ButtonLink} from "../../common/componets/button/ButtonLink";
import {motion} from "framer-motion";


export const Form =() => {
    return (
        <>
            <div className={styled.formBlock}>
                <form className={styled.contactForm}>
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
                            <ButtonLink title={'Send Message'} styleSettings={styled.buttonForm}/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

