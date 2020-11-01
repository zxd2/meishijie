import React from 'react';
import './index.scss'
import SHA256 from 'crypto-js/sha256';
import { Form, Input, Button, Checkbox, message } from 'antd';
import request from '@/utils/request';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const rules = {
    username: [
        { required: true, message: '用户名不能为空' },
        {
            async validator(rule, value) {
                if (!value) {
                    return
                }
                // 根据输入的用户名校验用户名是否被占用
                const { data } = await request.get('/user/checkname', {
                    params: {
                        username: value
                    }
                });
                console.log(data, "user.data")
                if (data.flag) {
                    return Promise.resolve();
                    console.log(Promise.resolve(), "Promise.resolve()")
                }
                return Promise.reject('用户名已存在');
            },
        }
    ],
    password: [
        { required: true, message: '密码不能为空' },
        { min: 6, max: 12, message: '密码长度必须为6-12位字符' }
    ]
}

const Reg = (props) => {
    //提交表单且数据验证成功后回调事件，包括下面的所有的表单
    const onFinish = async values => {
        console.log('Success:', values);
        // 注册
        values.password = SHA256(values.password).toString();
        console.log('加密后=', values);
        const { data } = await request.post('/user/reg', values);
        if (data.status === 200) {
            message.success('注册成功')
        }

        props.history.push({
            pathname: '/login',
            state: { username: values.username }
        })

    };

    // const onFinishFailed = errorInfo => {
    //     console.log('Failed:', errorInfo);
    // };

    return (
        <div className="reg-container">

            <Form className="login-form"
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
                <h1 className="login-title">美食杰会员管理系统-注册</h1>
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
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout} style={{ marginTop: "20px" }}>
                    <Button type="primary" htmlType="submit" onClick={() => {
                        props.history.push('/login')
                    }} style={{ marginRight: "20px" }}>
                        登录
                    </Button>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Reg