import React, { useState } from 'react';

import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

import formStyles from '../styles/FormContainer.module.scss';

const FormContainer = () => {

    const [newMessage, setNewMessage] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();

    };

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setNewMessage(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    
    return (
        <form name={'Contact'} className={formStyles.input} onSubmit={handleFormSubmit}>
            <Input 
                type={'text'}
                title={'Name*'}
                name={'name'}
                value={newMessage.name}
                placeholder={'Please enter your name'}
                handleChange={handleInput}
                className={formStyles.name}
            /> {/* Name field */}
            <Input 
                type={'text'}
                title={'Subject*'}
                name={'subject'}
                value={newMessage.subject}
                placeholder={'Please enter a subject'}
                handleChange={handleInput}
                className={formStyles.subject}
            /> {/* Subject field */}
            <TextArea 
                title={'Message*'}
                name={'message'}
                value={newMessage.message}
                placeholder={'Please enter a message'}
                handleChange={handleInput}
                className={formStyles.message}
            /> {/* Message field */}
            <Button 
                title={'Submit'}
                action={handleFormSubmit}
                type={'primary'}
                className={formStyles.button}
            /> {/* Submit form */}
        </form>
    );
};

export default FormContainer;