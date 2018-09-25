import _ from 'lodash';
import { FETCH_BREED_LIST, FETCH_DOG_IMAGE } from '../actions';

export default function(state = [], action) {
  console.log(action.type);
  switch (action.type) {
    case FETCH_BREED_LIST:
      return _.keys(action.payload.data['message']);
    case FETCH_DOG_IMAGE:
      console.log(action.payload);
      return action.payload.data;
    default:
      return state;
  }
}