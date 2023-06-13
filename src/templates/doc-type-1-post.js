import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const DocType1PostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  qr
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div className="doc-content">
                <div className="qr-code-img">
                    <a href={qr} target="_blank">
                        <img src={qr} alt='QR code' />
                    </a>
                </div>
                <div className="doc-content-descr">
                    <PostContent content={content} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DocType1PostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const DocType1Post = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <DocType1PostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        qr={post.frontmatter.qr}
        helmet={
          <Helmet titleTemplate="%s | Document">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

DocType1Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default DocType1Post;

export const pageQuery = graphql`
  query DocType1PostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        qr
      }
    }
  }
`;
