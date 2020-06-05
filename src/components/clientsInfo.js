import PropTypes from "prop-types"
import React from "react"
import "./clientsInfo.css"
import Button from "./button"
import Image from "./image"

const ClientsInfo = ({ clients }) => (
    <div className="cients-container" data-aos="fade-down">
        <div className="clients-info">
            <div className="client-left">
                <div className="clients-subheading subheading">{clients.title}</div>
                <div className="clients-desc">
                    <div><div>Lorem ipsum dolor sit amet concecitur dacit me ne ultem ot te ne oprem ili me kako repas i will i on li anacitur et melum eciam et alis demini, con cilium de pau. Lorem ipsum dolor sit amet concecitur dacit me ne ultem ot te ne oprem ili me kako repas i will i on li anacitur et melum eciam et alis demini, con cilium de pau.</div><div>We build campaigns in partnership with our clients.</div></div>
                    <div style={{ fontFamily: `Proxima-Nova-Bold`, marginTop: `25px` }}>
                        <Button buttonText="GET IN TOUCH"></Button>
                    </div>
                </div>
            </div>
            <div className="clients">
                {clients.clients.map((item, key) =>
                    <div className="client">
                        <Image icon={item.icon} label={item.label}></Image>
                        <div className="overlay-con"></div>
                    </div>
                )}
            </div>
        </div>
    </div>
)

ClientsInfo.propTypes = {
    clients: PropTypes.object
}

ClientsInfo.defaultProps = {
    clients: ``,
}

export default ClientsInfo
