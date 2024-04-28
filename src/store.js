// Imports:
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from 'redux-logger'

// Create reducers:

    const currentFeedback = (state = [], action) => {
        if(action.type === 'FEELING') {
            let feeling = action.payload;
            return [...state, feeling];
        } else if (action.type === 'UNDERSTANDING') {
            let understanding = action.payload;
            return [...state, understanding];
        } else if (action.type === 'SUPPORT') {
            let support = action.payload;
            return [...state, support];
        } else if (action.type === 'COMMENTS') {
            let comments = action.payload;
            return [...state, comments]
        } else if (action.type === 'RESET') {
            return []
        }
        return state;
    }

// Create store:
    const reduxStore = createStore(
        combineReducers({
            currentFeedback
        }),
        applyMiddleware(logger)
    );

export default reduxStore;