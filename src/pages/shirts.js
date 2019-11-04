import React, { useContext } from "react"
import { graphql } from "gatsby"
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
      <h1>Shirts</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          {lang === "en"
            ? node.frontmatter.title_en
            : node.frontmatter.title_cy}
          <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
        </div>
      ))}
    </WhiteLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title_en
            title_cy
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
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
