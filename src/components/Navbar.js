import React, { useEffect, useState } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import cryptoIcon from '../images/cryptocurrency.png';
import MenuItem from 'antd/es/menu/MenuItem';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={cryptoIcon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoVerse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <MenuItem icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </MenuItem>
          <MenuItem icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </MenuItem>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
