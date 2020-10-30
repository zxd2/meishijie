import React from 'react';
import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import logo from '@/logo.svg';
import './App.scss';
import { TabBar } from 'antd-mobile';
import Home from '../src/views/Home';
import myme from '../src/views/Myme/index'
import Login from '../src/views/Login'
import menU from '../src/views/Menu/index'
import Mine from '../src/views/Mime'
import Reg from '../src/views/Reg'
import Type from '../src/views/Type'
import Video from '../src/views/Video'
import Classify from '../src/views/classify/classify'


@withRouter
class App extends React.Component {
  constructor(props) {
    super(props);
   
  }
  state = {
    // selectedTab: 'redTab',
    // hidden: false,
    // fullScreen: false,
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
      text: '视频',
      path: '/video',
      name: 'video',
      component: Video,
    },
    //   {
    //       text: '登录',
    //       path: '/login',
    //       name: 'login',
    //       component: Login
    //   }, {
    //       text: '注册',
    //       path: '/reg',
    //       name: 'reg',
    //       component: Reg
    //   }, 
    {
      text: '我的',
      path: '/mine',
      name: 'mine',
      component: Mine,

    },
    {
      text: '我的菜单',
      path: '/myme',
      name: 'myme',
      component: myme,

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
    console.log('this.props=',this.props)
    console.log(pathname)
    this.setState({
        current:pathname
    })
}
  renderContent(pageText) {

    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
      
    );
  }
  
  render() {console.log('App.props',this.props);
    const { menu, current } = this.state;
    console.log(menu,current)
    return (
      
        <div>
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>

        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {
            menu.map((item) => <TabBar.Item
              title={item.text}
              key={item.name}
              
             
              to={item.path}
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
              }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
              }}
              />
              }
              selected={this.state.selectedTab === 'blueTab'}

              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
              data-seed="logId"
            >
              {this.renderContent('sh')}
            </TabBar.Item>)
          }



        </TabBar>
        
        </div>
      
      <Switch>
                 {
                     menu.map(item => <Route key={item.name} path={item.path} component={item.component} />)
                 }
                <Route path='/home' component={Home} />
                <Route path='/myme/:id' component={myme} />
                <Route path='/menu' component={menU} />
                <Route path='/type' component={Type} />
                <Route path='/video' component={Video} />
                <Route path='/reg' component={Reg} />
                <Route path='/login' component={Login} />
                <Route path='/mine' component={Mine} />
                <Route path='/classify' component={Classify} />
                <Route path="/notfound" render={() => <div>404</div>} />
                    <Redirect from='/' to='/home' exact />

                </Switch>
      </div>
    );
  }
}
//   changeMenu = ({key})=>{
//     this.props.history.push(key);
//     this.setState({
//         current:key
//     })
// }
// goto = (path)=>{
//     this.props.history.push(path);
// }   
// UNSAFE_componentWillMount(){
//     // history,location,match
//     const {pathname} = this.props.location;
//     this.setState({
//         current:pathname
//     })
// }
// render(){console.log('App.props',this.props);
//     const {menu,current} = this.state;
//     return (
//         <div style={{listStyle:'none',position:'relative'}}>

//                 <div style={{listStyle:'none',position:'absolute',bottom:'0'}}>
//                <div  style={{float:'left'}}>
//                     {
//                         menu.map(item => <li
//                             key={item.name}>
//                             <NavLink
//                            style={{float:'left',textDecoration:'none',color:'black'}}
//                            to={item.path}
//                             title={item.text}
//                         >{item.text}</NavLink></li>)
//                     }
//               </div>
//                 </div>

    

//           </div>
//       )
//   }

App=withRouter(App)
export default App
