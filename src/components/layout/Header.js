import React, { useContext } from "react"
import { LangContext } from "../lang/LangContext"
import BadgeSM from "../../images/badge-sm.png"
import "../../styles/header.less"

const EnglishTitle = () => (
  <>
    <span className="title--smaller">The Art of the</span>
    <br />
    <span className="title--larger">Wales Shirt</span>
  </>
)

const CymraegTitle = () => (
  <>
    <span className="title--smaller">Celf Crys</span>
    <br />
    <span className="title--larger">Cyrmu</span>
  </>
)

const Header = () => {
  const { lang } = useContext(LangContext)
  return (
    <header className="header">
      <img src={BadgeSM} alt="" className="header__badge" />
      <h1 className="header__title">
        {lang === "en" ? <EnglishTitle /> : <CymraegTitle />}
      </h1>
    </header>
  )
}

export { EnglishTitle, CymraegTitle }
export default Header
