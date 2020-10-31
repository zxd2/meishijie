import React from 'react';
import './index.scss'
// import { MyContext } from '../../store/reducers/user'
import { connect } from 'react-redux';

let Home = (props) => {
    console.log(props,"state")
    return (
        <div>首页
       
        </div>
    )
}
let a = function (state) {
    return state
}
Home = connect(a)(Home)
export default Home