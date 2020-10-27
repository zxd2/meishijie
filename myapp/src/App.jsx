import React from 'react';
<<<<<<< HEAD
import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import logo from '@/logo.svg';
import './App.scss';
import Home from '../src/views/Home'
import Login from '../src/views/Login'
import menU from '../src/views/Menu'
import Mine from '../src/views/Mime'
import Reg from '../src/views/Reg'
import Type from '../src/views/Type'
import Video from '../src/views/Video'
import { Layout,Menu,Row,Col,Button, } from 'antd';
import Classify from '../src/views/classify'
console.log(logo)
@withRouter
class App extends React.Component{
  state = {
      menu: [{
          text: '首页',
          path: '/home',
          name: 'home',
          component: Home,
        //   icon:<HomeOutlined/>
      }, 
      {
        text: '菜单',
        path: '/menu',
        name: 'menu',
        component: menU,
      },
      {
        text: '菜单',
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
     
      ],
  
      current: '/home'
  }
  changeMenu = ({key})=>{
    this.props.history.push(key);
    this.setState({
        current:key
    })
=======
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
>>>>>>> 3121ea4e2d298cb8efd348b0aeb73b19db78ca92
}
goto = (path)=>{
    this.props.history.push(path);
}   
UNSAFE_componentWillMount(){
    // history,location,match
    const {pathname} = this.props.location;
    this.setState({
        current:pathname
    })
}
render(){console.log('App.props',this.props);
    const {menu,current} = this.state;
    return (
        <div>
            <Row style={{backgroundColor:'#001529',lineHeight:'46px'}}>
                <Col span={18}>
                <Menu mode="horizontal"  onClick={this.changeMenu} selectedKeys={[current]}>
                    {
                        menu.map(item => <Menu.Item 
                            key={item.path}
                            icon={item.icon}
                            title={item.text}
                        >{item.text}</Menu.Item>)
                    }
                </Menu>
                </Col>
             </Row>
             <Switch>
                 {
                     menu.map(item => <Route key={item.name} path={item.path} component={item.component} />)
                 }
                <Route path='home' component={Home} />
                <Route path='menu' component={menU} />
                <Route path='type' component={Type} />
                <Route path='video' component={Video} />
                <Route path='reg' component={Reg} />
                <Route path='login' component={Login} />
                <Route path='mine' component={Mine} />

                 </Switch>
          </div>
      )
  }
}
// App=withRouter(App)
export default App
