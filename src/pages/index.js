import React, { useContext } from "react"
import { Link } from "gatsby"

import { LangContext } from "../components/common/LangContext"

import Badge from "../images/badge.png"
import Stripes from "../images/stripes.png"
import "../styles/landing.less"

export default () => {
  const { lang, setLang } = useContext(LangContext)
  const handleCyPress = () => setLang("cy")
  const handleEnPress = () => setLang("en")

  return (
    <div className="landing">
      <img src={Badge} alt="" />
      <h1 className="title">
        <span className="title--smaller">The Art of the</span>
        <br />
        <span className="title--larger">Wales Shirt</span>
      </h1>
      <div className="buttons">
        <div className="buttons--lang">
          <button className="button" onClick={handleCyPress}>
            Cymraeg
          </button>
          <button className="button" onClick={handleEnPress}>
            English
          </button>
        </div>
        <div className="buttons--enter">
          <Link to="/" className="button">
            {lang === "en" ? "Enter" : "Enter CY"}
          </Link>
        </div>
      </div>
      <span>{lang}</span>
      <div className="stripes">
        <img src={Stripes} alt="" />
      </div>
    </div>
  )
}
