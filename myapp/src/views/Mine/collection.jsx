import React, { useCallback, useEffect, useState, useLayoutEffect } from 'react';
import request from '../../utils/request'
import { NavBar, Icon, Button } from 'antd-mobile';
import {withUser,withAuth} from '@/utils/hoc';

import './collection.scss'

//函数组件的第一个参数是props
let Collection = function(props){
    console.log('Collection.props',props)

    const [username, changeUsername ] = useState(props.location.username);
    const [datalist, changeData] = useState([])

    const changeqty = useCallback(function(){
        console.log('qty=',qty)//qty=1 空依赖不会创建并返回新的函数，每次都是获取第一次的值（缓存值），所以每次都是返回2
        changeQty(qty+1)
     },[]); 

     useEffect(function () {
        //  这里的代码只在初始化时执行，只执行一次
        let username;
        if(props.location && props.location.username){//判断当前有参数
            username=props.location.username;
            console.log('username',username)
            sessionStorage.setItem('currentUsername',username);// 存入到sessionStorage中
          }else{
            username = sessionStorage.getItem('currentUsername');// 当state没有参数时，取sessionStorage中的参数
          }
          changeUsername(username)
    },[]);


    useEffect(async function () {
        try {
            const { data } = await request.get("/good/list", {
                params: {
                    page: 1,
                    pagesize:20,
                    colName: "kuaishoucai"
                }
            })
            console.log(data, "data")
            if (data.flag) {
                changeData(data.data)
            }

        } catch (err) {
            console.log("err", err)

        }
    
    }, [])
    
    return (
       
        <div className="collection">
            {/* 头部 */}
            <NavBar
            mode="light"
            icon={<Icon type="left" style={{ fontsize: '16px' }} />}
            leftContent="返回"
            onLeftClick={() =>{props.history.goBack()}}
            rightContent=""
            >{username}的收藏</NavBar>

           {/* 内容渲染 */}
            <div className="goods">
               {datalist.map(item=>
                <div className = 'foodItem' key={item._id} >
                    <img className='pic' src={item.缩略图} alt=""/>
                    <div className="content">
                        <h2>{item.name}</h2>
                        <div className="dec">维生素A有助于预防夜盲症，夜盲症患者的未来不是梦</div>
                        <div className="umsg">
                            <img className='Tpic' src="https://s1.c.meishij.net/images/default/tx2_5.png" alt=""/>
                            <p>东方小厨神</p>
                            <i></i>
                            <strong>{item.look}</strong>
                        </div>
                    </div>
                </div>)}
            </div>
      </div> 

    )
}
Collection = withAuth(Collection);
export default Collection;