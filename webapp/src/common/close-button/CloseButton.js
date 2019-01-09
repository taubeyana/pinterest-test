import React from 'react';
import Button from './../button/Button';
import './CloseButton.css'

const CloseButton = (props) => {
    return (
        <Button 
            className = "close-btn"
            type = "button"
            buttonType = "button"
            faIcon = "times"
            handleClick = { props.handleClick }>
        </Button>
    )
}
export default CloseButton;