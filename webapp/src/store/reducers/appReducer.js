import { DISPLAY_HEADER } from '../actions/appActions'

const initialState = {
    headerIsDisplayed: null
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_HEADER:
            return (
                {...state, headerIsDisplayed: action.payload}
            )
        default:
            return state
    }
}
export default appReducer;