import React from 'react'
import ReactDOM from 'react-dom'
import Memo from './Memo/Memo'

class App extends React.Component {
  render() {
    return (
      <div>
        <Memo />
      </div>
    )
  }
}

const reactRoot = document.getElementById('root');

ReactDOM.render(<App />, reactRoot);
