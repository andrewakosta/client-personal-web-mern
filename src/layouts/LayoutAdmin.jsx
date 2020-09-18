import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutAdmin.scss";

const LayoutAdmin = ({ routes }) => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <h2>Menu sider</h2>
      <Layout>
        <Header>Header ...</Header>
        <Content>
          <LoadRouters routes={routes} />
        </Content>
        <Footer>- Andres Acosta</Footer>
      </Layout>
    </Layout>
  );
};

function LoadRouters({ routes }) {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
}
export default LayoutAdmin;
