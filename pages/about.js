import React from "react";
import Layout from "../components/Layout/Layout";
import GitHub from "../components/GitHub/GitHub";

const about = () => {
  return (
    <div>
      <Layout title="About">
        <GitHub />
      </Layout>
    </div>
  );
};

export default about;
