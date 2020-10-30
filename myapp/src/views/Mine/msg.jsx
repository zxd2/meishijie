import React from 'react';
import { NavBar, Icon, Button } from 'antd-mobile';

import './msg.scss'
//函数组件的第一个参数是props
let Msg = function(props){
    console.log('Mine.props',props)

    return (
        <div>
              <NavBar
            mode="light"
            icon={<Icon type="left" style={{ fontsize: '16px' }} />}
            leftContent="返回"
            onLeftClick={() =>{props.history.goBack()}}
            rightContent=""
        >消息</NavBar>
        </div>
    )
}

export default Msg;