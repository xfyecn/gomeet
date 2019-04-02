import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_GROUP } from '../actions/group_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser} );
        case RECEIVE_USER:
        case RECEIVE_GROUP:
            return merge({}, state, { [action.user.id]: action.user });
        default: 
            return state;
    }
};