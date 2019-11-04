import React from "react"
import Stripes from "../../images/stripes.png"
import "../../styles/layout.less"

const RedLayout = ({ children, wrapperClass }) => {
  const wrapperClassName = wrapperClass ? wrapperClass : ""
  return (
    <div className="layout layout--red">
      <div className={`layout__inner ${wrapperClassName}`}>{children}</div>
      <div className="footer footer--stripes">
        <img src={Stripes} alt="" />
      </div>
    </div>
  )
}
export default RedLayout
