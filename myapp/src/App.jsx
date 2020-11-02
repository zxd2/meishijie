import React, { Suspense, lazy } from 'react';
import { withRouter, useHistory, useLocation, useRouteMatch, useParams, Route, Switch, Redirect } from 'react-router-dom';
import logo from '@/logo.svg';
import './App.scss';
import "./common/reset.css"
const Home = lazy(() => import("./views/Home"));
const Mine = lazy(() => import("./views/Mine"));
const Login = lazy(() => import("./views/Login"));
const Menua = lazy(() => import("./views/Menua"));
const Reg = lazy(() => import("./views/Reg"));
const Type = lazy(() => import("./views/Type"));
const Video = lazy(() => import("./views/Video"));
const Classify = lazy(() => import("./views/Classify"));
const Detail = lazy(() => import("./views/Detail"));
const Msg = lazy(() => import("./views/Mine/msg"));
const Issue = lazy(() => import("./views/Mine/issue"));
const Collection = lazy(() => import("./views/Mine/collection"));
const Our = lazy(() => import("./views/Mine/our"));
const Shop = lazy(() => import("./views/Mine/shop"));

import { Layout, Menu, Row, Col, Button, } from 'antd-mobile';


import 'antd-mobile/dist/antd-mobile.css';
// console.log(logo)
function App(props) {
  const history = useHistory();
  console.log("history", history)
  const menu = [
    {
      text: '首页',
      path: '/home',
      name: 'home',
      component: Home,
      //   icon:<HomeOutlined/>
    },
    {
      text: '菜单',
      path: '/menua',
      name: 'menua',
      component: Menua,
    },
    {
      text: '类型',
      path: '/type',
      name: 'type',
      component: Type,
    },
    {
      text: '视频',
      path: '/video',
      name: 'video',
      component: Video,
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
    },
    {
      text: '我的',
      path: '/mine',
      name: 'mine',
      component: Mine,


  return (
    <div className="App">
      {/* <Menu mode="horizontal" onClick={changeMenu} selectedKeys={[current]}>
        {
          menu.map(item => <Menu.Item
            key={item.path}
            title={item.text}
          >{item.text}</Menu.Item>)
        }
      </Menu> */}
      {/* <Menu
        className="foo-menu"
        data={initData}
        value={['1', '3']}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      /> */}
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          {/* {
          menu.map(item => <Route key={item.name} path={item.path} component={item.component} />)
        } */}
          <Route path='/home' component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='/type' component={Type} />
          <Route path='/video' component={Video} />
          <Route path='/reg' component={Reg} />
          <Route path='/login' component={Login} />
          <Route path='/mine' component={Mine} />
          <Route path='/shop' component={Shop} />
          <Route path='/msg' component={Msg} />
          <Route path='/issue' component={Issue} />
          <Route path='/collection' component={Collection} />
          <Route path='/our' component={Our} />
          <Route path='/classify' component={Classify} />
          <Route path='/detail' component={Detail} />
          <Route path="/notfound" render={() => <div>404</div>}></Route>
          {/* 重定向 有3个属性from to  exact*/}
          <Redirect from='/' to='/home' exact />
          {/* 如果匹配不成功就跳到这里 */}
          <Redirect to="/notfound" />
        </Switch>
      </Suspense>
    </div >
  );
}
// App=withRouter(App)
export default App
