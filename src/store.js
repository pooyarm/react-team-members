import {
    createStore,
	applyMiddleware
} from 'redux';
import promiseMiddleware from 'redux-promise';
import logger from 'redux-logger';

import rootReducer from './reducers';

import userData from './data.json';
import { loadState, saveState } from './utils/localstorage';

const defaultState = {
    members: []
};

let presistedData = loadState() || defaultState;
presistedData.users = userData;

const enhancer = applyMiddleware(
    logger,
    promiseMiddleware
);

const store = createStore(
	rootReducer,
	presistedData,
    enhancer
);

store.subscribe(() => {
    saveState({
        members: store.getState().members
    });
});

export default store;