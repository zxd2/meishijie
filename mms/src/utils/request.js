import axios from 'axios';

//不用先上线，可以做好再上线
const Url = process.env.NODE_ENV === 'development' ? 'http://10.3.140.178:2001' : 'http://120.24.31.117:2004'
//因为直接用axios发起请求不是特别好
//所以先创建一个实例http://120.24.31.117/
const request = axios.create({
    baseURL: Url + '/api'
})

export default request;