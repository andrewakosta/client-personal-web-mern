import React from "react";
import { Button } from "antd";

import "./MenuTop.scss";
import logo from "../../../assets/img/logo.png";
const MenuTop = () => {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left-logo" src={logo} alt="Logo" />
        <Button type="link" onClick={() => console.log("Click")}>
          Menu
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link">Salir</Button>
      </div>
    </div>
  );
};

export default MenuTop;
