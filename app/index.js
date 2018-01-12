// Your code here
import React from 'react'
import ReactDOM from 'react-dom'

class Picker extends React.Component {
  render () {
    return (
      <div id='container'>
        <div id='navbar'>
          <div>Currently selected: </div>
          <div className='red'>red</div>
        </div>
        <div id='colors-list'>
          {/* colors go here */}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
)
