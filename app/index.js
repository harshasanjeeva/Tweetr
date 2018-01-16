import React from 'react'
import ReactDOM from 'react-dom'
var createReactClass = require('create-react-class');
const Main = createReactClass({
  render () {
    return (
      <p>Hello World!</p>
    )
  }
})

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)