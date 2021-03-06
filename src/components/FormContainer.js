import React, { useState } from 'react';

import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

import formStyles from '../styles/FormContainer.module.scss';

const FormContainer = () => {

    const [newMessage, setNewMessage] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleFormSubmit = (e) => {
        

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
        <form name="contact" method="post" className={formStyles.input} onSubmit={handleFormSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <Input 
                type={'text'}
                title={'Name'}
                name={'name'}
                value={newMessage.name}
                placeholder={'Please enter your name'}
                handleChange={handleInput}
                className={formStyles.name}
            /> {/* Name field */}
            <Input
                type={'email'}
                title={'E-mail'}
                name={'email'}
                value={newMessage.email}
                placeholder={'Please enter your e-mail'}
                handleChange={handleInput}
                className={formStyles.name}
            /> {/* E-mail field */}
            <Input 
                type={'text'}
                title={'Subject'}
                name={'subject'}
                value={newMessage.subject}
                placeholder={'Please enter a subject'}
                handleChange={handleInput}
                className={formStyles.subject}
            /> {/* Subject field */}
            <TextArea 
                title={'Message'}
                name={'message'}
                value={newMessage.message}
                placeholder={'Please enter a message'}
                handleChange={handleInput}
                className={formStyles.message}
            /> {/* Message field */}
            <Button 
                title={'Submit'}
                action={handleFormSubmit}
                type={'Submit'}
                className={formStyles.button}
            /> {/* Submit form */}
        </form>
    );
};

export default FormContainer;