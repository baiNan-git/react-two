import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      flag: true
    }
  }

  render () {
    return (
      <div>
        {
          this.state.flag ? <h3>z真</h3> : <h3>假</h3>
        }
      </div>
    )
  }
}

export default App;