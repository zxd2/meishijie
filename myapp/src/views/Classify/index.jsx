import React, { useCallback, useEffect, useState } from 'react';
import { AppstoreOutlined, ScissorOutlined, CoffeeOutlined, AppleOutlined, ChromeOutlined, PieChartOutlined, RadarChartOutlined, DeleteOutlined, BgColorsOutlined, DashboardOutlined, UserOutlined, HeartOutlined } from '@ant-design/icons'
import { Drawer, List, Flex } from 'antd-mobile';
import "./index.scss"
import Search from "../../components/search/search";
import request from '../../utils/request'

const Classify = () => {
    const [datalist, changeData] = useState([])
    const [listChild, changeChild] = useState([])
    /* 
    ["实用分类", "每日三餐", "主食", "家常菜谱", "中华菜系", "各地小吃", "外国菜谱", "烘焙", "人群", "厨具", "场景", "疾病调理", "脏腑调理", "功能性调理", "工艺", "时间"]
    */
    let iconlist = [AppstoreOutlined, ScissorOutlined, CoffeeOutlined, AppleOutlined, ChromeOutlined, PieChartOutlined, RadarChartOutlined, DeleteOutlined, BgColorsOutlined, DashboardOutlined, UserOutlined, HeartOutlined]
    //渲染的列表
    datalist.forEach((value, index) => {
        value.icon = iconlist[index]
    })
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
    //列表的小数据
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
    listChild.map((item, index) => {
        const PlaceHolder = ({ className = '', ...restProps }) => (
            <div className={`${className} placeholder`} {...restProps}>
                <img src={item.缩略图1} alt="" />
                <span>{item.字段11}</span>
            </div>
        )
    });

    //组件的渲染
    return (
        <div><Search style={{ position: "absolute", Zindex: "9999", width: 375 + "px", height: 72 + 'px', backgroundColor: "#fff" }}></Search>
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
                            listChild.map((item, index) => <PlaceHolder key={index} className="inline" />)
                        }

                    </Flex>


                </Drawer>
            </div>
        </div>
    )
}
export default Classify