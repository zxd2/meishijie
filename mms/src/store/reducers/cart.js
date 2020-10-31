/* 购物车信息 */


//设置初始值
const initState = {
    goodslist: [{ id: 1, name: "×××", price: 998, qty: 2 }], //商品列表
    totalPrice: 0  //总价
}

//定义reducer函数，名字可以随便取,有两个参数state和action，state是初始数据，action传入type和新的数据
const cartReducer = function (state = initState, action) {
    let goodslist, totalPrice
    switch (action.type) {
        //调用的时候是{type:"add_to_cart",goods} 传商品过来，因为是添加商品
        case 'add_to_cart':
            goodslist = [action.goods, ...state.goodslist];
            //这里有个reduce的知识点，它的第一个参数是函数，第二个参数就是prev的默认值，prev除了第一次之外，后面都是上一次的返回值
            totalPrice = goodslist.reduce((prev, item) => prev + item.price * item.qty, 0)
            return {
                //...state, //先把原来的购物车信息添加回去,因为不知道state多少条属性，所以就都添加上去先
                goodslist,
                //再单独修改goodslist的数据，就是把刚添加的新的那一条放到最前面，然后旧的购物车的数据放在后面
                totalPrice
            }
        //调用的时候是{type:"remove_from_cart",id} 删除是接收id，通过id来删除商品的,id 是通过action.id调用
        case 'remove_from_cart':
            goodslist = state.goodslist.filter(item => item.id != action.id)
            //总价就是用这里得到的goodslist来计算的
            totalPrice = goodslist.reduce((prev, item) => prev + item.price * item.qty, 0)
            return {
                goodslist,
                totalPrice
            }
        default:
            return state;
    }
}

export default cartReducer
