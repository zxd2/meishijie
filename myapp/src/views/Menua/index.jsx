import React,{goto} from 'react';
import { WhiteSpace } from 'antd-mobile';
import './index.scss'
import request from '../../utils/request'

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}></div>
  );
class Menu extends React.Component {
  state={
    iqlist:[]
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
    if(!data.flag){
      console.log('数据失败')
    }else{
      this.setState({
      iqlist:data.data
      })
     
    }
  
    
  }
   
  goto =(_id)=>{
    this.props.history.push({
      pathname:'/myme',
      search:'id'+_id,
      
      
    })
    }
   render(){
        const {iqlist}=this.state
        
        console.log('iqlist=123',iqlist)
       return(
      
        <div> 
          <div  style={{textAlign:'center',fontSize:' 18px',fontWeight:'600',color:'#333',lineHeight:'44px',background:'white',paddingBottom:'20px'}}>菜单</div>
          {
            iqlist.map((item,index)=>{
              return(
                <div>
              <WhiteSpace size="xs" />
              
               <PlaceHolder key={item._id} onClick={this.goto.bind(this,item._id)}>
                  <div className="title">
                  <b className="b">我的菜单</b>
                  <div className="am">12篇菜谱</div></div>
                  <div className="menu-pic">
                    <div className="pic"><img src={item.image3} alt=""/></div>
                    <div className="pic"><img src={item.image11} alt=""/></div>
                    <div className="pic ma-no"><img src={item.image21} alt=""/></div>
                    </div></PlaceHolder>
                    </div>
            
              )
            })
          }
          
   
  </div>
       )
   }
}
export default Menu