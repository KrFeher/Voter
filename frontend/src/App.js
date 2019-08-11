import React, { Component } from 'react';
import axios from 'axios';
import { Container, Segment, Menu, Icon } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      serverOnline: false,
      activeItem: '1',
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:3001/test')
      .then(({ data }) => {
        this.setState({ serverOnline: true })
      })
      .catch((error) => {
        this.setState({ serverOnline: false })
    })
  }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu size='huge' fixed="top" borderless>
          <Menu.Item name='Vote' active={activeItem === '1'} onClick={this.handleItemClick} />
          <Menu.Item name='Create new vote' active={activeItem === '2'} onClick={this.handleItemClick} />
          <Menu.Item position='right' name='Login' active={activeItem === '3'} onClick={this.handleItemClick} />
        </Menu>
        <Menu size='tiny' fixed="bottom" borderless>
          <Menu.Item position='right'>
            <span style={{ paddingRight: '5px' }}>Server connection:</span>
            <Icon name='power off' color={this.state.serverOnline ? 'green' : 'red'} />
          </Menu.Item>
        </Menu>
      </Container>
    )
  }
}

export default App;
