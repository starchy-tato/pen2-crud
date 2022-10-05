import React from 'react'
import AllPens from "./AllPens";

class Body extends React.Component {
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

  render(){
    return(
      <div>
        <AllPens pens={this.state.pens} />
      </div>
    )
  }
}

export default Body
