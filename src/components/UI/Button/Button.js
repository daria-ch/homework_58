import React from 'react';
import './Button.css';

const Button = props => (
    <button
        onClick={props.onClick}
        className={['btn', props.type].join(' ')}
    >
        {props.children}
    </button>
);


export default Button;