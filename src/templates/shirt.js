import React, { Fragment, useContext, useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { LangContext } from "../components/lang/LangContext"
import WhiteLayout from "../components/layout/WhiteLayout"
import ShirtModal from "../components/ShirtModal"
import "../styles/shirt.less"

export default ({ data }) => {
  const shirt = data.markdownRemark
  const { lang } = useContext(LangContext)
  const [showModal, setShowModal] = useState(false)

  console.log(shirt)
  const handleModalOpen = () => setShowModal(true)
  const handleClosePress = () => setShowModal(false)

  return (
    <Fragment>
      <WhiteLayout
        wrapperClass="shirt"
        backLink="/shirts/"
        backText={
          lang === "en" ? "Back to all shirts" : "Back to all shirts CY"
        }
      >
        <Img
          className="shirt__img"
          fixed={shirt.frontmatter.image.childImageSharp.fixed}
        />
        <h2 className="shirt__title">
          {lang === "en"
            ? shirt.frontmatter.title_en
            : shirt.frontmatter.title_cy}
        </h2>
        <p className="shirt__subtitle">
          {lang === "en"
            ? shirt.frontmatter.subtitle_en
            : shirt.frontmatter.subtitle_cy}
        </p>
        <div className="shirt__button">
          <button className="button" onClick={handleModalOpen}>
            {lang === "en" ? "Click for Info" : "Click for Info CY"}
          </button>
        </div>
      </WhiteLayout>
      <ShirtModal
        lang={lang}
        visible={showModal}
        shirt={shirt}
        handleClosePress={handleClosePress}
      />
    </Fragment>
  )
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
            fixed(width: 800) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
