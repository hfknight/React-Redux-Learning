import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const FETCH_BREED_LIST = 'fetch_breeds';
export const FETCH_DOG_IMAGE = 'fetch_dog_image';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=FHKEY9921';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  }
}

export function fetchDogBreedList() {
  const request = axios.get('https://dog.ceo/api/breeds/list/all');
  return {
    type: FETCH_BREED_LIST,
    payload: request
  };
}

export function fetchDogImage(name) {
  const request = axios.get(`https://dog.ceo/api/breed/${name}/images`);
  // const image = _.sample(request["messages"]);
  return {
    type: FETCH_DOG_IMAGE,
    payload: request //{name, image}
  };
}