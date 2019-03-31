import { RECEIVE_GROUPS, RECEIVE_GROUP, REMOVE_GROUP } from '../actions/group_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUPS:
      return action.groups;
    case RECEIVE_GROUP:
      return merge({}, state, {[action.group.id]: action.group});
    case REMOVE_GROUP:
      const newState = merge({}, state);
      delete newState[action.groupId];
      return newState;
    default: 
      return state;
  }
};