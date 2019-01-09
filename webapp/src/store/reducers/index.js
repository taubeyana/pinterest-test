import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import appReducer from './appReducer';
import pinsReducer from './pinsReducer';

const rootReducer = combineReducers({
    pinsReducer,
    appReducer,
    usersReducer
})
export default rootReducer;