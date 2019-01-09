export const ADD_PIN = 'ADD_PIN';
export const PINS_IS_LOADING = 'PINS_IS_LOADING';
export const PINS_FETCHING_SUCCESS = 'PINS_FETCHING_SUCCESS';
export const PINS_FETCHING_ERROR = 'PINS_FETCHING_ERROR';
export const REMOVE_PIN = 'REMOVE_PIN';
export const REMOVE_PIN_SUCCES = 'REMOVE_PIN_SUCCES';
export const REMOVE_PIN_ERROR = 'REMOVE_PIN_ERROR';
export const RESET_PINS = 'SEARCH_PIN';
export const UPLOAD_IN_PROGRESS = 'UPLOAD_IN_PROGRESS'



export const pinsIsLoading = (status) => {
    return {
        type: PINS_IS_LOADING,
        status
    }
}
export const pinsFetchingSuccess = (pins) => {
    return {
        type: PINS_FETCHING_SUCCESS,
        pins,
    }
}
export const pinsFetchingError = (error) => {
    return {
        type: PINS_FETCHING_ERROR,
        error
    }
}

export const getRelevantPins = (query) => {
    return (dispatch, getState) => {
        dispatch(pinsIsLoading(true))
        dispatch(pinsFetchingError(false))
        let url;
        if (query) {
            url = '/api/pins/?search='+ query
        }
        else {
            url = '/api/pins';
        }
        fetch(url)
            .then(res => res.json())
            .then(pins => {
                if (pins.length === 0 && query !== "") {
                    dispatch(pinsFetchingError(true))
                } 

                    dispatch(pinsFetchingSuccess(pins))
                    dispatch(pinsIsLoading(false))
                    
                
            })
            .catch(e => console.log(e))
    }
}

export const removePin = (pinId) => {
    return {
        type: REMOVE_PIN,
        pinId
    }
}
const removePinSucces = (status) => {
    return {
        type: REMOVE_PIN_SUCCES,
        status
    }
}
const removePinError = (status) => {
    return {
        type: REMOVE_PIN_ERROR,
        status
    }
}

export const removeSelectedPin = (id) => {
    return dispatch => {
        dispatch(removePin(id))
        fetch('/api/pins/' + id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err.message))
    }
}

export const uploadInProgress = (status) => {
    return {
        type: UPLOAD_IN_PROGRESS,
        status
    }
}



export const addPin = (pin) =>{
    return {
        type : ADD_PIN,
        pin
    }
}
export const addUploadedPin = (pin) => {

}
