// Imports:
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from 'redux-logger'

// Create reducers:


// Create store:
    const reduxStore = createStore(
        combineReducers({

        }),
        applyMiddleware(logger)
    );

export default reduxStore;