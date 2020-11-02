import React from 'react';
import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import logo from '@/logo.svg';
import './App.scss';
import Home from '../src/views/Home'
import Login from '../src/views/Login'
import menU from '../src/views/Menu/Menu'
import page from '../src/views/page/page'
import Mine from '../src/views/Mime'
import Reg from '../src/views/Reg'
import Type from '../src/views/Type'
import Video from '../src/views/Video'
import { Layout,Menu,Row,Col,Button, } from 'antd';
import { TabBar } from 'antd-mobile';
import Classify from '../src/views/classify'
console.log(logo)
@withRouter
class App extends React.Component{
    constructor(props) {
        super(props);
        
      }
  state = {
    selectedTab: 'redTab',
    hidden: false,
    fullScreen: false,
      menu: [{
          text: '首页',
          path: '/home',
          name: 'home',
          component: Home,
        //   icon:<HomeOutlined/>
      },
       {
        text: '详情',
        path: '/page',
        name: 'page',
        component: page,
      },
      {
        text: '菜单',
        path: '/menu',
        name: 'menu',
        component: menU,
      },
      
      {
        text: '视频',
        path: '/video',
        name: 'video',
        component: Video,
      },
       {
        text: '分类',
        path: '/classify',
        name: 'classify',
        component: Classify,
       
    }, 
      {
          text: '我的',
          path: '/mine',
          name: 'mine',
          component: Mine,
         
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
        
       <div style={{position:'flex' ,top:"0",width:'100%'}}>
        
                   {
                       menu.map(item => <NavLink style={{display:'inline-block'
                       ,width:'72px',fontSize:'18px',
                       textAlign:'center',height:'30px',lineHeight:'30px',background:'white',color:'black'}}
                           key={item.path}
                           icon={item.icon}
                           title={item.text}
                           to={item.path} onClick={()=>{
                               this.props.history.push(item.path)
                           }}
                       >{item.text}</NavLink>)
                   }
         
         <Switch>
                {
                    menu.map(item => <Route key={item.name} path={item.path} component={item.component} />)
                }
               <Route path='home' component={Home} />
               <Route path='menu' component={menU} />
               <Route path='type' component={Type} />
               <Route path='video' component={Video} />
               
               <Route path='mine' component={Mine} />
                <Route path='classify' component={ Classify} />
                </Switch>
            
          
          </div>
      )
  }
}
// App=withRouter(App)
export default App
