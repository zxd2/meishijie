import React from 'react';
import { withRouter, useHistory, useLocation, useRouteMatch, useParams, Route, Switch, Redirect } from 'react-router-dom';
import logo from '@/logo.svg';
import './App.scss';
import "./common/reset.css"

import Home from './views/Home'
import Login from './views/Login'
import Menua from './views/Menua'
import Mine from './views/Mine'
import Reg from './views/Reg'
import Type from './views/Type'
import Video from './views/Video'
import Classify from './views/Classify'
import Detail from './views/Detail'
import Msg from '../src/views/Mine/msg';
import Issue from '../src/views/Mine/issue';
import Collection from '../src/views/Mine/collection';
import Our from '../src/views/Mine/our';
import { Layout, Menu, Row, Col, Button, } from 'antd-mobile';
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
    {
      text: '详细',
      path: '/detail',
      name: 'detail',
      component: Detail,
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
        {/* <Route path='/shop' component={Shop} /> */}
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
    </div>
  );
}

export default App;
