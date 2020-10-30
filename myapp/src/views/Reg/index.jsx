import React from 'react';

import { Form, Input, Button, Checkbox, message} from 'antd';
import { NavBar, Icon} from 'antd-mobile';
import request from '@/utils/request';
import SHA256 from 'crypto-js/sha256';
import 'antd/dist/antd.css';



import './index.scss'

// const layout = {//全局配置
//     labelCol: { span: 1 },
//     wrapperCol: { span:2 },
//   };

//   const tailLayout = {
//     wrapperCol: { offset: 1, span:2},
//   };

  const rules = {
    username: [
        { required: true, message: '用户名不能为空'},
        {
            async validator(rule, value) {
                if (!value) {
                    return
                }
                // 根据输入的用户名校验用户名是否被占用
                const {data} = await request.get('user/checkname', {
                    params: {
                        username: value
                    }
                });  

                if (data.flag) {
                    return Promise.resolve();
                }
                return Promise.reject('用户名已存在');
            },
        }
    ],
    password: [
        { required: true, message: '密码不能为空' },
        {min:6, max:12, message:'密码长度必须为6-12位字符串'}
    ]
}


const Reg = (props) => {

    const onFinish = async (values) =>{
        console.log('value',values) 
        //注册
        let{ username, password } = values;
        password = SHA256(password).toString();
        console.log('加密后',password);
        const {data} = await request.post('/user/reg', {
            username,
            password
        });
        if(data.flag) {
            message.success('注册成功')
        }
        console.log('history',props.history)
        props.history.push({
            pathname:'/login',
            state:{username:values.username}
        })
    }
   
    return (
        <div>
              <div className="navBar">
            <ul>
                <li><Icon type="left"size={'lg'} onClick={()=>{props.history.goBack()}}/>返回</li>
                <li>注册美食杰</li>
                <li onClick={()=>{props.history.push('/login')}}>登录</li>
            </ul>
        </div>
        <Form
                // {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={rules.username}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={rules.password}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>下次免登陆</Checkbox>
                </Form.Item> */}

                <Form.Item 
                // {...tailLayout}
                >
                    <Button type="primary" htmlType="submit">
                    马上注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Reg

 