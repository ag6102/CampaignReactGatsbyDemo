import PropTypes from "prop-types"
import React from "react"
import "./button.css"

const Button = ({ buttonText }) => (
    <button className="button-style" >{buttonText}</button>
)

Button.propTypes = {
    buttonText: PropTypes.string
}

Button.defaultProps = {
    buttonText: ``,
}


export default Button
