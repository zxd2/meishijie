import request from '@/utils/request'

import SHA256 from 'crypto-js/sha256';
import { call, apply, put, takeEvery, takeLatest } from 'redux-saga/effects'; //effects的意思是不可控的操作都是通过redux-saga来操作的
//要先拿到dispatch，引入store
//import store from '@/store'  //因为store里的createstore方法默认创建好了4个方法了！！

/*
知识点：saga会在适当的时候自动调用迭代器的next()方法 
saga里的call, apply等效于原生js中的call, apply，主要是为了方便测试(单元测试，点对点测试)
 */
function* initial() {
    console.log("hello saga") //这里的代码不用写next就能执行了，因为run方法里面内置了迭代器
    //监听saga action，处于监听的状态
    //takeEvery的功能就是监听异步action：saga action
    //yield takeEvery('login_async', login) //触发生成器函数login，可同时触发多个action            action ,       参数
    yield takeLatest('login_async', login) //takeLatest做了防抖优化只生效最后一次
    yield takeLatest('logout_async', logout) //takeLatest做了防抖优化只生效最后一次
    yield takeLatest('change_qty_async', changeQty)
}
//sagaAction就是通过触发login_async时传的参数
function* login(sagaAction) {
    console.log(123)
    console.log("saga.login", sagaAction)
    //加了yield是因为加了next()才会进行下一步操作，类似于await，但由于引入了redux-saga，我们不用写出next(),它会自动在合适的时机调用next()了即它会等到发送ajax请求完成并返回数据的时候会自动next()
    // const { data } = yield request.get('/user/login', {
    //     params: {
    //         username: "h52004",
    //         password: SHA256("123456").toString() //密码记得加密呀！！
    //     }
    // })
    //call 的第一个参数为函数，后面的就是函数的参数，达到的效果和上面一样，以后建议都这样写！！
    const { data } = yield call(request.get, '/user/login', {
        params: sagaAction.data
    })
    console.log("data", data) //

    //同步action：这个是触发reducer 的action 的同步方法 之前已经在user.js定义好了action叫login
    //等待异步结果返回后调用redux的同步action
    let { username, token } = data
    const action = { type: "login", data: { username, token } }
    //这里要记得加yield
    //yield store.dispatch(action)  //要先拿到dispatch,store里的createstore默认创建了4个方法了
    //注意：其实不用单独引入store了，因为saga也帮我们封装好了dispatch了，就是put,put就是dispatch
    yield put(action)
}

function* logout(sagaAction) {
    console.log("saga.logout", sagaAction)
    //加了yield是因为加了next()才会进行下一步操作，类似于await，但由于引入了redux-saga，我们不用写出next(),它会自动在合适的时机调用next()了即它会等到发送ajax请求完成并返回数据的时候会自动next()
    // const { data } = yield request.get('/user/login', {
    //     params: {
    //         username: "h52004",
    //         password: SHA256("123456").toString() //密码记得加密呀！！
    //     }
    // })
    //call 的第一个参数为函数，后面的就是函数的参数，达到的效果和上面一样，以后建议都这样写！！
    // const { data } = yield call(request.get, '/user/login', {
    //     params: sagaAction.data
    // })
    // console.log("data", data) //
    //同步action：这个是触发reducer 的action 的同步方法 之前已经在user.js定义好了action叫login
    //等待异步结果返回后调用redux的同步action
    const action = { type: "logout" }
    //这里要记得加yield
    //yield store.dispatch(action)  //要先拿到dispatch,store里的createstore默认创建了4个方法了
    //注意：其实不用单独引入store了，因为saga也帮我们封装好了dispatch了，就是put,put就是dispatch
    yield put(action)
}
//购物车的触发的时候这样写{type:"change_qty_async",data:{id,qty}}
function* changeQty(sagaAction) {
    let { id, qty } = sagaAction.data
    const { data } = yield call(request.get, `/goods/${id}/kucun`)
    //库存量小于购买的数量
    if (data.kucun <= qty) {
        qty = data.kucun
        //还可以设计弹窗提示
        alert("库存不足")
    }
    //这步是触发第二个action 原理就是通过触发change_qty_async 来触发change_qty
    yield put({ type: "change_qty", id, qty })
}
export default initial