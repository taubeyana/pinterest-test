import {
    ADD_PIN,
    PINS_FETCHING_SUCCESS,
    PINS_IS_LOADING,
    REMOVE_PIN,
    PINS_FETCHING_ERROR,
    UPLOAD_IN_PROGRESS

} from '../actions/pinsActions'

const initialState = {
    loading: true,
    pins: [],
    isUploading: false,
    pinsNotFound: false
}

const pinsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIN: 
            return {...state, pins: [...state.pins,action.pin] }
        case PINS_IS_LOADING:
            return {...state, loading: action.status}
        case PINS_FETCHING_SUCCESS: 
            return {...state, pins: action.pins }
        case REMOVE_PIN:
            let pins = [...state.pins]
            return {...state, pins: pins.filter(pin => pin._id !== action.pinId)}
        case PINS_FETCHING_ERROR: 
            return {...state, pinsNotFound: action.error}
        case UPLOAD_IN_PROGRESS:
            return { ...state, isUploading: action.status}
        default:
            return state
    }
}

export default pinsReducer;