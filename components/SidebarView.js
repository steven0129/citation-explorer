import { Component } from 'react'
import { observer } from 'mobx-react'
import { Layout } from 'antd'
import SidebarList from './SidebarList.js'
import SubpageStore from '../stores/SubpageStore.js'
const { Sider, Menu } = Layout

class SidebarView extends Component {
    render() {
        return <Sider breakpoint='lg' collapsedWidth='0'>
            <div className='logo' />
            <Menu theme='dark' mode='inline'>
                {
                    SubpageStore.article.title.map((value, index) => {
                        return <SidebarList key={index} text={value}></SidebarList>
                    })
                }
            </Menu>
        </Sider>
    }
}

export default SidebarView