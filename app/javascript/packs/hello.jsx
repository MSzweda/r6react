import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Cards from '../components/cards'

class App extends React.Component {
  render(){
    return (
      <div>
        <Cards />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
