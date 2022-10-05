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
      <button>Submit</button>
    </form>
  )
}

export default NewPen
