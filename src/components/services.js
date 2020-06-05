import PropTypes from "prop-types"
import React from "react"
import "./services.css"
import SectionHeader from "./sectionHeader"
import Service from "./service"

const Services = ({ servicesData }) => (
    <div className="services-container" data-aos="fade-down">
        <div className="service-header">
            <SectionHeader headerText={servicesData.title}></SectionHeader>
        </div>
        <div className="services">
            <div className="subheading">{servicesData.title}</div>
            <div className="services-group">
                {servicesData.services.map((item, key) =>
                    <Service serviceData={item}></Service>
                )}
            </div>
        </div>
    </div>
)

Services.propTypes = {
    servicesData: PropTypes.object
}

Services.defaultProps = {
    servicesData: ``,
}


export default Services
