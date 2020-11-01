import React from 'react';
import './index.scss'
import { Breadcrumb, Table, Tag, Space, Button} from 'antd';

import { UserOutlined,HomeOutlined } from '@ant-design/icons';


const { Column, ColumnGroup } = Table;

const data = [
    {
        _id: "5f1dcb1f3f1eb819289bb8c7",
        username: "Rodriguez",
        name: "姜军",
        birthday: "1985-02-10",
        sex: "女",
        phone: "18683965065",
        address: "新疆维吾尔自治区 克拉玛依市 白碱滩区",
        pic: "http://dummyimage.com/50x50"
      },
      {
        _id: "5f1dcb1f3f1eb819289bb8c7",
        username: "Rodriguez",
        name: "姜军",
        birthday: "1985-02-10",
        sex: "女",
        phone: "18683965065",
        address: "新疆维吾尔自治区 克拉玛依市 白碱滩区",
        pic: "http://dummyimage.com/50x50"
      },
      {
        _id: "5f1dcb1f3f1eb819289bb8c7",
        username: "Rodriguez",
        name: "姜军",
        birthday: "1985-02-10",
        sex: "女",
        phone: "18683965065",
        address: "新疆维吾尔自治区 克拉玛依市 白碱滩区",
        pic: "http://dummyimage.com/50x50"
      },

];
const User = () => {
    return (
        <div>
             <Breadcrumb>
                  <Breadcrumb.Item >
                    <HomeOutlined />
                  </Breadcrumb.Item>
                  <Breadcrumb.Item >
                    <UserOutlined />
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>用户管理</Breadcrumb.Item>
            </Breadcrumb>

    <Table dataSource={data}>   
    <Column title="name" dataIndex="name" key="name" />
    <Column title="sex" dataIndex="sex" key="sex" />
    <Column title="birthday" dataIndex="birthday" key="birthday" />
    <Column title="phone" dataIndex="phone" key="phone" />
    <Column title="address" dataIndex="address" key="address" />

    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <Button>编辑</Button>
          <Button danger>删除</Button>
        </Space>
      )}
    />
  </Table>
        </div>
    )
}
export default User