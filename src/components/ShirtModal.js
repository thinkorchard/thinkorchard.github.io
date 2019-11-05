import React from "react"
import Img from "gatsby-image"
import RedLayout from "./layout/RedLayout"
import Close from "../images/close.png"

const ShirtModal = ({ lang, shirt, visible, handleClosePress }) => {
  const visibleClass = visible ? "modal--visible" : "modal--hidden"
  return (
    <div className={`modal ${visibleClass}`}>
      <RedLayout wrapperClass="modal__inner">
        <div className="modal__image">
          <Img fixed={shirt.frontmatter.image.childImageSharp.fixed} />
        </div>
        <div className="modal__title">
          <h1 className="modal__title--title">
            {lang === "en"
              ? shirt.frontmatter.title_en
              : shirt.frontmatter.title_cy}
          </h1>
          <h2 className="modal__title--subtitle">
            {lang === "en"
              ? shirt.frontmatter.subtitle_en
              : shirt.frontmatter.subtitle_cy}
          </h2>
        </div>
        <p className="modal__copy">
          {lang === "en"
            ? shirt.frontmatter.desc_en
            : shirt.frontmatter.desc_cy}
        </p>
        <button className="modal__close" onClick={handleClosePress}>
          <img src={Close} alt="Close" />
          <p>{lang === "en" ? "Close" : "Close CY"}</p>
        </button>
      </RedLayout>
    </div>
  )
}

export default ShirtModal
