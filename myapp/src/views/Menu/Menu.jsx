import React from 'react';
import { WhiteSpace } from 'antd-mobile';
import './index.scss'
import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import request from '../../utils/request';
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}></div>
  );
  @withRouter
class Menu extends React.Component {
   State={
            iqlist:[]
        }
    async componentDidMount(){
      
        const {data}=await request.get('/good/list',{
            params:{
                page:1,
                passize:20,
               Num:{"标题":"十篇菜谱"},
                colName:'caidan'
            }
        })
        console.log('data=',data)
        this.setState({
            iqlist:data.data.result
            
        })
        // console.log("iqlist",this.state.iqlist)
    }
   render(){
     const {iqlist}=this.state

      console.log('iqlist=',iqlist)
       return(
        <div>
            {/* {
                this.state.iqlist.map((item)=><NavLink> <PlaceHolder style={{height:'12vw',fontSize:'6vw',lineHeight:'12vw',padding:'0'}}>菜单</PlaceHolder>
    
                <WhiteSpace size="xs"/ >
                <PlaceHolder ><div className="menu-top"><b>我的菜单</b><div className='caipu'>十篇菜谱</div></div><div className="menu-bottom">
                   <div className="pic"><img src="https://st-cn.meishij.net/r/213/47/12949463/a12949463_154398886773264.jpg" alt=""/></div><div  className="pic"></div><div  className="pic"></div>
                    </div></PlaceHolder>
            </NavLink>)
            } */}
    
   
     
       
    
        
      </div>
       )
   }
}
export default Menu