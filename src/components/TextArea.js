import React from 'react';

import formStyles from '../styles/FormContainer.module.scss';

const TextArea = (props) => {
    return (
        <div>
            <label
                htmlFor={props.name}
                className={formStyles.label}
            >
                {props.title}
            </label>
            <textarea 
                className={props.className}
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}

            />
        </div>
    );
};

export default TextArea;