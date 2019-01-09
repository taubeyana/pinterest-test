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
                        },
                        // {
                        //     text: "Save from web",
                        //     buttonType: 'button',
                        //     modalType: 'fromUrl',
                        //     handleClick: this.handleModal.bind(this),
                        //     faIcon: "globe",
                        //     id: 'fromUrl',
                        //     className: 'save-from-web-btn'
                        // }
                    ],
                    menuType: "right",
                    isVisible: false,
                    
                },
            ],
            modalOpen: false,
            modalType: 'userCustom',
        }
        this.handleModal = this.handleModal.bind(this)
        // this.handleModalType = this.handleModalType.bind(this)
    }
    handleModalType(e,type) {
        let modalType;
        e ? modalType = e.target.id || type : modalType = type
        this.setState({modalType: modalType})
    }

    handleModal(e) {
        this.setState({modalOpen: !this.state.modalOpen})
        // let modalType = e.target.id;
        // this.setState({modalType: modalType})
    }
    render() {
        return (
            <Fragment>
                { this.state.menus
                .map(item => <Menu item = { item } key = { uniqid() } />)}
               {<NewPinModal 
                    modalOpen = { this.state.modalOpen } 
                    modalClose = { this.handleModal }
                    modalType = { this.state.modalType }
                    modalTypes = { this.state.menuItems }
                    handleModalType = { this.handleModalType }/>}
            </Fragment>
        );
    }
}

export default FloatingMenu;