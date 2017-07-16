import { observer } from 'mobx-react'
import { Menu, Icon } from 'antd'

const SidebarList = observer(({ key, text }) => {
    <Menu.Item key={key}>
        <Icon type='user' />
        <span className='nav-text'>{text}</span>
    </Menu.Item>
})

export default new SidebarList()