import { combineReducers } from 'redux';
import app from './app.reducer';
import test from './test.reducer';

export default combineReducers({
    app: app,
    testStore: test // here we can give any name to a reducer (store)
});
