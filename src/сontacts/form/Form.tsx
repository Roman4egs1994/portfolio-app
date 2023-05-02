import React from 'react';
import styled from './Form.module.scss'
import {ButtonLink} from "../../common/componets/button/ButtonLink";
import {useFormik} from "formik";
import {useAppDispatch} from "../../app/castomDispatchAndUseSelector/castomUseAppDispatch";
import {getFormValuesAC, getFormValuesTC} from "../contact-reducer";

type FormikErrorType = {
    textName?: string
    email?: string
    textSubject?: string
    message?: string
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

    const dispatch = useAppDispatch()

    const validate = (values: FormikErrorType) => {


        const errors: FormikErrorType = {}

        //Валидация email
        const regX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        if (!values.email) {
            errors.email = 'Enter your email address'
        } else if (!regX.test(values.email)) {
            errors.email = 'Invalid email address'
        }

        //Валидация textName
        if(!values.textName) {
            errors.textName = "Enter your name between 2 and 30 characters"
        } else if (values.textName.length < 2  || values.textName.length > 30) {
            errors.textName = "Character length must be between 2 and 30 characters"
        }

        //Валидация textSubject
        if(!values.textSubject) {
            errors.textSubject = "Enter the subject of your message between 5 and 60 characters"
        } else if (values.textSubject.length < 5 || values.textSubject.length > 60) {
            errors.textSubject = "Character length must be between 5 and 60 characters"
        }

        //Валидация message
        if(!values.message) {
            errors.message = "Enter your message between 50 and 1000 characters"
        } else if (values.message.length < 50 || values.message.length > 1000) {
            errors.textSubject = "Character length must be between 50 and 1000 characters"
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
            // alert(JSON.stringify(values, null, 2));
            dispatch(getFormValuesTC(values))
            formik.resetForm()
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
                                type="text"
                                id='textName'
                                placeholder="Name"
                                {...formik.getFieldProps('textName')}
                            />
                            {formik.touched.textName && formik.errors.textName && <div className={styled.errorTextName}>{formik.errors.textName}</div>}
                        </div>
                        <div className={styled.formGroupMini}>
                            <input
                                className={styled.formControl}
                                type="email"
                                id="email"
                                placeholder="Email"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email && <div className={styled.errorEmail}>{formik.errors.email}</div>}
                        </div>
                        <div className={styled.formGroupStandard}>
                            <input
                                className={styled.formControlStandard}
                                type="text"
                                id="textSubject"
                                placeholder="Subject"
                                {...formik.getFieldProps('textSubject')}
                            />
                            {formik.touched.textSubject && formik.errors.textSubject && <div className={styled.textSubject}>{formik.errors.textSubject}</div>}
                        </div>
                        <div className={styled.formMessage}>
                            <textarea
                                inputMode='text'
                                id="message"
                                placeholder="Message"
                                {...formik.getFieldProps('message')}
                            />
                            {formik.touched.message && formik.errors.message && <div className={styled.message}>{formik.errors.message}</div>}
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

