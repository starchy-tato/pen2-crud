import React from 'react'
import Body from "./Body";

const Main = ( props ) => {
  return(
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h1 className="text-3xl text-gray-700 font-bold mb-5">
        Pens are great!
      </h1>
      <Body />
    </div>
  )
}

export default Main
