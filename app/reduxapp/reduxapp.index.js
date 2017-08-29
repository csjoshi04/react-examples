import ReactDOM from 'react-dom'
import React from 'react'
import {AppComponent} from "./component/app.component";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducer';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <AppComponent />
    </Provider>
    , document.querySelector('.container'));