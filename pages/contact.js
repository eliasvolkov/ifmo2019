import React from "react";
import Layout from "../components/Layout/Layout";

const contact = () => {
  return (
    <div>
      <Layout title="Contact">
        <p>
          You can contact with me by{" "}
          <a href="mailto:eliascerutti@gmail.com">eliascerutti@gmail.com</a>
        </p>
      </Layout>
      <style jsx>{`
        p {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default contact;
