import _ from 'lodash';
import { FETCH_BREED_LIST, FETCH_DOG_IMAGE } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BREED_LIST:
      return _.keys(action.payload.data['message']);
    // case FETCH_DOG_IMAGE:
    //   const image = _.sample(action.payload.data["message"]);
    //   return { ...state, [selectedDog] : image }; //image;
    default:
      return state;
  }
}