import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import style from './index.scss'
import Todo from './todo'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Todo />
      </div>
      
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
