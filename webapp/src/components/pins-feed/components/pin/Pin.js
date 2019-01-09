import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Pin.css';
import OptionsMenu from './components/options-menu/OptionsMenu';
import Button from './../../../../common/button/Button';
import { NavLink } from 'react-router-dom';
import { removeSelectedPin, removePin } from '../../../../store/actions/pinsActions'

class Pin extends Component {
    constructor(props) {
        super(props)
        this.state = {...this.props.data}
    }
    shortSiteLink(link) {
        const siteURL = new URL(link)
        return siteURL.host
    }
    truncateString(str = '') {
        return  str.length > 50 ? str.slice(0, 50) + '...' : str;
    }
    handleClick(e) {
        this.props.removeSelectedPin(this.props.data._id)
    }
    render() {
        return (
            <div className = 'pin grid-item' key={ this.props.data._id } >
                <div className = "img-wrapper">
                    <NavLink className = 'navlink' to = { '/pins/' + this.props.data._id }>
                        <img src = { this.props.data.img } alt = { this.props.data.alt } />
                    </NavLink>
                    <Button 
                        text = { this.shortSiteLink(this.props.data.link) } 
                        href = { this.props.data.link } 
                        buttonType = "link" 
                        faIcon = "external-link-alt" 
                        className = "pin-link">
                    </Button>
                </div>
                <div className = "options-wrapper">
                    <span>{ this.truncateString(this.props.data.title) }</span>
                    <OptionsMenu handleClick = { this.handleClick.bind(this) }/>
                </div>
            </div>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {removeSelectedPin: (id) => dispatch(removeSelectedPin(id)),
    removePin: (id) => dispatch(removePin(id))}
}
export default connect(null, mapDispatchToProps)(Pin);