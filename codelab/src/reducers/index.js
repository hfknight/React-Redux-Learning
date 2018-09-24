import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import DogReducer from './reducer_dog';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  breeds: DogReducer
});

export default rootReducer;
