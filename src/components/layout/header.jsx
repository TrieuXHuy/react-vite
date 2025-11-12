import { Link, NavLink } from 'react-router-dom';
import { HomeOutlined, BookOutlined, UserAddOutlined } from '@ant-design/icons';
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