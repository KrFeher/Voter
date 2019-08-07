import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'No response just yet'
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:3001/test')
    .then(({data}) => {
      this.setState({message: data})
    })
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    )
  }
}

export default App;
