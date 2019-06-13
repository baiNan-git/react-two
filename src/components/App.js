import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {
          brand: '康师傅',
          data: ['红烧牛肉面', '红烧牛肉面', '红烧牛肉面', '红烧牛肉面']
        },
        {
          brand: '今麦郎',
          data: ['香辣牛肉面', '香辣牛肉面', '香辣牛肉面']
        }
      ]
    }
  }

  render () {
    // console.log(this.state.list)
    let arr = [];
    let arr1 = [];
    this.state.list.map((item, index) => {
      console.log(item)
      arr.push(<li key = { index }>
        { item.brand }
        <ul>
          {
            item.data.map((ite, ind) => {
              return (
                <li key = { ind }>{ ite }</li>
              )
            })
          }
        </ul>
        </li>)
    })
    console.log(arr)
    return (
      <ul>
        { arr }
      </ul>
    )
  }
}

export default App;