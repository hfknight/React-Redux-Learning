import _ from 'lodash';
import { FETCH_DOG_IMAGE } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_DOG_IMAGE:
      const image = _.sample(action.payload.data["message"]);
      return image; //image;
    default:
      return state;
  }
}