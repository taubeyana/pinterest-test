import React, { Component } from 'react';
import './Button.css';
import ProfilePicture from './../profile-picture/ProfilePicture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

// ----- Button creation props-----: 
// 
// --- Important ---:
//   
//      buttonType: button / link / router-link
// 
// --- Optional ---:
// 
//  - Shared props for buttons and links: 
//      src, alt, className, text, faIcon
// 
//  - For anchor links:  href, target
//  - For router links:  to, target
//  - For buttons: type, handleClick

class Button extends Component {
    renderInnerButton(props) {
        return (
            <React.Fragment>
                { props.img && 
                    <ProfilePicture 
                        src = { props.img } 
                        text =  { props.text }/> 
                }
                { props.src && 
                    <img src = { props.src } 
                         alt={ props.alt } 
                         className = "btn-img"/> 
                }
                
                { props.faIcon && 
                    <FontAwesomeIcon 
                        className = { props.faIcon + "-faIcon faIcon" } 
                        icon = { props.faIcon } /> 
                }
                { props.text && 
                    <span> { props.text } </span> 
                }
            </React.Fragment>
        );
    }
    render() {
        switch (this.props.buttonType) {
            case 'link':
                return (
                    <a  href = { this.props.href }
                        target = "_blank"
                        id = { this.props.id }
                        className = { "link-btn " + this.props.className }>
                        { this.renderInnerButton(this.props) }
                    </a> 
                );
            case 'button':
                return (
                    <button 
                        onBlur = { this.props.handleBlur }
                        id = { this.props.id }
                        type = { this.props.type } 
                        className = { "btn " + this.props.className }
                        onSubmit = { this.props.handleSubmit } 
                        onClick = { this.props.handleClick }
                        onFocus = { this.props.handleFocus } >
                        { this.props.children }
                        { this.renderInnerButton(this.props) }
                    </button>
                );
                case 'router-link':
                    return (
                        <NavLink to = { this.props.to }
                            id = { this.props.id }
                            activeClassName = { this.props.activeClassName }
                            onClick = { this.props.handleClick }
                            className = { "link-btn " + this.props.className }>
                            { this.renderInnerButton(this.props) }
                            
                        </NavLink> 
                    );
                default:
                        return this.props.text ? <span className = "btn-text"> { this.props.text } </span> : null
        }
    }
}
export default Button;

