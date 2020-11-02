import React, { useCallback, useEffect, useState, useLayoutEffect } from 'react';
import './index.scss'
import request from '@/utils/request';
import { Breadcrumb, Table, Tag, Space, Button, Input } from 'antd';

import { UserOutlined, HomeOutlined } from '@ant-design/icons';



const User = (props) => {
  let [data, changeData] = useState("")
  //渲染数据
  useEffect(async () => {
    try {
      const data2 = await request.get('/user/list', {
        params: {
          page: 1,
          pagesize: 20
        }
      })
      if (data2.data.flag) {
        changeData(data2.data.data)
      }
    } catch (err) {
      console.log("err", err)
    }
  }, [])

  //删除功能
  const delUser = async (id) => {
    try {
      const deldata = await request.delete('/user/del/' + id)
      console.log(deldata, "deldata")
      console.log("id", id)
      console.log("data", data)
      if (deldata.data.flag) {
        let newData = data.filter(item => {
          return item._id !== id
        })
        changeData(newData)
        // data = newData
        console.log("newData", newData)

      }
    } catch (err) {
      console.log("err", err)
    }
  }
  //查询功能
  const fetchall = async (value) => {
    try {
      let p = await request.get('/user/list', {
        params: {
          page: 1,
          pagesize: 20,
          search: { "name": value }
        }
      })
      if (p.data.flag) {
        changeData(p.data.data)
        // data = p.data.data
      }
    } catch (err) {
      console.log(err);
    }
  }

  const { Search } = Input;
  const { Column, ColumnGroup } = Table;
  const onSearch = value => {
    console.log(value)
    fetchall(value)
  };
  return (
    <div>
      <Search
        style={{}}
        placeholder="请输入关键字"
        allowClear
        enterButton="查询"
        size="large"
        // onChange
        onSearch={onSearch}
      />
      <Button type="primary" className="btn1">
        重置
        </Button>
      <Button type="primary" className="btn2">
        新增
        </Button>
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
        <Column title="姓名" dataIndex="name" key="name" />
        <Column title="性别" dataIndex="sex" key="sex" />
        <Column title="生日" dataIndex="birthday" key="birthday" />
        <Column title="手机号码" dataIndex="phone" key="phone" />
        <Column title="地址" dataIndex="address" key="address" />

        <Column
          title="操作"
          key="action"
          render={(text, record) => (
            < Space size="middle">
              <Button>编辑</Button>
              <Button danger onClick={() => { delUser(text._id) }} >删除</Button>
            </Space >

          )}
        />
      </Table>
    </div>
  )
}
export default User