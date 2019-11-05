import React, { useContext } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { LangContext } from "../components/lang/LangContext"
import WhiteLayout from "../components/layout/WhiteLayout"

import "../styles/shirtlist.less"

export default ({ data }) => {
  const { lang } = useContext(LangContext)

  return (
    <WhiteLayout
      wrapperClass="shirts"
      backLink="/"
      backText={lang === "en" ? "Back to start" : "Back to start CY"}
    >
      <h1>Select a shirt</h1>
      <div className="shirtlistcontainer">
        <div className="shirtlist">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="shirtlist__item" key={node.id}>
              <Link
                className="shirtlist__link"
                to={`/shirts/${node.frontmatter.number}`}
              >
                <Img
                  className="shirtlist__img"
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </WhiteLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___number], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            number
            title_en
            title_cy
            image {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
