import ReactDOM from 'react-dom'
import React  from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import PostsIndex from "./component/posts_index.component";
import PostsNew from './component/posts_new'
import rootReducer from './reducer';
import {Switch, HashRouter, Route} from 'react-router-dom'
import promise from 'redux-promise';

const store = createStore(rootReducer,applyMiddleware(promise));

ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <div>
            <Switch>
                <Route path='/posts/new' component={PostsNew} />
                <Route path='/' component={PostsIndex} />
            </Switch>
        </div>
    </HashRouter>
</Provider>,document.getElementById('reactApp'))