import React from 'react'
import PropTypes from 'prop-types'

const Card = props => (
  <li>
    {props.text_orig} {props.text_localized} {props.locale}
  </li>
)

Card.defaultProps = {
  text_orig: 'original text',
  text_localized: 'localized text',
  locale: 'locale'
}

Card.propTypes = {
  text_orig: PropTypes.string,
  text_localized: PropTypes.string,
  text_orig: PropTypes.string
}

export default Card;
