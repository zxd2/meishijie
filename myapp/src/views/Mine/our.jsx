import React from 'react';
import { NavBar, Icon, Button } from 'antd-mobile';


//函数组件的第一个参数是props
let Our = function(props){
    console.log('Mine.props',props)

    return (
        <div>
              <NavBar
            mode="light"
            icon={<Icon type="left" style={{ fontsize: '16px' }} />}
            leftContent="返回"
            onLeftClick={() =>{props.history.goBack()}}
            rightContent=""
        >关于我们</NavBar>
        </div>
    )
}

export default Our;