import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const bindMiddleware = middleware => {
    if (process.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const makeStore = (initialState) => {
    return createStore(rootReducer, initialState, bindMiddleware([thunkMiddleware]));
};

export default makeStore;