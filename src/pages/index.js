import React from "react"
import Badge from "../images/badge.png"
import Stripes from "../images/stripes.png"
import "../styles/landing.less"

export default () => (
  <div class="landing">
    <img src={Badge} alt="" />
    <h1 class="title">
      <span class="title--smaller">The Art of the</span>
      <br />
      <span class="title--larger">Wales Shirt</span>
    </h1>
    <div class="buttons">
      <button class="button">Cymraeg</button>
      <button class="button">English</button>
    </div>
    <div class="stripes">
      <img src={Stripes} alt="" />
    </div>
  </div>
)
