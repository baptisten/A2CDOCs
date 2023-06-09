import * as React from "react";

import Layout from "../../components/Layout";
import DocType3Roll from "../../components/DocType3Roll";

export default class DocType3IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #235da4, -0.5rem 0 0 #235da4",
              backgroundColor: "#235da4",
              color: "white",
              padding: "1rem",
            }}
          >
          Documents Qualité
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <DocType3Roll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
