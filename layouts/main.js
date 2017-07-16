import React, { Component } from 'react'
import Head from 'next/head'
import { observer } from 'mobx-react'
import { Layout, Menu, Icon } from 'antd'
import SidebarView from '../components/SidebarView.js'
const { Header, Content, Footer, Sider } = Layout

@observer
class CustomLayout extends Component {
    render() {
        return <div>
            <Head>
                <title>文獻收集器</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
                <link rel='stylesheet' href='/static/main.css' />
            </Head>
            <Layout>
                <SidebarView />
                <Layout>
                    <Header style={{ background: '#fff', fontSize: '20px' }}>
                        文獻收集器
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>
    }
}



export default ({ children }) => (
    <CustomLayout children={children} />
)