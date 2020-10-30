import React from 'react';
import {connect} from 'react-redux';
import userAction from '@/store/actions/user'
import {withUser,withAuth} from '@/utils/hoc';
import {Route, Redirect, Switch} from 'react-router-dom';

// import Shop from './shop';
// import Msg from './msg';
// import Issue from './issue';
// import Collection from './collection';
// import Our from './our';

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

// const mapStateToProps = function(state){
//     console.log('mapStateToProps.state=',state);
//     return {
//         isLogin:state.user.isLogin,
//         currentUser:state.user.currentUser
//     }
// }

// const mapDispatchToProps = function(dispatch){
//     return {
//         dispatch,
//         logout(){
//             // dispatch({type:'logout'})
//             dispatch(userAction.logout())
//         }
//     }
// } 



let Mine = (props) => {
    console.log('Mine.props',props)
    // const goto = (path) => {
    //     props.history.push(path);
    // }
    // const {path:parentPath, url:parentUrl} = props.match;
    return (
        <div>
            <div className="mytop">
                <div className="mytop-content">
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
      {datalist.map(item=><div className="item" key={item.id} onClick={()=>{props.history.push(item.path)}}> <img src={item.img} alt=""/>{item.name}</div>)}
       </div>

        {/* <Switch>
            <Route path={parentPath+"/shop"} component={Shop} />
            <Route path={parentPath+"/msg"} component={Msg} />
            <Route path={parentPath+"/issue"} component={Issue} />
            <Route path={parentPath+"/collection"} component={Collection} />
            <Route path={parentPath+"/our"} component={Our} />
            <Redirect from={parentPath} to={parentPath+"/collection"}/>
        </Switch> */}

        </div> 
    )
}
Mine = withAuth(Mine);
// Mine = connect(mapStateToProps,mapDispatchToProps)(Mine)
export default Mine