import React, { useContext } from "react"
import { Link, graphql } from "gatsby"
import { LangContext } from "../components/lang/LangContext"
import WhiteLayout from "../components/layout/WhiteLayout"

import "../styles/shirtlist.less"

export default ({ data }) => {
  const { lang, setLang } = useContext(LangContext)

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
            ? node.frontmatter.titleEnglish
            : node.frontmatter.titleCymraeg}
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
            titleEnglish
            titleCymraeg
          }
        }
      }
    }
  }
`
