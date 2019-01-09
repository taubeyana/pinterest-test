import React, { Component } from 'react';
import './PinsFeed.css';
import GridBox from './components/grid-box/GridBox';
import { getRelevantPins } from '../../store/actions/pinsActions';
import qs from 'query-string'
import { connect } from 'react-redux';
import LoadingImage from '../../common/loading-gif/LoadingGif';
import NotFoundPage from '../../common/not-found-page/NotFoundPage';


import ContentWrapper from '../../common/content-wrapper/ContentWrapper'

class PinsFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: true,
            searchString: ''
        };
    }

    componentWillMount() {
        let query = qs.parse(this.props.location.search)
        this.setState({...this.state, searchString: query.search})
    }
    componentDidMount() {
            this.props.getRelevantPins(this.state.searchString)
    }

    render() {
        return (
            <ContentWrapper>
                <div className = "grid-box-wrapper">
                { this.props.loading && <LoadingImage/> }
                    <GridBox 
                        isLoading = { this.props.loading } 
                        data = { this.props.pins }/>
                </div>
                { this.props.pinsNotFound === true && <NotFoundPage search/>}
            </ContentWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        pins: state.pinsReducer.pins,
        loading: state.pinsReducer.loading,
        pinsNotFound: state.pinsReducer.pinsNotFound
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getRelevantPins: (query) => dispatch(getRelevantPins(query)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PinsFeed);