import React from 'react';
import './SaveButton.css';
import Button from './../button/Button';

const SaveButton = () => {
    return(
        <Button 
        buttonType = "button" 
        text = "Save" 
        className = "save-btn red-btn"/>
    )
}
export default SaveButton;