import React from 'react';


//函数组件的第一个参数是props
let Shop = function(props){
    console.log('Mine.props',props)

    return (
        <div>
            Shop
        </div>
    )
}

export default Shop;