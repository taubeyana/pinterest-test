import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

const configureStore = (preloadedState) => {
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        )
    )
}
export default configureStore;