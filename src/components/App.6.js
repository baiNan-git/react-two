import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      flag: false
    }
  }

  render () {
    if (this.state.flag) {
      return (
        <h3>真的时候</h3>
      )
    } else {
      return (
        <h3>假的时候</h3>
      )
    }
  }
}

export default App;