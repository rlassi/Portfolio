import React from 'react';

import formStyles from '../styles/FormContainer.module.scss';

const Input = (props) => {
    return (
        <div>
            <label 
                htmlFor={props.name}
                className={formStyles.label}
            >
                {props.title}
            </label>
            <input 
                className={props.className}
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default Input