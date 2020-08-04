import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/App';
import VideoRegistration from './pages/register/Video';
import CategoryRegistration from './pages/register/Category';

const PageNotFound = () => (<div>404 Not Found</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/video" component={VideoRegistration} />
      <Route path="/register/category" component={CategoryRegistration} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
