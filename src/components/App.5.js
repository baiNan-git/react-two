import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {
          brand: '康师傅',
          data: ['老坛酸菜', '老坛酸菜', '老坛酸菜' ,'老坛酸菜']
        },
        {
          brand: '统一',
          data: ['葱爆牛肉', '葱爆牛肉', '葱爆牛肉']
        }
      ]
    }
  }

  render () {
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
            return (
              <li key = { index }>
                { item.brand }
                <ul>
                  {
                    item.data.map((ite, ind) => {
                      return (
                        <li key = {ind}>
                          { ite }
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default App;