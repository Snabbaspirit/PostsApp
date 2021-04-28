import {put, call, takeEvery} from 'redux-saga/effects'
import { hideLoader, showLoader, showAlert } from './actions'
import { FETCH_POSTS, REQUEST_POSTS } from './types'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(showLoader())
    const payload = yield call(fetchPosts)
    yield put({ type: FETCH_POSTS, payload })
    yield put(hideLoader())
  } catch (e) {
    yield put(showAlert('Error in request, try later'))
    yield put(hideLoader())
  }
}

async function fetchPosts() {
  const response = await fetch('https://jsotnplaceholder.typicode.com/posts?_limit=70');
  return await response.json();
}