import React from 'react';

const TextArea = (props) => {
    return (
        <div>
            <label
                htmlFor={props.name}
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