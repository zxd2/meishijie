import React from 'react';
import { Form, Input, Button, Checkbox, message} from 'antd';
import { NavBar, Icon} from 'antd-mobile';
import request from '@/utils/request';
import SHA256 from 'crypto-js/sha256';

import 'antd/dist/antd.css';
import './index.scss'

// const layout = {//全局配置'
//     labelCol: { span: 1 },
//     wrapperCol: { span:2 },
//   };

//   const tailLayout = {
//     wrapperCol: { offset: 1, span:2},
//   };

const rules = {
    username: [
        { required: true, message: '用户名不能为空'},
    ],
    password: [
        { required: true, message: '密码不能为空' },
    ]
}


let Login = (props) => {

    console.log('Login.props', props.location);
    console.log('history',props.history)
    
    const onFinish = async (values) =>{
        console.log('加密前=',values)    
    // console.log('value',values) 
        //登录
        // 把密码通过Crypto进行加密（加密算法：sha256）
        let{username,password,remember} = values;
        password = SHA256(password).toString();
        console.log('加密后=',password)

        const {data} = await request.get('/user/login',{ 
            params:{
                username,
                password,
            }
        });
        console.log('data', data)
        if(data.flag) {
            message.success('登录成功')
           
            //把登陆信息存起来
            console.log(values.remember)
            if(values.remember) { 
                localStorage.setItem('currentUser',JSON.stringify({username:username}))
            }else{
                sessionStorage.setItem('currentUser',JSON.stringify(username))
            }

            //提取目标地址
            const {search} = props.location;
            const pathname = search.match(/targetUrl\=([\/\w\-]+)/);
            console.log('pathname',pathname)
            let targetUrl;
            if(pathname){
                targetUrl = pathname[1];
            }
            console.log('targetUrl',targetUrl)
            props.history.push({
                pathname: targetUrl || '/mine'
            })
            // props.history.push('/mine')
        }else{
            message.error('用户名或密码错误')
        }  
    }

    return (
        <div>
              <div className="navBar">
            <ul>
                <li onClick={()=>{props.history.goBack()}} ><Icon type="left"size={'lg'}/>返回</li>
                <li>登录美食杰</li>
                <li onClick={()=>{props.history.push('/reg')}}>注册</li>
            </ul>
        </div>
        <Form
                // {...layout}
                name="basic"
                initialValues={{ remember: true }}//设置初始值
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                >
                <Form.Item 
                    // style={{outline:"none",border:'0'}}
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

                <Form.Item
                //  {...tailLayout} 
                name="remember" 
                valuePropName="checked">
                    <Checkbox>下次免登陆</Checkbox>
                </Form.Item>

                <Form.Item 
                // {...tailLayout}
                >
                    <Button type="primary" htmlType="submit">
                    登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login