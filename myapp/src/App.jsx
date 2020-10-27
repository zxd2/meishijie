import React from 'react';
import { withRouter, useHistory, useLocation, useRouteMatch, useParams, Route, Switch, Redirect } from 'react-router-dom';
import logo from '@/logo.svg';
import './App.scss';
import "./common/reset.css"

import Home from '../src/views/Home'
import Login from '../src/views/Login'
import Menua from '../src/views/Menua'
import Mine from '../src/views/Mine'
import Reg from '../src/views/Reg'
import Type from '../src/views/Type'
import Video from '../src/views/Video'
import Classify from './views/Classify'
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

    },
    {
      text: '分类',
      path: '/classify',
      name: 'classify',
      component: Classify,
    },
  ];
  //实现高亮
  let current = '/home'
  // const changeMenu = ({ key }) => {
  //   history.push(key);
  //   current = key
  // }
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
        <Route path="/notfound" render={() => <div>404</div>}></Route>
        {/* 重定向 有3个属性from to  exact*/}
        <Redirect from='/' to='/home' exact />
        {/* 如果匹配不成功就跳到这里 */}
        <Redirect to="/notfound" />
      </Switch>
    </div>
  );
}

export default App;
