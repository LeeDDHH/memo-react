import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>Hello world</div>
    )
  }
}

const reactRoot = document.getElementById('root');

ReactDOM.render(<App />, reactRoot);
