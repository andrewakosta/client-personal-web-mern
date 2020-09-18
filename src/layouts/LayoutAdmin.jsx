import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import MenuSidebar from "../components/Admin/MenuSidebar";
import MenuTop from "../components/Admin/MenuTop";
import "./LayoutAdmin.scss";

const LayoutAdmin = ({ routes }) => {
  const { Header, Content, Footer } = Layout;

  //State to menu
  const [collapse, setCollapse] = useState(false);
  return (
    <Layout>
      <MenuSidebar collapse={collapse} />
      <Layout
        className="layout-admin"
        style={{ marginLeft: collapse ? "80px" : "200px" }}
      >
        <Header className="layout-admin__header">
          <MenuTop collapse={collapse} setCollapse={setCollapse} />
        </Header>
        <Content className="layout-admin__content">
          <LoadRouters routes={routes} />
        </Content>
        <Footer className="layout-admin__footer">- Andres Acosta</Footer>
      </Layout>
    </Layout>
  );
};

function LoadRouters({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
export default LayoutAdmin;
