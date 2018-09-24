import _ from 'lodash';
import { FETCH_BREED_LIST } from '../actions';

export default function(state = {}, action) {
  console.log(action.type);
  switch (action.type) {
    case FETCH_BREED_LIST:
      return _.keys(action.payload.data['message']);  
    default:
      return [ "none", "something", "wrong" ];
  }
}