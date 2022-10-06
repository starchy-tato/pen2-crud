import React from 'react'
import Pen from "./Pen";

const AllPens = ( props ) => {

  let pens = props.pens.map((pen) => {
    return(
      <div key={pen.id}>
       <Pen
         pen={pen}
         handleDeletePen={props.handleDeletePen}
       />
      </div>
    )
  })

  return(
    <div>
      {pens}
    </div>
  )
}

export default AllPens
