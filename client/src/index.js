import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { userReducer } from "./store/reducer";
export const store = createStore(userReducer);
ReactDOM.render(
    <App />, document.getElementById('root'));