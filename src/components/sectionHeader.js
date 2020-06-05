import PropTypes from "prop-types"
import React from "react"
import "./sectionHeader.css"

const SectionHeader = ({ headerText }) => (
    <div className="section-header">
        {headerText}
    </div>
)

SectionHeader.propTypes = {
    headerText: PropTypes.string
}

SectionHeader.defaultProps = {
    headerText: ``,
}


export default SectionHeader
