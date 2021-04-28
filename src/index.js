import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
reportWebVitals();
