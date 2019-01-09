import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {
    return (
        <div className = { props.className ? props.className + ' backdrop' : 'backdrop' }
            onClick = { (e) => props.close(e) }>
        </div>)
}

export default Backdrop;