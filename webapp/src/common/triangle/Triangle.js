import React, { Component } from 'react';
import './Triangle.css';

class Triangle extends Component {
    render() {
        return (
            <div className = { "triangle-border-" + this.props.direction }>
                <div className = { "triangle-" + this.props.direction }></div>
            </div>
        );
    }

}
export default Triangle;