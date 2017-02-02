import React from "react";
import ReactDOM from "react-dom";
import reducer from "./redux/reducer.js";

import { Provider } from 'react-redux'
import { createStore } from 'redux';

import AppRoute from './route'

const rootDom = document.getElementById('app');
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <AppRoute />
    </Provider>, rootDom
);
