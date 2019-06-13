import React, { Component } from 'react'; 

class App extends Component { //继承时不用写React
  constructor (props) {
    super(props);
    this.state = {
      list: ['a', 'b', 'c', 'd', 'e']
    }
  }

  render () {
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
          return (<li key = { index }>
            { item }
          </li>)
          })
        }
      </ul>
    )
  }
}

export default App;