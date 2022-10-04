import React from 'react'

class AllPens extends React.Component {
  // helps creation of objects, here we set the state for this component
  constructor(props) {
    super(props);
    this.state = {
      pens: []
    };
  }

  // called after component is rendered in the DOM, during the mounting phase of react-life cycle
  componentDidMount() {
    fetch('/api/v1/pens.json')
      .then((res) => {return res.json()})
      .then((data) => {this.setState({ pens: data })});
  }

  render() {
    let pens = this.state.pens.map((pen) => {
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
}

export default AllPens
