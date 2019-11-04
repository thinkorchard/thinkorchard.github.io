import React from "react"
import { Link } from "gatsby"
import JD from "../../images/jd.png"
import Adidas from "../../images/adidas.png"
import Back from "../../images/back.png"
import "../../styles/layout.less"

const RedLayout = ({ children, wrapperClass, backLink, backText }) => {
  const wrapperClassName = wrapperClass ? wrapperClass : ""
  return (
    <div className="layout layout--white">
      <div className={`layout__inner ${wrapperClassName}`}>
        {children}
        <div className="footer footer--white">
          <div className="back">
            <Link to={backLink}>
              <img src={Back} alt="" />
              <span className="back__text">{backText}</span>
            </Link>
          </div>
          <div className="logos">
            <img src={JD} alt="JD Sport" />
            <img src={Adidas} alt="Adidas" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default RedLayout
