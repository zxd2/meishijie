/**
 * 高阶组件
 * 高阶组件是一个函数
 * 高阶组件的参数为React组件
 * 高阶组件返回一个新的组件
 */


import React from 'react';
const {render} = require('react-dom');
import {Redirect}  from 'react-router-dom';

 
 export function withUser(MyComponent){
    //  return class OuterComponent extends Component{
        // constructor(props){
        //     super(props);
        //     this.state = {
        //         userInfo:{}
        //     }
        // }
        // ComponentDidMount() {
        //     let userInfo = localStorage.getItem('userInfo');
        //     try {
        //         userInfo = JSON.parse(userInfo);
        //     } catch (err) {
        //         userInfo = {};
        //     }

        //     this.setState({
        //         userInfo
        // }
        //    render() {
        //       <MyComponent {...this.props} userInfo={this.state.userInfo} />
        //    }
    //  }

    return function OuterComponent(props) {
        console.log('OuterComponent.props',props)
        //获取本地存储的信息
        let currentUser = localStorage.getItem('currentUser');
        try {
            currentUser = JSON.parse(currentUser);
        } catch (err) {
            currentUser = {};
        }

        return <MyComponent {...props} currentUser={currentUser} />//{...props}把OuterComponent的属性值都传出去
    }

 }

 //用户访问权限高阶组件 
 //需要用户登录后才可访问组件否则跳转登录页
 //作用：拦截生命周期、state、渲染过程等
 export function withAuth(InnerComponent) {
     @withUser//ES7装饰器这种写法只适用于类组件 等效于把整个类组件传进来
      class OuterComponent extends React.Component{
         ComponentDidMount(){
            //  //获取本地存储的信息
            // let userInfo = localStorage.getItem('userInfo');
            // try {
            //     userInfo = JSON.parse(userInfo);
            // } catch (err) {
            //     userInfo = {};
            // }    
         } 
         render() {console.log('withAuth.props',this.props)
         const {currentUser,location:{pathname}} = this.props;
             if(currentUser) {
                 //如果有用户信息，说明用户已经登录
                  //返回用户登录后显示的内容
                return <InnerComponent {...this.props}/>
             } else {//如果没有用户信息，说明用户没有登录，跳转到登陆页
                return <Redirect to={'/login?targetUrl='+pathname} />
             }    
         }
     }
    //  return withUser(OuterComponent);
     return OuterComponent;

 }

//反向继承：这种写法只适用于类组件
//  export function withAuth(InnerComponent) {
//      class OuterComponent extends InnerComponent {
//         ComponentDidMount(){
//             console.log()('OuterComponent.ComponentDidMount')
//             super.ComponentDidMount();
//         }
//          render() {
//             console.log('userInfo',this.props.userInfo)
//             if(this.props.userInfo) {
//                 //如果有用户信息，说明用户已经登录
//                 return super.render()//继承InnerComponent
//             } else {//如果没有用户信息，说明用户没有登录，跳转到登陆页
//                 return <Redirect to='/login'/>
//             }    
//          }
//      }
//      return withUser(OuterComponent);
//  }

