import * as React from "react";

import Layout from "../../components/Layout";
import DocType1Roll from "../../components/DocType1Roll";

export default class DocType1IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #00f, -0.5rem 0 0 #00f",
              backgroundColor: "#00f",
              color: "white",
              padding: "1rem",
            }}
          >
            Documents type 1
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <DocType1Roll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
