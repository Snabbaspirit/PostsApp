import { CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER } from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}


export function fetchPosts() {
  return async dispatch => {
    try {
      dispatch({type: SHOW_LOADER})
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=70');
      const json = await response.json();
      dispatch({ type: FETCH_POSTS, payload: json })
    } catch(e) {

    } finally {
      dispatch({type: HIDE_LOADER})
    }
  }
}