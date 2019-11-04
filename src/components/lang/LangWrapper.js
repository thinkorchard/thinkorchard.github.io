import React from "react"
import { LangProvider } from "./LangContext"

const LangWrapper = ({ children }) => <LangProvider>{children}</LangProvider>

export default LangWrapper
