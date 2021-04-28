import { showAlert } from "./actions"
import { CREATE_POST } from "./types"

const forbidden = ['kek', 'fack', 'unpack']

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter(el => action.payload.title.includes(el))
        if (found.length) {
          return dispatch(showAlert('Dont spam buddy!!'))
        }
      }
      return next(action)
    }
  }
}