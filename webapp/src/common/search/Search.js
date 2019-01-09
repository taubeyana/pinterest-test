import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Input from './../input/Input';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getRelevantPins } from '../../store/actions/pinsActions';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }
    handleChange = (e)  => {
        this.setState({...this.state, searchValue: e.target.value})
    }
    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.props.dispatch(getRelevantPins(this.state.searchValue))
            this.props.history.replace('/?search=' + this.state.searchValue)
            this.setState({...this.state, searchValue: ''})
        }
    }
    render() {
        return (
            <div className = {this.props.className || "search"} >
                <FontAwesomeIcon className = "search-icon" icon = "search" />
                <Input 
                    placeholder = "Search" 
                    value = {this.state.searchValue}
                    onChange = { (e) => this.handleChange(e) }
                    onKeyPress = { (e) => this.handleKeyPress.bind(this)(e)}
                    />
            </div>
        );
    }
}
export default withRouter(connect()(Search));