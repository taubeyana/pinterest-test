import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import './GridBox.css'
import Pin from './../pin/Pin';
import LoadingImage from '../../../../common/loading-gif/LoadingGif';
import uniqid from 'uniqid';

const masonryOptions = {
    transitionDuration: 0,
    fitWidth: true
};

class GridBox extends Component {
    
    render() {
        let childElements = [];
        childElements = this.props.data.map(pin => {
                    return (
                        <Pin data = { pin } key = { uniqid() }/>
                    )
                });

        return (
            <Masonry
                className = { 'my-gallery-class' } // default ''
                elementType = { 'div' } // default 'div'
                disableImagesLoaded = { false } // default false
                updateOnEachImageLoad = { false } // default false and works only if disableImagesLoaded is false
                options = { masonryOptions }
            >
                { childElements }
            </Masonry>
        );
    }
}

export default GridBox;
