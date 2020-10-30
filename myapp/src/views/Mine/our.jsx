import React from 'react';


//函数组件的第一个参数是props
let Our = function(props){
    console.log('Mine.props',props)

    return (
        <div>
            Our
        </div>
    )
}

export default Our;