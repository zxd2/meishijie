// import Item from 'antd-mobile/lib/popover/Item';
import React from 'react';
import request from '../../utils/request'
// const Myme =(props)=>{
//     console.log('Myme.props',props)
//     const id=props.location.search.slice(2);
//     console.log('id=',id)
   
//     console.log('id=',id)
//     // const {data}=await request.get('/good/list'+rid)
//     // console.log('Myme.data',data)
//     return(
//         <div>我的菜单</div>
//     )
// }
class Myme extends React.Component{
    state={
        data:{}
    }
async componentDidMount(){
        const id=this.props.location.search.slice(3);
    console.log('id=',id)
    const {data}=await request.get('/good/getcook',{
        params:{
            colName:"caidan",
            id:id
        }
    })
    console.log('data',data)
   this.setState({
       data:data.data
   })
    }
    render(){
        const {data}=this.state
        console.log(data)
        return(
        <div><img src={data.image3} alt=""/></div>
        )
    }
}
export default Myme