import React from 'react';
import './LoadingGif.css'
import gif from '../../img/loading.gif';

const LoadingGif = () => {
    return (
        <img className = "loading-gif" src = { gif } alt="loading-gif"/>
    )
}
export default LoadingGif;