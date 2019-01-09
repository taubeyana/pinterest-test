import React, { Component } from 'react';
import './Footer.css';
import Button from '../../common/button/Button';
import uniqid from 'uniqid';
import { connect } from 'react-redux';
import { fetchUserFromDb } from '../../store/actions/usersActions';
import homeIcon from'../../img/home.png';

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            footerButtons: [
                {
                    text: "Home",
                    className: "footer-btn",
                    img: homeIcon,
                    buttonType: 'router-link',
                    to: "/"
                },
                {
                    text: "Following",
                    faIcon: "user-friends",
                    className: "footer-btn",
                    buttonType: 'router-link',
                    to: "/following"
                },
                {
                    text: "Notifications",
                    className: "footer-btn",
                    faIcon: "bell",
                    buttonType: 'router-link',
                    to: "/notifications"
                },
                {
                    text: "Profile",
                    faIcon: "user",
                    className: "footer-btn",
                    buttonType: 'router-link',
                    to: '/' + this.props.currentUser.username
                },
            ]
        }
    }
    componentDidMount() {
        this.props.fetchUserFromDb('5bc502c18b4af24170a04306')
    }
    render() {
        return (
            <div className = "footer-buttons">
                {
                    this.state.footerButtons.map(item => <Button { ...item } key={ uniqid() }/>)
                }  
            </div>
            
        );
    }
}  
const mapStateToProps = state => {
    return {
        currentUser: state.usersReducer.currentUser
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUserFromDb: (id) => dispatch(fetchUserFromDb(id)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Footer);