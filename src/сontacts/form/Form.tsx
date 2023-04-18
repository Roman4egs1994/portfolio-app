import React from 'react';
import styled from './Form.module.scss'
import {ButtonLink} from "../../common/componets/button/ButtonLink";
import {useFormik} from "formik";

type FormikErrorType = {
    email?: string
}

export const Form = () => {

    // const onclickFormSendMessage = () => {
    //
    //     axios.post("http://localhost:3010/sendMessage")
    //         .then((res) => {
    //             alert('Your message has be sent')
    //         })
    //     // dispatch(sendMessageTC())
    // }


    const validate = (values: any) => {
        const errors: FormikErrorType = {}

        const regX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

        if (!values.email) {
            errors.email = ''
        } else if (!regX.test(values.email)) {
            errors.email = 'Invalid email address'
        }
        return errors
        }



    const formik = useFormik({
        initialValues: {
            textName:'',
            email: '',
            textSubject: '',
            message:''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    // console.log(formik.errors)

    return (
        <>
            <div className={styled.formBlock}>
                <form
                    onSubmit={formik.handleSubmit}
                    className={styled.contactForm}
                    id={"contact-form"}
                >
                    <h4 className={styled.title}>Message Me</h4>
                    <div className={styled.flex}>
                        <div className={styled.formGroupMini}>
                            <input
                                className={styled.formControl}
                                name='textName'
                                type="text"
                                id='textName'
                                placeholder="Name"
                                required={true}
                                onChange={formik.handleChange}
                                value={formik.values.textName}
                            />
                        </div>
                        <div className={styled.formGroupMini}>
                            <input
                                className={styled.formControl}
                                name="email"
                                type="email"
                                id="email"
                                placeholder="Email"
                                // required={true}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        </div>
                        <div className={styled.formGroupStandard}>
                            <input
                                className={styled.formControlStandard}
                                name="textSubject"
                                type="text"
                                id="textSubject"
                                placeholder="Subject"
                                required={true}
                                onChange={formik.handleChange}
                                value={formik.values.textSubject}
                            />
                        </div>
                        <div className={styled.formMessage}>
                            <textarea
                                name="message"
                                inputMode='text'
                                id="message"
                                placeholder="Message"
                                required={true}
                                onChange={formik.handleChange}
                                value={formik.values.message}
                            />
                        </div>
                        <div className={styled.submit}>
                            <ButtonLink
                                title={'Send Message'}
                                styleSettings={styled.buttonForm}
                                type={'submit'}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

