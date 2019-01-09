import React from 'react';
import './SelectMenu.css';
import SaveButton from './../save-button/SaveButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SelectMenu = () => {
    return(
        <div className = "select-menu-header"> 
            <div className = "select-wrapper">
                <span>Select</span>
                <FontAwesomeIcon icon = "angle-down"/>
            </div>
            <SaveButton/>
        </div>
    )
}
export default SelectMenu;