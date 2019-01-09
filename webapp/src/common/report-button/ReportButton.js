import React from 'react';
import './ReportButton.css';
import Button from './../button/Button';

const ReportButton = () => {
    return(
        <Button 
        buttonType = "button" 
        text = "Report" 
        faIcon = "ban" 
        className = "report-btn"
        />
    )
}
export default ReportButton;