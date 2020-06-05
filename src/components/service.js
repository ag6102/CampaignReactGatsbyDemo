import PropTypes from "prop-types"
import React from "react"
import "./service.css"
import Image from "./image"

const Service = ({ serviceData }) => (

    <div className="service-container">
        <div>
            <div className="image-holder">
                <Image icon={serviceData.icon} label={serviceData.label}></Image>
            </div>
            <div className="service-name">
                {serviceData.label}
            </div>
            <div className="service-text">
                {serviceData.desc}
            </div>
        </div>
        <div className="see-more">
            SEE MORE
        </div>
    </div>
)

Service.propTypes = {
    serviceData: PropTypes.object
}

Service.defaultProps = {
    serviceData: ``,
}


export default Service
