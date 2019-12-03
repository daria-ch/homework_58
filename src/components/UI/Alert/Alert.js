import React from 'react';
import './Alert.css';

const Alert = props => {
    return (
        <div className={['alert', props.type].join(' ')}
             onClick={props.dismiss}
             style={{
                 transform: props.show ? 'translateY(0)' : 'TranslateY(-100vh',
                 opacity: props.show ? '1' : '0'
             }}
        >
            {props.children}
            <span>X</span>
        </div>
    );
};

export default Alert;