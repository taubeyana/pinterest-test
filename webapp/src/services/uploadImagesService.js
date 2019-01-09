
import axios from 'axios';
import { store } from '../App';
import { uploadInProgress } from '../store/actions/pinsActions'


class uploadImagesService {
    static uploadImage(file) {
        const CLOUDINARY_UPLOAD_PRESET = 'taubeyana';
        const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dat4frntv/upload';
        const config = {
            onUploadProgress: progressEvent => {
                console.log(store.getState())
                store.dispatch(uploadInProgress(progressEvent.loaded === progressEvent.total))
                console.log(progressEvent.loaded === progressEvent.total)
              }
        }
        let fd = new FormData();
        fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        fd.append('file', file)

        return axios.post(CLOUDINARY_UPLOAD_URL,fd, config)
        .then(res => {
            store.dispatch(uploadInProgress(false))
            return res})
        .catch(err => console.log(err))
    }
}
export default uploadImagesService;