import React, { Component, Fragment } from 'react';
import './PinPage.css';
import Button from '../../../../../../common/button/Button';
import axios from 'axios';
import ContentWrapper from '../../../../../../common/content-wrapper/ContentWrapper';
import { shortSiteLink } from '../../../../../../services/utils'
import LoadingImage from '../../../../../../common/loading-gif/LoadingGif';
import FloatingMenu  from '../../../floating-menu/FloatingMenu'
class PinPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pin: {},
            isLoading: true
        }
    }
    componentDidMount() {
        axios.get('/api/pins/' + this.props.match.params.id )
        .then(data => {
            this.setState({ 
                            pin: {...data.data, 
                            linkText: shortSiteLink(data.data.link)}, 
                            isLoading: false
                        })
        })
    }
    render() {
        return (
            <Fragment>
            { this.state.isLoading && <LoadingImage/> }
            {<ContentWrapper className = "pin-page-wrapper">
                <div className = 'pin-content'> 
                    <div className = "img-wrapper">
                        <img src = {this.state.pin.img} alt="" />
                    </div>
                    <div className = 'pin-details'>
                        <h1> { this.state.pin.title } </h1>
                        <p> { this.state.pin.body } </p>
                        <Button 
                            text = { this.state.pin.linkText } 
                            href = { this.state.pin.link } 
                            buttonType = "link" 
                            faIcon = "external-link-alt" 
                            className = "pin-link gray-btn">
                        </Button>
                    </div>
                </div>
                <Button 
                    to = '/'
                    text = "Home"
                    buttonType = "router-link" 
                    faIcon = "angle-left" 
                    className = "home-btn">
                </Button>
                <FloatingMenu />
            </ContentWrapper>}
            </Fragment>
        )
    }
}

// const PinPage = (props) => {
//     console.log(props)
//     return (
//         <div className = 'content-wrapper'> 
//             <h1>pin page</h1>
//             <img src = { props.src } alt = { props.alt }/>
//             <div className = 'pin-details'>
//                 <h1> { props.title } </h1>
//                 <p> { props.body } </p>
//                 <Button 
//                     text = { props.link } 
//                     href = { props.link } 
//                     buttonType = "link" 
//                     faIcon = "external-link-alt" 
//                     className = "pin-link">
//                 </Button>
//             </div>
//         </div>
//     )
// }

export default PinPage