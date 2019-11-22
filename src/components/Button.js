import React from 'react';

import formStyles from '../styles/FormContainer.module.scss';

const Button = (props) => {
    return (
        <button
            className={formStyles.button}
            onClick={props.action}
        >
            {props.title}
        </button>
    );
};

export default Button;