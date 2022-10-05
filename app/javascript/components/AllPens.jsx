import React from 'react'

const AllPens = ( props ) => {

  let pens = props.pens.map((pen) => {
    return(
      <div key={pen.id}>
        <h1>{pen.name}</h1>
        <p>{pen.description}</p>
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
