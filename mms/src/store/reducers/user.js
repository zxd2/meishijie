
import React, { useReducer } from 'react';

//数据持久化：用本地存储的方式刷新时先读取webstorage的数据
let currentUser = localStorage.getItem('currentUser');
// let isLogin = false
try {
    //JSON.parse()本身的数据是null也照样转化的，所以还要设置个空对象才行
    currentUser = JSON.parse(currentUser) || {}
} catch (err) {
    currentUser = {}
}

// if (currentUser.Authorization) {
//     isLogin = true
// }
// 3操作redux 
/* *获取state store.getState()
    *修改state store.dispatch(action) */

// 2定义reducer
//*初始化数据initState ，只能在一开始赋值，后面的state都是最新的状态，就是return的值
const initState = {
    //初始值currentUser在上面定义好了
    currentUser: {}, //一开始的值是没有的，登录后就要把数据放进来，所以就要涉及到修改state啦！！
    isLogin: false

}
//ruder功能:获取用户信息和是否登录
let userReducer = function (state = initState, action) {
    //数据怎么修改是在这里面定义 reducer 传入state和action且必须返回一个新的state
    // *action是调用dispatch方法时传进来的方式
    //action:{type:"login",user},所以可以通过action.type来调用
    switch (action.type) {
        //  假设传过来的是'login'
        case 'login':
            //在这个位置做数据持久化：就是把数据存入webStorage

            console.log("action.data", action.data)

            // localStorage.setItem("currentUser", JSON.stringify(action.data))

            return {
                isLogin: true,
                currentUser: action.data //也是通过action传过来的user,返回一个新的state
            }

        case "logout":
            //退出时也要清空本地存储
            localStorage.removeItem("currentUser")
            //退出直接可以等于初始状态,不能直接写initState，因为isLogin一开始是true的状态
            return {
                currentUser: {},
                isLogin: false
            };
        //{type:"update_user",user:{phone:1231313132}}
        case 'update_user':
            const newState = {
                ...state, //把原来的数据都复制下来
                currentUser: {
                    ...state.currentUser, // 因为不是改全部
                    ...action.user  //这样就只把user覆盖了
                }
            }
            localStorage.setItem("currentUser", JSON.stringify(newState.currentUser))
            return newState
        default:
            return state  //意思是没有修改的话就返回当前的state
    }


}
// 封装一个组件：Provider
export const MyContext = React.createContext(null)

export const Provider = (props) => {
    const [state, dispatch] = useReducer(userReducer, initState);
    // console.log("states", state)
    // console.log("dispatch", dispatchs)
    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default userReducer