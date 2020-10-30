import React, { useCallback, useEffect, useState, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { AppstoreOutlined, ScissorOutlined, CoffeeOutlined, AppleOutlined, ChromeOutlined, PieChartOutlined, RadarChartOutlined, DeleteOutlined, BgColorsOutlined, DashboardOutlined, UserOutlined, HeartOutlined } from '@ant-design/icons'
import { Drawer, List, Flex, SearchBar } from 'antd-mobile';
import "./index.scss"
// import Search from "../../components/search/search";
import request from '../../utils/request'

const Classify = () => {
    const [datalist, changeData] = useState([])
    let [listChild, changeChild] = useState([])
    /* 
    ["实用分类", "每日三餐", "主食", "家常菜谱", "中华菜系", "各地小吃", "外国菜谱", "烘焙", "人群", "厨具", "场景", "疾病调理", "脏腑调理", "功能性调理", "工艺", "时间"]
    */
    let iconlist = [AppstoreOutlined, ScissorOutlined, CoffeeOutlined, AppleOutlined, ChromeOutlined, PieChartOutlined, RadarChartOutlined, DeleteOutlined, BgColorsOutlined, DashboardOutlined, UserOutlined, HeartOutlined]
    //渲染的列表
    datalist.forEach((value, index) => {
        value.icon = iconlist[index]
    })
    //请求第一页的数据
    useLayoutEffect(function () {
        changelist('实用分类')
    }, [])
    //请求列表的数据
    useEffect(async function () {
        try {
            const { data } = await request.get("/good/list", {
                params: {
                    page: 1,
                    pagesize: 20,
                    colName: "list"
                }
            })
            console.log(data, "data")
            if (data.flag) {
                changeData(data.data)
            }
        } catch (err) {
            console.log("err", err)
        }
    }, [])
    console.log(datalist, "datalist")
    //请求列表的小数据
    const changelist = useCallback(async function (item) {
        try {
            console.log("item", item)
            const data2 = await request.get("/good/list", {
                params: {
                    page: 1,
                    pagesize: 20,
                    colName: 'fenlei',
                    search: { "标题": item }
                }
            })
            console.log(data2.data, "data2")
            if (data2.data.flag) {
                changeChild(data2.data.data)
            }
        } catch (err) {
            console.log("err", err)
        }
    }, []);
    console.log(listChild, "listChild")


    //路由跳转
    const history = useHistory();
    console.log("history", history)

    const goto = (path, smalltitle) => {
        history.push(
            {
                pathname: path,
                state: smalltitle
            })
        console.log("smalltitle", smalltitle)
    }

    const sidebar = (<List>
        {
            datalist.map((i, index) => {
                // if (index === 0) {
                //     return (<List.Item key={index}
                //         thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                //         multipleLine
                //     >Category</List.Item>);
                // }
                return (<List.Item key={index} style={{ fontSize: 12 + "px" }}
                    thumb={<i.icon style={{ fontSize: 25 + "px", color: "red" }} />}
                    onClick={changelist.bind(null, (i.标题))}>{i.标题}</List.Item>);
            })}
    </List>);
    let docked = true;
    //弹性盒布局的
    const PlaceHolder = ({ className = '', ...restProps }) => (
        <div className={`${className} placeholder`} {...restProps} onClick={goto.bind(null, '/detail', restProps.beizhu)}>
            {console.log("...restProps", restProps)}
            <img src={restProps.image} alt="" />
            <span>{restProps.beizhu}</span>
        </div>

    );
    let [value, changeValue] = useState('')
    const onChange = (value) => {
        changeValue(value)
        console.log("value", value)
    };
    //组件的渲染
    return (
        <div className="classifyNav">{
            // <Search style={{ position: "absolute", Zindex: "9999", width: 375 + "px", height: 72 + 'px', backgroundColor: "#fff" }}></Search>
        }
            <SearchBar
                // value={value}
                placeholder="搜索百万免费菜谱"
                onSubmit={value => console.log(value, 'onSubmit')}
                onClear={value => console.log(value, 'onClear')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onCancel={() => history.push('/classify')}
                cancelText
                showCancelButton
                onChange={(value) => { onChange(value) }}
            />
            <div style={{ height: '100%' }}>
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight }}
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 72 }}
                    sidebarStyle={{ border: '1px solid #ddd' }}
                    sidebar={sidebar}
                    docked={docked}
                >
                    <Flex wrap="wrap">
                        {
                            listChild.map((item, index) => <PlaceHolder key={index} beizhu={item.字段11} image={item.缩略图1} className="inline" />)
                        }

                    </Flex>


                </Drawer>
            </div>
        </div>
    )
}
export default Classify