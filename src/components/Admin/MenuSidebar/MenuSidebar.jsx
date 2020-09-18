import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import "./MenuSidebar.scss";

const MenuSidebar = () => {
  const { Sider } = Layout;
  return (
    <Sider className="admin-sider">
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={"/admin"}>
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default MenuSidebar;
