import React from 'react'

class Pen extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      editable: false
    }
    this.handlePenEdit = this.handlePenEdit.bind(this)
  }

  // state in this handler acts like a toggle
  handlePenEdit(){
    if(this.state.editable){
      let penName = this.name.value
      let penDescription = this.description.value
      let penId = this.props.pen.id
      let pen = {id: penId, name: penName, description: penDescription}
      this.props.handlePenUpdate(pen)
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){

    // conditionals based on editable state that determines if pen input fields should display
    let penName = this.state.editable ?
      <input type='text'
             ref={input => this.name = input}
             defaultValue={this.props.pen.name}
      />
      :
      <h3>{this.props.pen.name}</h3>

    let penDescription = this.state.editable ?
      <input type='text'
             ref={input => this.description = input}
             defaultValue={this.props.pen.description}
      />
      :
      <p>{this.props.pen.description}</p>

    return(
      <div>
        <h1>{penName}</h1>
        <p>{penDescription}</p>
        <button
          onClick={() => this.handlePenEdit()}
        >
          {this.state.editable ? 'Submit' : 'Edit'}
        </button>
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
