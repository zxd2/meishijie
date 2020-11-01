import React, { useState } from 'react';
import { Dropdown, Menu, message, Modal, Button,} from 'antd';
import { DownOutlined } from '@ant-design/icons';

// import './index.scss'


const onClick = ({ key }) => {
  if( key == 1){
    message.info('修改密码')

  }else{
    message.info('退出')
  }
    // message.info(`Click on item ${key}`);
  };

  const menus = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">修改密码</Menu.Item>
      <Menu.Item key="2">退出</Menu.Item>
    </Menu>
  );
  
  class Headers extends React.Component  {
    render() {
    return (
        <div>
              <Dropdown overlay={menus}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
               个人中心 <DownOutlined />
              </a>
            </Dropdown>
        </div>
    
    );
    }
  };

  export default Headers;