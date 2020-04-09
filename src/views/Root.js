import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Main from './Main';
import Favorites from './Favorites';
import MainTemplate from '../templates/MainTemplate';
import Settings from './Settings';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
