import React from 'react'

const NewPen = (props) => {
  let formFields = {}

  return(
    // ref attribute tag to access certain DOM element - these grab value of inputs
    <form onSubmit={(event) => {
      event.preventDefault();
      props.handleFormSubmit(
        formFields.name.value,
        formFields.description.value
      );
      event.target.reset()
    }}>
      <input ref={input => formFields.name = input} placeholder='Enter item name'/>
      <input ref={input => formFields.description = input} placeholder='Enter a description' />
      <button className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Submit
      </button>
    </form>
  )
}

export default NewPen
