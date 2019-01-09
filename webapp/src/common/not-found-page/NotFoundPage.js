import React from 'react';
import Button from '../button/Button';
import { connect } from 'react-redux';
import './NotFoundPage.css';
import ContentWrapper from '../content-wrapper/ContentWrapper';
import magnifyingGlassImg from '../../img/magnifying-glass2.png';
import { getRelevantPins } from '../../store/actions/pinsActions';

const NotFoundPage = (props) => (
    <ContentWrapper className = 'flex-content-wrapper'>
        <div className="wrapper-404">
            <img src={ magnifyingGlassImg }/>
            <h1> { props.search ? '' : '404' } </h1>
            <h2> OOPS! </h2>
            { props.search ? <span> Nothing to show... </span> : <span> The page can't be found </span>}
            <Button 
                handleClick= {props.getRelevantPins()}
                buttonType = 'router-link' 
                to = '/' 
                exact = { true }
                text = 'Go Home...'
                className = 'home-btn'>
            </Button>
        </div>
    </ContentWrapper>
)
const mapDispatchToProps = dispatch => {
    return {
        getRelevantPins: () => dispatch(getRelevantPins)
    }
}
export default connect(null, mapDispatchToProps)(NotFoundPage);
