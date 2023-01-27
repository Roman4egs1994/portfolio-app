import React from 'react';
import styled from './Form.module.css'


export const Form = () => {
    return (
        <div className={styled.form}>
            <form className={styled.formDescription}>
                <h3 className={styled.title}>Feedback</h3>
                <span>Surname</span>
                <input/>
                <span>Name</span>
                <input/>
                <span>Description</span>
                <textarea/>
                <button className={styled.sendBtn}>Send</button>
            </form>
        </div>
    );
};

