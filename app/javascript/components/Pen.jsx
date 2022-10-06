import React from 'react'

class Pen extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      editable: false
    }
  }

  render(){

    let penName = this.state.editable ?
      <input type='text' ref={input => this.name = input} defaultValue={this.props.pen.name} />
      :
      <h3>{this.props.pen.name}</h3>

    let penDescription = this.state.editable ?
      <input type='text' ref={input => this.description = input} defaultValue={this.props.pen.description} />
      :
      <p>{this.props.pen.description}</p>
    
    return(
      <div>
        <h1>{penName}</h1>
        <p>{penDescription}</p>
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
