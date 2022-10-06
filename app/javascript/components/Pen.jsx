import React from 'react'

class Pen extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      editable: false
    }
  }

  render(){
    return(
      <div>
        <h1>{this.props.pen.name}</h1>
        <p>{this.props.pen.description}</p>
        <button>{this.state.editable ? 'Submit' : 'Edit'}</button>
        <button
          onClick={() => this.props.handleDeletePen(this.props.pen.id)}
        >
          Delete
        </button>
      </div>
    )
  }
}


export default Pen
