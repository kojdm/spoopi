import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';

const root =
  <Provider store={createStore(reducers)}>
    <App/>
  </Provider>
const rootElement = document.getElementById("root")

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(root, rootElement)
} else {
  ReactDOM.render(root, rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
