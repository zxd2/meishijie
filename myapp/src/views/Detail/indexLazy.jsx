
import React from 'react'
import request from '../../utils/request'
import './lazy.scss'
import { StarFilled, HeartOutlined, EyeOutlined } from '@ant-design/icons'
/* const Aidou = function () {

    return (
        <div>
            <div className="css-o8bgc8 eas58qq0"></div>
            爱豆
        </div>
    )
} */

import { ListView } from 'antd-mobile';

// const data = [
//     {
//         img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
//         title: 'Meet hotel',
//         des: '不是所有的兼职汪都需要风吹日晒',
//     },
//     {
//         img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
//         title: 'McDonald\'s invites you',
//         des: '不是所有的兼职汪都需要风吹日晒',
//     },
//     {
//         img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
//         title: 'Eat the week',
//         des: '不是所有的兼职汪都需要风吹日晒',
//     },
// ];

const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
}

class detailist extends React.Component {
    constructor(props) {
        console.log("datailist.props", props)
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            isLoading: true,
            dataList: []
        };
    }

    async UNSAFE_componentWillMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);

        // simulate initial Ajax
        // setTimeout(() => {
        //     this.rData = genData();
        //     this.setState({
        //         dataSource: this.state.dataSource.cloneWithRows(this.rData),
        //         isLoading: false,
        //     });
        // }, 600);
        const { data: datalist } = await request.get('/good/list', {
            params: {
                page: 1,
                pagesize: 40,
                colName: "kuaishoucai"
            }
        })
        // console.log(datalist.data[0].photoImg);
        console.log(datalist, "datalist");
        if (datalist.flag) {
            datalist.data.forEach((item) => {
                // item.photoImg = `http://10.3.140.198:2005/duitang_img/${item.photoImg}`
            })
            datalist.data.forEach((item) => {
                // item.sender.avatar = `http://10.3.140.198:2005/duitang_img/${item.sender.avatar}`
            })
            this.setState({
                // dataSource: this.state.dataSource.cloneWithRows(datalist.data)
                dataSource: this.state.dataSource.cloneWithRows(datalist.data)
            });
        }
    }

    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    // componentWillReceiveProps(nextProps) {
    //   if (nextProps.dataSource !== this.props.dataSource) {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
    //     });
    //   }
    // }

    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = { ...this.rData, ...genData(++pageIndex) };
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    }
    // detailPages = (_id) => {
    //     console.log(this.props);
    //     this.props.history.push({
    //         pathname: '/detailpages/' + _id,
    //         // search: '?id='+id,

    //     })
    // }
    render() {
        // const separator = (sectionID, rowID) => (
        //     <div
        //         key={`${sectionID}-${rowID}`}
        //         style={{
        //             backgroundColor: '#F5F5F9',
        //             height: 8,
        //             borderTop: '1px solid #ECECED',
        //             borderBottom: '1px solid #ECECED',
        //         }}
        //     />
        // );
        // let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            console.log('rowData', rowData);
            // if (index < 0) {
            //     index = data.length - 1;
            // }
            // const obj = data[index--];
            return (

                <div key={rowID} style={{ padding: '0 15px' }}>
                    <div
                        style={{
                            lineHeight: '50px',
                            color: '#888',
                            fontSize: 18,
                            borderBottom: '1px solid #F6F6F6',
                        }}
                    > {
                            // obj.title
                        }
                    </div>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                        <img style={{ weight: '112px', height: '112px', marginRight: '15px', borderRadius: "15px" }} src={rowData.缩略图 || rowData.image} alt="" />
                        <div className="describes" style={{ lineHeight: 1, flex: 1 }}>
                            <div style={{ marginBottom: '8px', fontWeight: 'bold', fontSize: "17px", flex: 1 }}>{rowData.name}</div>
                            <div style={{ flex: 1 }}><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></div>
                            <div style={{ flex: 1 }} className="amount">
                                <span style={{ fontSize: '14px', color: '#949494', lineHeight: "14px" }}>
                                    <HeartOutlined style={{ color: '#949494' }} /> {parseInt(Math.random() * 1000)}
                                    &nbsp;<EyeOutlined style={{ color: '#949494' }} /> {rowData.love}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderHeader={() => <span>快手菜做法TOP10</span>}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                // renderSeparator={separator}
                className="am-list"
                pageSize={4}
                useBodyScroll
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }
}

export default detailist