import React, { useContext } from "react"
import { Link, graphql } from "gatsby"
import { LangContext } from "../components/common/LangContext"

import "../styles/shirtlist.less"

export default ({ data }) => {
  const { lang, setLang } = useContext(LangContext)

  return (
    <div class="shirts">
      <h1>Shirts</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h2>{node.frontmatter.title}</h2>
        </div>
      ))}
    </div>
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
            title
          }
        }
      }
    }
  }
`
