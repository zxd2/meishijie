import React, { Suspense, lazy } from 'react';
import { withRouter, useHistory, useLocation, useRouteMatch, useParams, Route, Switch, Redirect } from 'react-router-dom';
import logo from '@/logo.svg';
import './App.scss';
import "./common/reset.css"


const Home = lazy(() => import("./views/Home"));
const Mine = lazy(() => import("./views/Mine"));
const Login = lazy(() => import("./views/Login"));

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
      <Suspense fallback={<div>loading...</div>}></Suspense>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/reg' component={Reg} />
      </Switch>
      <Suspense />
    </div>
  );
}

export default App;
