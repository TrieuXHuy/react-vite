import { Link, NavLink } from 'react-router-dom';
import { HomeOutlined, BookOutlined, UserAddOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

const items = [
    {
        label: <Link to="/">Home</Link>,
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: <Link to="/users">Users</Link>,
        key: 'users',
        icon: <UserAddOutlined />,
    },
    {
        label: <Link to="/books">Books</Link>,
        key: 'books',
        icon: <BookOutlined />,
    },
    {
        label: 'Cài đặt',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            { label: (<Link to="/login">Đăng nhập</Link>), key: 'setting:1' },
            { label: 'Đăng xuất', key: 'setting:2' },
        ],
    },
];

const Header = () => {

    const [current, setCurrent] = useState('mail');
    const onClick = e => {
        setCurrent(e.key);
    };
    return <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items} />;
}

export default Header;