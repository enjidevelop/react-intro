import React from 'react';

const Button = ({
    type = 'submit',
    text,
    ...props
}) => (
    <button
        type={type}
        {...props}
    >
        {text}
    </button>
);

export default Button;
