import React from "react"

const LangContext = React.createContext()

const LangProvider = props => {
  let [lang, setLang] = React.useState("en")
  let value = { lang, setLang }

  return (
    <LangContext.Provider value={value}>{props.children}</LangContext.Provider>
  )
}

const LangConsumer = LangContext.Consumer

export { LangContext, LangProvider, LangConsumer }
