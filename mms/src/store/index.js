import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
//引入reducer模块
import reducer from './reducers';

// 1.引入saga
import createSagaMiddleware from 'redux-saga';

import rootSaga from './middleware/saga.js';

// 2.创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 3.将 sagaMiddleware 连接至 Store  还要先从redux引入applyMiddleware，再连接创建好的中间件
let enhancer = applyMiddleware(sagaMiddleware)

// 1、创建仓库store 存放共享的数据,它也可以设置默认值参数
// const store = createStore(reducer) 
// 中间件是放在第3个参数里面的
//createStore(reducer,initState,middleware) 本来只能放一个中间件，但是如果想同时用两个中间件就把一个中间件作为另一个中间件的参数来应用
const store = createStore(reducer, enhancer);

// 4.引入并运行自定义Saga配置(自己编写)
sagaMiddleware.run(rootSaga); //记住是用创建好的中间件来调用run方法运行saga配置

export default store
//redux的代码都写在这里面了
//数据持久化：用本地存储的方式刷新时先读取webstorage的数据
// let currentUser = localStorage.getItem('currentUser');
// let isLogin = false
// try {
//     //JSON.parse()本身的数据是null也照样转化的，所以还要设置个空对象才行
//     currentUser = JSON.parse(currentUser) || {}
// } catch (err) {
//     currentUser = {}
// }

// if (currentUser.Authorization) {
//     isLogin = true
// }
// // 3操作redux 
// /* *获取state store.getState()
//     *修改state store.dispatch(action) */

// // 2定义reducer
// //*初始化数据initState ，只能在一开始赋值，后面的state都是最新的状态，就是return的值
// const initState = {
//     //初始值currentUser在上面定义好了
//     currentUser, //一开始的值是没有的，登录后就要把数据放进来，所以就要涉及到修改state啦！！
//     isLogin
// }
// //ruder功能:获取用户信息和是否登录
// const reducer = function (state = initState, action) {
//     //数据怎么修改是在这里面定义 reducer 传入state和action且必须返回一个新的state
//     // *action是调用dispatch方法时传进来的方式
//     //action:{type:"login",user},所以可以通过action.type来调用
//     switch (action.type) {
//         //  假设传过来的是'login'
//         case 'login':
//             //在这个位置做数据持久化：就是把数据存入webStorage
//             localStorage.setItem("currentUser", JSON.stringify(action.user))
//             return {
//                 isLogin: true,
//                 currentUser: action.user //也是通过action传过来的user
//             }
//         case "logout":
//             //退出时也要清空本地存储
//             localStorage.removeItem("currentUser")
//             //退出直接可以等于初始状态,不能直接写initState，因为isLogin一开始是true的状态
//             return {
//                 currentUser: {},
//                 isLogin: false
//             };
//         //{type:"update_user",user:{phone:1231313132}}
//         case 'update_user':
//             const newState = {
//                 ...state, //把原来的数据都复制下来
//                 currentUser: {
//                     ...state.currentUser, // 因为不是改全部
//                     ...action.user  //这样就只把user覆盖了
//                 }
//             }
//             localStorage.setItem("currentUser", JSON.stringify(newState.currentUser))
//             return newState
//         default:
//             return state  //意思是没有修改的话就返回当前的state
//     }


// }

//reducer:是redux的一个非常核心的概念，它的逻辑是状态初始化与更新逻辑，即用于修改数据的方式，需要用户自己编写
/*
   reducer必须是一个纯函数 在redux内部被调用，并传入state和action两个参数，最后返回一个新的state，因为不能对state进行修改
   *在reducer里面需要做两件事情
      1、初始化数据，state=initState，这就是给数据一个初始默认值的意思
      2、指定数据的修改方式，因为初始化之后还会要更改数据的
*/


// console.log("indexstate", store.getState())


/*
* store 仓库
常用方法：
dispatch
getState：获取数据
subscribe
*/

/*
*state 状态(共享数据) 才是真正存放数据的地方
  >状态的改变，会触发使用了这个状态的组件更新，就是用到了state的组件都会进行刷新
*/

/* action 动作/命令  是作为dispatch的参数来修改数据的
   *格式：{type:"",}
*/


/*
***redux 得到核心概念
   *store
      是一个仓库
      *常用方法
         *getstate（）
         dispatch(action)
   *reducer
    >是一个纯函数，用于定义state的初始值，且必须返回一个新的state
   *state
    > 共享的数据，只要用到state的组件数据都会更新
   *action 动作或者命令
      >格式：{格式："××"}

使用redux步骤

import {createStore} from 'redux';
2.定义reducer
  *定义state的初始值并指定修改state的方式
const reducer = function(state,action) {
    根据action.type 进行不同的操作
    switch(action.type){
        case "login":
             return{

             }

    }
}

1.创建store并传入reducer
const store = createStore(reducer);

export default store


//3 操作state 就是 import store from '@/store'打印store输出的方法！！
   *获取：store.getState();
   *修改：store.dispatch(action)  //传进action之后 ，store会自动帮我们在内部调用reducer
   *监听：store.subscribe(fn)
*/

/*
react-redux
  一个桥接工具，用于连接react组件 和redux数据
  原理
     *context
       >封装了一个“Provider”组件给子组件共享数据
      import { Provider } from 'react-redux';
       <Provider></Provider>
      *高阶组件
       >利用高阶组件定义传入组件的数据，也是通过props去传输的，这样就不需要用consumer接收

    *使用步骤
    1. 利用Provider共享store 比较繁琐~
      原理
     *context
       >封装了一个“Provider”组件给子组件共享数据
      import { Provider } from 'react-redux';
       <Provider></Provider>
    2.直接利用"connect"的返回值为高阶组件来定义传入组件的数据
    let App = function（props）{}

    mapStateToProps :用于获取state数据
    mapDispatchToProps：用于修改state数据
    App = connect(mapStateToProps,mapDispatchToProps)(App)
*/

/*
   redux数据持久化 就是刷新数据还在
*/