import React from "react"

import LangWrapper from "./src/components/lang/LangWrapper"
export const wrapRootElement = ({ element }) => (
  <LangWrapper>{element}</LangWrapper>
)
