import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, [action.payload.data.id] : action.payload.data };
    case FETCH_POSTS:
      //console.log(action.payload.data); // [post1, post2]
      // {:id: post}
      return _.mapKeys(action.payload.data, "id");
    case DELETE_POST:
      return _.omit(state, action.payload); // remove from state
    default:
      return state;
  }
}