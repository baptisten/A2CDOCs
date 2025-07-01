import * as React from "react";

import Layout from "../../components/Layout";
import DocHiddenDocumentsRoll from "../../components/DocHiddenDocumentsRoll";

export default class DocHiddenDocumentsIndexPage extends React.Component {
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
            Documents masqués
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <DocHiddenDocumentsRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
