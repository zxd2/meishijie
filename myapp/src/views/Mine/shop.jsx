import React from 'react';
import { NavBar, Icon, Button } from 'antd-mobile';


//函数组件的第一个参数是props
let Shop = function(props){
    console.log('Mine.props',props)

    return (
        <div>
               <NavBar
            mode="light"
            icon={<Icon type="left" style={{ fontsize: '16px' }} />}
            leftContent="返回"
            onLeftClick={() =>{props.history.goBack()}}
            rightContent=""
        >积分商城</NavBar>
        </div>
    )
}

export default Shop;