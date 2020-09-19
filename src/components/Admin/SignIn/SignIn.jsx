import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";

import logo from "../../../assets/img/logo.png";
import "./SignIn.scss";
const SignIn = () => {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={logo} alt="logo" />
        </h1>

        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Log In</span>} key="1">
              Componet Log In
            </TabPane>
            <TabPane tab={<span>New User</span>} key="2">
              Component New User
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
};

export default SignIn;
