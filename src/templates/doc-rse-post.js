import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const DocRsePostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  qr,
  file
}) => {
  const PostContent = contentComponent || Content;
  let qrCode;

  if (qr){
    qrCode = <div className="qr-code-img">
      <a href={qr} target="_blank">
        <img src={qr} alt='QR code' />
      </a>
      </div>
  }

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
                {qrCode}
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

DocRsePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const DocRsePost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <DocRsePostTemplate
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
      <div className="container content-bottom">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <a href={post.frontmatter.file} className="button" target="_blank">Voir document →</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

DocRsePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default DocRsePost;

export const pageQuery = graphql`
  query DocRsePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        qr
        file
      }
    }
  }
`;
