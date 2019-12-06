import React, { Component } from 'react'

import Table from './components/Table'
import Form from './components/Form'

class App extends Component {
  removeCharacter = index => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  state = {
    characters: [],
  }

  handleSubmit = character => {
    this.setState({
      characters: [...this.state.characters, character],
    })
  }

  render() {
    const { characters } = this.state
    return (
      <div className='App'>
        <h1>Hello, React!</h1>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
