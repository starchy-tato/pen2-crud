import React from 'react'
import AllPens from "./AllPens";
import NewPen from "./NewItem";

class Body extends React.Component {
  // helps creation of objects, here we set the state for this component
  constructor(props) {
    super(props);
    this.state = {
      pens: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleAddNewPen = this.handleAddNewPen.bind(this)
    this.handleDeletePen = this.handleDeletePen.bind(this)
    this.deletePen = this.deletePen.bind(this)
    this.handlePenUpdate = this.handlePenUpdate.bind(this)
    this.updatePen = this.updatePen.bind(this)

  }

  // called after component is rendered in the DOM, during the mounting phase of react-life cycle
  componentDidMount() {
    fetch('/api/v1/pens.json')
      .then((res) => {return res.json()
      })
      .then((data) => {this.setState({ pens: data })
      })
  }

  handleFormSubmit(name, description){
    // console.log(name, description)
    let body = JSON.stringify({ pen: { name: name, description: description } })

    // POST request to backend with new pen data
    fetch('http://localhost:3000/api/v1/pens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
      .then((res) => {return res.json()
      })
      .then((pen) => {this.handleAddNewPen(pen)
      })
  }

  handleAddNewPen(pen){
    this.setState({
      pen: this.state.pens.concat(pen)
    })
  }

  handleDeletePen(id){
    fetch(`http://localhost:3000/api/v1/pens/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {this.deletePen
    })
  }

  deletePen(id){
    const newPens = this.state.pens.filter((pen) => pen.id !== id)
    this.setState({
      pens: newPens
    })
  }

  handlePenUpdate(pen){
    fetch(`http://localhost:3000/api/v1/pens/${pen.id}`,
      {
        method: 'PUT',
        body: JSON.stringify({pen: pen}),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      .then((res) => {this.updatePen(pen)
      })
  }

  updatePen(pen){
    const newPens = this.state.pens.filter((item) => item.id !== pen.id)
    newPens.push(pen)
    this.setState({
      pens: newPens
    })
  }

  render(){
    return(
      <div>
        <NewPen handleFormSubmit={this.handleFormSubmit} />
        <AllPens
          pens={this.state.pens}
          handleDeletePen={this.handleDeletePen}
          handlePenUpdate={this.handlePenUpdate}
        />
      </div>
    )
  }
}

export default Body
