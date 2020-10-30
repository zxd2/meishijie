import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import "./index.scss"
import request from '../../utils/request'
import { NavBar, Icon, SearchBar, Button, } from 'antd-mobile';
import { AppstoreOutlined } from '@ant-design/icons';


const Detail = () => {
    const history = useHistory();
    const value = "搜索百万免费菜谱"
    const onChange = (value) => {

    };

    // clear = () => {
    //     // this.setState({ value: '' });
    // };

    return (
        <div className="nav">
            <NavBar
                mode="light"
                leftContent={<img className="image" src={require('../../assets/images/20180816120753_729.png')} alt="" />}
                // icon={<Icon type="left" />}
                onLeftClick={() => history.push('/classify')}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
            >
                <SearchBar
                    value={value}
                    // placeholder="Search"
                    // onSubmit={value => console.log(value, 'onSubmit')}
                    // onClear={value => console.log(value, 'onClear')}
                    // onFocus={() => console.log('onFocus')}
                    // onBlur={() => console.log('onBlur')}
                    // onCancel={() => console.log('onCancel')}
                    // showCancelButton
                    onChange={onChange(value)}
                />
            </NavBar>

        </div>
    )
}
export default Detail