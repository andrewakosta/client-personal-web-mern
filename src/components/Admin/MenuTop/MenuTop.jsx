import React from "react";
import { Button } from "antd";
import {
  MenuFoldOutlined,
  CloseOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import "./MenuTop.scss";
import logo from "../../../assets/img/logo.png";
const MenuTop = ({ collapse, setCollapse }) => {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left-logo" src={logo} alt="Logo" />
        <Button type="link" onClick={() => setCollapse(!collapse)}>
          {collapse ? <MenuFoldOutlined /> : <CloseOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link">
          <LogoutOutlined />
        </Button>
      </div>
    </div>
  );
};

export default MenuTop;
