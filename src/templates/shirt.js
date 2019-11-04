import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const shirt = data.markdownRemark
  console.log(shirt)

  return <div className="shirt"></div>
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title_en
        title_cy
        subtitle_en
        subtitle_cy
        desc_en
        desc_cy
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
`
