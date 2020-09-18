import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";

import "./MenuSidebar.scss";

const MenuSidebar = ({ collapse }) => {
  const { Sider } = Layout;
  return (
    <Sider className="admin-sider" collapsed={collapse}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={"/admin"}>
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/admin"}>
            <span className="nav-text">Blog</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default MenuSidebar;
