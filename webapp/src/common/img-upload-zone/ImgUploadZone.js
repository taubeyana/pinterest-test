import Dropzone from 'react-dropzone';
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import LoadingGif from '../loading-gif/LoadingGif'
import './ImgUploadZone.css';

class ImgUploadZone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: null
        }
    }
    render() {
        return (
            <Dropzone 
                style = {this.props.style}
                required
                className = { "dropzone " + this.props.className }
                multiple={false}
                accept="image/*"
                onDrop={(files) => this.props.onDrop(files)}
                >
                { this.props.isUploading ? <LoadingGif/>  :null}
                { this.props.style.isvisible ?  null :
                <div className = "dz-content">
                    <FontAwesomeIcon icon="camera"/>
                    <span> Drag and drop or click to upload </span>
                </div>  }
            </Dropzone>
        )
    }
}
const mapStateToProps = state => {
    return {
        isUploading: state.pinsReducer.isUploading
    }
}
export default connect(mapStateToProps)(ImgUploadZone);
        // {this.props.isUploading ?  <p>test</p> :