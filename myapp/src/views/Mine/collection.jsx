import React from 'react';
import { NavBar, Icon, Button } from 'antd-mobile';

import './collection.scss'

//函数组件的第一个参数是props
let Collection = function(props){
    console.log('Collection.props',props)

    return (
        <div>
            <NavBar
            mode="light"
            icon={<Icon type="left" style={{ fontsize: '16px' }} />}
            leftContent="返回"
            onLeftClick={() =>{props.history.goBack()}}
            rightContent=""
    >杰米3344555555的收藏</NavBar>
        </div>
    )
}

export default Collection;