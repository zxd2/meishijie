import React, { Suspense, lazy, useCallback, useEffect, useState, useLayoutEffect} from 'react';
import { withRouter, useHistory,useLocation, useRouteMatch, useParams, Route, Switch, Redirect } from 'react-router-dom';
import logo from '@/logo.svg';

import './App.scss';
import "./common/reset.css"


const Home = lazy(() => import("./views/Home"));
// const User = lazy(() => import("./views/User"));
// const Order = lazy(() => import("./views/Order"));
// const Collect = lazy(() => import("./views/Collect"));
// const Goods = lazy(() => import("./views/Goods"));
const Reg = lazy(() => import("./views/Reg"));
const Login = lazy(() => import("./views/Login"));


function App(props) {

  const menu = [
    {
      text: '首页',
      path: '/home',
      name: 'home',
      component: Home,
      // route:[
      //   {
      //     path:"/home/user",
      //     component:User
      //   },
      //   {
      //     path:"/home/goods",
      //     component:Goods
      //   },
      //   {
      //     path:"/home/order",
      //     component:Order
      //   },
      //   {
      //     path:"/home/collect",
      //     component:Collect
      //   },
      // ]
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
      <div>
            <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/reg' component={Reg} />
              {/* <Route path='/home/user' component={User} />
              <Route path='/home/goods' component={Goods} />
              <Route path='/home/order' component={Order} />
              <Route path='/home/collect' component={Collect} /> */}
              <Route path="/notfound" render={() => <div>404</div>}></Route>
              {/* 重定向 有3个属性from to  exact*/}
              <Redirect from='/' to='/home' exact />
              {/* 如果匹配不成功就跳到这里 */}
              <Redirect to="/notfound" />
            </Switch>
            </Suspense>
      </div>
  )
}
 export default App;
