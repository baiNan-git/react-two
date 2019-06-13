// react 组件的定义 1、es6中的class形式 2、函数式形式

import React from 'react'; // 定义一个React组件必不可少的，不管是以何种形式定义
// class类语法的组件的定义
// 通过render钩子函数可以渲染出组件的结构
class App extends React.Component {
  render () { // 负责渲染相应的页面 ---- return一段HTML代码，用（）包裹HTML代码
    return (
      <div id="root">hello react</div>  
    )
  }
}

//一定不要忘了暴露组件
export default App;