import React from 'react';
import './SendButton.css';
import Button from './../button/Button';

const SendButton = () => {
    return (
            <Button 
            buttonType = "button" 
            text = "Send" 
            faIcon = "share-square" 
            className = "send-btn gray-btn"/>
        )
}
export default SendButton;