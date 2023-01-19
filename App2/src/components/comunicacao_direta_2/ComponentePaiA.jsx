import React from "react"

import ComponenteFilhoA from "./componenteFilhoA"

export default (props) => {
  return(
    <div>
      <p>Pai</p>
      <componenteFilhoA nome="joao" />
    </div>
  )
}
