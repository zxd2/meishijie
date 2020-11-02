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
    constructor(props) {
        super(props)
        this.state={
            iqlist:[]
        }
      }
   
    async componentDidMount(){
      
        const {data}=await request.get('/good/list',{
            params:{
                page:1,
                pagesize:20,
               search:{"Num":"10篇菜谱"},
                colName:'caidan'
            }
        })
        console.log('data=',data)
        this.setState({
            iqlist:data.data
            
        })
        // console.log("iqlist",this.state.iqlist)
    }
   render(){
     const {iqlist}=this.state

      console.log('iqlist=',iqlist)
       return(
        <div>
            {
                iqlist.map((item,index)=> 
                {return <div><PlaceHolder style={{height:'12vw',fontSize:'16px',lineHeight:'12vw',padding:'0'}}>菜单</PlaceHolder>
                    <WhiteSpace size="xs"/ >
                <PlaceHolder key={index} >
                    <div className="menu-top"><b>我的菜单</b>
                    <div className='caipu'>十篇菜谱</div>
                    </div>
                <div className="menu-bottom" key={index} style={{backgroundColor:"transparent"}}>
                   <div className="pic">
                       <img src={item.image3} alt=""/>
                       </div>
                       <div  className="pic">
                       <img src={item.image11} alt=""/>
                           </div>
                           <div  className="pic">
                           <img src={item.image21} alt=""/>
                       </div>
                    </div>
                   
                    </PlaceHolder> </div>}
            )
            }
  
      </div>
       )
   }
}
export default Menu