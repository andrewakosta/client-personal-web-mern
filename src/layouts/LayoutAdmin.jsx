import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import MenuTop from "../components/Admin/MenuTop";
import "./LayoutAdmin.scss";

const LayoutAdmin = ({ routes }) => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Layout className="layout-admin">
        <Header className="layout-admin__header">
          <MenuTop />
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
