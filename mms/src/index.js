import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App.jsx';
import store from '@/store';
// import { Providers } from './store/reducers/user'
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';

//根据环境不同切换不同的路由模式 ，只要是基于node_JS的项目都可以用process.env.NODE_ENV:这个变量来切换不用的路由
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter

ReactDOM.render(
  // <React.StrictMode>
  // <Providers >
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  // </Providers>
  ,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
