import { createAction } from 'redux-actions';

import {
    ACTION_ADD_MEMBER,
    ACTION_REMOVE_MEMBER
} from './constants.js';

/*
export const fetchTasks = createAction(ACTION_FETCH_VENUES, () => {
    return fetch(API_VENUES_URL).then(function(response) {
        return response.json()
    });
});
*/

export const addMember = createAction(ACTION_ADD_MEMBER);
export const removeMember = createAction(ACTION_REMOVE_MEMBER);