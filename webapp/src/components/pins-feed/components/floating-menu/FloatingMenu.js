import React, { Component, Fragment } from 'react';
import './FloatingMenu.css';
import Menu from './../../../../common/menu/Menu';
import uniqid from 'uniqid';
import NewPinModal from '../new-pin-modal/newPinModal'

class FloatingMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {
                    name: "add",
                    menuIcon: "plus",
                    buttonType: 'button',
                    menuItems: [
                        {
                            text: "Upload a Pin",
                            buttonType: 'button',
                            faIcon: "plus",
                            className: 'upload-btn',
                            id: 'userCustom',
                            handleClick: this.handleModal.bind(this),
                        }
                    ],
                    menuType: "right",
                    isVisible: false,
                    
                },
            ],
            modalOpen: false,
        }

        this.handleModal = this.handleModal.bind(this)
    }
    handleModal() {
        this.setState({modalOpen: !this.state.modalOpen})
    }
    render() {
        return (
            <Fragment>
                { this.state.menus
                .map(item => <Menu item = { item } key = { uniqid() } />)}
               {<NewPinModal 
                    modalOpen = { this.state.modalOpen } 
                    modalClose = { this.handleModal }
                    modalTypes = { this.state.menuItems }
                    handleModalType = { this.handleModalType }/>}
            </Fragment>
        );
    }
}

export default FloatingMenu;