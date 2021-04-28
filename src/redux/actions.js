import { CREATE_POST, REQUEST_POSTS, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3500)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  }
}


export function fetchPosts() {
  return {
    type: REQUEST_POSTS
  }
  // return async dispatch => {
  //   try {
  //     dispatch(showLoader())
  //     const response = await fetch('htmstps://jsonplaceholder.typicode.com/posts?_limit=70');
  //     const json = await response.json();
  //     dispatch({ type: FETCH_POSTS, payload: json })
  //   } catch(e) {
  //     dispatch(showAlert('Error in request, try later'))
  //   } finally {
  //     dispatch(hideLoader())
  //   }
  // }
}