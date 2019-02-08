import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'World'
}

Hello.propTypes = {
  name: PropTypes.string
}

const Card = () => (
  <div>
    <h1>Hello, Card!</h1>
  </div>
)

const Main = () => (
  <div>
    <Hello name='Kitty' />
    <Card />
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Main />,
    document.body.appendChild(document.createElement('div')),
  )
})
