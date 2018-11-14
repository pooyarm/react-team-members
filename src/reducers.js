import {
    ACTION_ADD_MEMBER,
    ACTION_REMOVE_MEMBER
} from './constants';

const main_reducer = (db, action) => {
    switch(action.type) {
        case ACTION_ADD_MEMBER:
            return {
                members: [...db.members, parseInt(action.payload)],
                users: db.users
            };
        break;
        case ACTION_REMOVE_MEMBER:
            return {
                members: db.members.filter((userId) => userId !== action.payload),
                users: db.users
            }
        break;
        default:
            return db;
        break;
    }

	return db;
};

export default main_reducer;