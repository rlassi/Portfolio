import React from 'react';

import FormContainer from './FormContainer';

import contactStyles from '../styles/Contact.module.scss';

const Contact = () => {
    return (
        <div className={contactStyles.contact} id="contact">
            <div className={contactStyles.container}>
                <h1>Let's Chat!</h1>
                <FormContainer />           
            </div>
        </div>
    );
};

export default Contact;