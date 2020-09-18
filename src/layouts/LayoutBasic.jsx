import React from "react";
import { Layout } from "antd";
import { Route } from "react-router-dom";

import "./LayoutBasic.scss";
const LayoutBasic = ({ routes }) => {
  const { Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Menu ....</h2>
      <Layout>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>Andy Acosta</Footer>
      </Layout>
    </Layout>
  );
};
function LoadRoutes({ routes }) {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
}
export default LayoutBasic;
