import {
    createStore,
	applyMiddleware
} from 'redux';
import promiseMiddleware from 'redux-promise';
import logger from 'redux-logger';

import rootReducer from './reducers';

const base_structure = {
    members: [1,2,3],
    users: [{"username":"Max Mustermann","role":"Admin","picture":"avatar-default.png","id":1},{"username":"Erika Mustermann","role":"Internal","picture":"avatar-default.png","id":2},{"username":"Minta J\u00e1nos","role":"Internal","picture":"avatar-default.png","id":3},{"username":"Minta Kata","role":"External","picture":"avatar-default.png","id":4},{"username":"Jin-Soo Kwon","role":"Internal","picture":"avatar-default.png","id":5},{"username":"Sun-Hwa Kwon","role":"Internal","picture":"avatar-default.png","id":6},{"username":"Desmond Hume","role":"Admin","picture":"avatar-default.png","id":7},{"username":"Duncan Idaho","role":"External","picture":"avatar-default.png","id":8},{"username":"Georgia Lass","role":"External","picture":"avatar-default.png","id":9},{"username":"Betty Rhomer","role":"Internal","picture":"avatar-default.png","id":10}]
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