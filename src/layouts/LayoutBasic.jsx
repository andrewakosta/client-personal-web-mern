import React from "react";
import { Layout } from "antd";
const LayoutBasic = ({ routes }) => {
  return (
    <Layout>
      <h2>Menu Sidbar Public</h2>
      <div>{JSON.stringify(routes)}</div>
      <h5>Footer</h5>
    </Layout>
  );
};

export default LayoutBasic;
