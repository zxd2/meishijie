import React from 'react';
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
