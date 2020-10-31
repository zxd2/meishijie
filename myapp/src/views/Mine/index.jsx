import React from 'react';
import {withUser,withAuth} from '@/utils/hoc';
import { message } from 'antd';


import './index.scss'

var imglist = [
   { id:1,
     img: 'http://static.meishij.net/images/get3/ceshi/sousuo.png'
   },
   { id:2,
    img:' http://static.meishij.net/images/get3/ceshi/caipu1.png'
  },
  { id:3,
    img: 'http://static.meishij.net/images/get3/ceshi/kouwei1.png'
  },
  { id:4,
    img: 'http://static.meishij.net/images/get3/ceshi/caixi1.png'
  },
  { id:5,
    img: ' http://static.meishij.net/images/get3/ceshi/zucai1.png'
  },
  { id:6,
    img:  'http://static.meishij.net/images/get3/ceshi/gexing1.png '
  },
  { id:7,
    img:  'http://static.meishij.net/images/get3/ceshi/zuopin1.png'
  }, 
]

var datalist = [
    {
        id:1,
        name:'积分商城',
        path:'/shop',
        img:'https://s1.c.meishij.net/wap7/images/myhome_jifen@3x.png'
    },
    {
        id:2,
        name:'消息通知',
        path:'/msg',
        img:'https://s1.c.meishij.net/wap7/images/myhome_xiaoxi@3x.png'
    },
    {
        id:3,
        name:'我的发布',
        path:'/issue',
        img:'https://s1.c.meishij.net/wap7/images/myhome_fabu@3x.png'
    },
    {
        id:4,
        name:'我的收藏',
        path:'/collection',
        img:'https://s1.c.meishij.net/wap7/images/myhome_shoucang@3x.png'
    },
    {
        id:5,
        name:'关于我们',
        path:'/our',
        img:'https://st-cn.meishij.net/p2/20190112/20190112151958_101.png'
    },
]


let Mine = (props) => {
  

    //退出登录
    const remove  = (currentUser) => {
        console.log("点击退出")
        localStorage.removeItem('currentUser');
        message.success('退出成功')
        props.history.push('/login');
    }
    
     let {username} = JSON.parse(localStorage.getItem('currentUser'))
    console.log('usermsg', localStorage.getItem('currentUser'),username);

    return (
        <div className="mine">
            <div className="mytop">
                <div className="mytop-content">
                    <div className="remove"><i onClick={remove.bind(this,'currentUser')}>退出</i></div>
                    <div className="msg">
                        <img src="https://s1.c.meishij.net/images/default/tx2_5.png" alt=""/>
                        <div className="username">
                            <strong>{props.currentUser.username}</strong>
                            <span>正在通往美食达人的路上</span>
                        </div>
                    </div>
                    <div className="DNA">
                        <span>美食杰DNA 0条 ></span>
                    </div>
                </div>        
            </div>
            <div className="list">
                <ul>
                    <li><span>0</span> 关注</li>
                    <li><span>0</span> 粉丝</li>
                    <li><span>0</span> 菜谱</li>
                </ul>
            </div>

            <div className="honor">
                <h3>荣誉勋章</h3>
                <ul>
                    {imglist.map(item=><li key={item.id} ><img src={item.img} alt=""/></li>)}
                </ul>
            </div>
            
            <div className="myItem">
                {datalist.map(item=><div className="item" key={item.id} onClick={()=>{props.history.push({
                    pathname:item.path,
                    username
                })}}> <img src={item.img} alt=""/>{item.name}</div>)}
            </div>
       </div> 
    )
}
Mine = withAuth(Mine);

export default Mine