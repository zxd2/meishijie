import React, { useCallback, useEffect, useState } from 'react';
import "./index.scss"
import request from '../../utils/request'
import { NavBar } from 'antd-mobile';

const Detail = () => {
    return (
        <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
            >NavBar</NavBar>

        </div>
    )
}
export default Detail