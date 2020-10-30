import React from 'react';
import { withRouter, useHistory, useLocation, useRouteMatch, useParams, Route, Switch, Redirect } from 'react-router-dom';
import logo from '@/logo.svg';
import './App.scss';
import "./common/reset.css"


import Login from './views/Login'
import Reg from './views/Reg'
import Home from './views/Home'

function App(props) {
  const menu = [
    {
      text: '首页',
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      text: '登录',
      path: '/login',
      name: 'login',
      component: Login
    }, {
      text: '注册',
      path: '/reg',
      name: 'reg',
      component: Reg
    }
  ]
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/reg' component={Reg} />
      </Switch>
    </div>
  );
}

export default App;
