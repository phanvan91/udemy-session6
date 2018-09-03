import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reducers from './reducers';
import PostsIndex from './components/post_index'
import ReduxPromise from 'redux-promise'
import PostNew from "./components/post_new";
import PostShow from "./components/post_show";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);




ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <Switch>
              <Route path={'/posts/new'} component={PostNew}/>
              <Route path={'/posts/:id'} component={PostShow}/>
              <Route path={'/'} component={PostsIndex}/>
          </Switch>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
