import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import cryptoIcon from '../images/cryptocurrency.png';
import MenuItem from 'antd/es/menu/MenuItem';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={cryptoIcon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoVerse</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
      <Menu theme="dark">
        <MenuItem icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </MenuItem>
        <MenuItem icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </MenuItem>
        <MenuItem icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
