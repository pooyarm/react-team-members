import {
    createStore,
	applyMiddleware
} from 'redux';
import promiseMiddleware from 'redux-promise';
import logger from 'redux-logger';

import rootReducer from './reducers';

import userData from './data.json';

const base_structure = {
    members: [1,2,3],
    users: userData
};

const enhancer = applyMiddleware(
    logger,
    promiseMiddleware
);

const store = createStore(
	rootReducer,
	base_structure,
    enhancer
);

export default store;