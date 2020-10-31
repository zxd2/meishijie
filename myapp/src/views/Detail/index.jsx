import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import "./index.scss"
import request from '../../utils/request'
import { NavBar, Icon, SearchBar, Button, ListView } from 'antd-mobile';
import { AppstoreOutlined } from '@ant-design/icons';
import Detailist from './indexLazy'

const Detail = (props) => {
    console.log(props, "detailprops")
    const history = useHistory();
    let [value, changeValue] = useState('')
    let small = props.location.state
    const onChange = (value) => {
        changeValue(value)
        console.log("value", value)
    };

    return (
        <div className="nav">
            <NavBar
                mode="light"
                leftContent={<img className="image" src={require('../../assets/images/20180816120753_729.png')} alt="" />}
                onLeftClick={() => history.push('/home')}
                rightContent={
                    <button onClick={() => history.push('/classify')}>菜谱<br />大全</button>
                }
            >
                <SearchBar
                    // value={value}
                    placeholder="搜索百万免费菜谱"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => history.push('/classify')}
                    cancelText="搜索"
                    showCancelButton="true"
                    onChange={(value) => { onChange(value) }}
                />
            </NavBar>


            <Detailist {...props} attribute={small}></Detailist>

        </div>
    )
}
export default Detail