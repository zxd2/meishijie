import React, { useState }  from 'react';
import { Modal, Button, } from 'antd';
import  Changepsw from '../changepsw';

// import './index.scss'
 
class Psw extends React.Component {

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
        修改密码
        </Button>
        <Modal
          title="修改密码"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Changepsw/>
        
        </Modal>
      </>
    );
  }
}

export default Psw