import React, { Component } from 'react';
import Button from './../button/Button';
import Triangle from './../triangle/Triangle';
import './Menu.css';
import uniqid from 'uniqid';
import onClickOutside from "react-onclickoutside";

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = { isDisplayed: false }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState({ isDisplayed: !this.state.isDisplayed })
    }
    handleClickOutside = () => {
        this.setState({ isDisplayed: false })
    }
    render() {
        return (
            <div className = { this.props.item.name + "-menu menu" }>
                {  this.props.item.menuIcon ?
                    <Button 
                        faIcon = { this.props.item.menuIcon } 
                        className = { this.props.item.name + "-menu-btn menu-btn" } 
                        buttonType = { this.props.item.buttonType } 
                        handleClick = { (e) => this.toggle() }/> : null
                }
                {   this.props.item.menuItems &&  this.state.isDisplayed === true ?
                        <div className = "items-outer-wrapper" >
                        <div className = "items-inner-wrapper">
                    { this.props.item.menuType ?
                        <Triangle direction = { this.props.item.menuType || "up"}></Triangle> 
                        : null 
                    }
                    { this.props.item.menuItems.map( 
                        btn => <Button 
                                text = { btn.text } 
                                faIcon = { btn.faIcon } 
                                buttonType = { btn.buttonType } 
                                className = { btn.className } 
                                key = { uniqid() }
                                id = { btn.id }
                                to = { btn.to }
                                handleClick = {() => btn.handleClick() } />
                        )}
                    { this.props.children }
                        </div>
                        </div> 
                    : null
                }
            </div>
        );
    }
}
export default onClickOutside(Menu);