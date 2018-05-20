import ReactDOM from 'react-dom'
import React from 'react'
import {App} from './component/app';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer';

const middleware = [ ReduxPromise ];
const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.querySelector('.container'));