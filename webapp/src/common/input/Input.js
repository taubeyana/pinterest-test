import React from 'react';
import './input.css';

const Input = props => {
    let inputEl = null; 
    switch (props.inputType) {
        case 'input':
            inputEl = <input {...props}/>
            break
        case 'textarea':
            inputEl = <textarea {...props}/>
            break;
        default:
            inputEl = <input {...props}/> 
    } 
    return inputEl;      
}

export default Input;
