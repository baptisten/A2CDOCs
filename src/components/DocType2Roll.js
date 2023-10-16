import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class DocType2RollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const safeClassNames = [];
    safeClassNames['MCi'] = 'mci'
    safeClassNames['MC2i'] = 'mc2i'
    safeClassNames['Prédalles'] = 'predalles'
    safeClassNames['Dalle BB'] = 'dallebb'
    safeClassNames['Prémontés'] = 'premontes'
    safeClassNames['Eléments linéaires'] = 'elementslineaires'

    return (
      <div className="columns is-multiline produits-filtered">
        {posts &&
          posts.map(({ node: post }) => (
            <div className={`is-parent column is-6 produit-item ` + safeClassNames[post.frontmatter.category]} key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification`}
                data-cat={post.frontmatter.category}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          width:
                            post.frontmatter.featuredimage.childImageSharp
                              .gatsbyImageData.width,
                          height:
                            post.frontmatter.featuredimage.childImageSharp
                              .gatsbyImageData.height,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="category">{post.frontmatter.category}</span>
                  </p>
                </header>
                <p className="post-excerpt">
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Plus de details →
                  </Link>
                  <a className="button" href={post.frontmatter.file} target="_blank">
                    Voir document →
                  </a>

                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

DocType2Roll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function DocType2Roll() {
  return (
    <StaticQuery
      query={graphql`
        query DocType2RollQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "doc-type-2-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  file
                  category
                  templateKey
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <DocType2RollTemplate data={data} count={count} />}
    />
  );
}
