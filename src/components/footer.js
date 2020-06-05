import { Link } from "gatsby"
import React from "react"
import "./footer.css"
import Image from "./image"

const Footer = ({ }) => (
    <footer className="footer-container" >
        <div className="footer-left">
            <div className="footer-logo">
                <Image icon="Agency X logo white.svg" label="Agency X Logo"></Image>
            </div>
            <div className="footer-text">
                Campaigns.<br />
                Evolved.
      </div>
            <div className="footer-tabs">
                <div>HOME</div>
                <div>WORK</div>
                <div>SERVICES</div>
                <div>CONTACT</div>
            </div>
            <div className="copyright-info">
                &copy; 2020 Agency X. All rights reserved.<br />
                Promozoo Limited, registered in Ireland, Reg. No. 472825 / Media House, 24 South William Street, Dublin 2, Ireland
      </div>
        </div>
        <div className="footer-right">
            <div className="contact-info">
                <div className="contact-header">CONTACT</div>
                <div><Image icon="icon email.svg" label="Email"></Image><span>hello@agencyx.ie</span></div>
                <div><Image icon="icon mob.svg" label="Mobile"></Image><span>01 6706122</span></div>
                <div><Image icon="icon location.svg" label="Location"></Image><span className="location">Media House,<br /> 24 South William Street, Dublin 2, Ireland</span></div>
            </div>
            <div className="social-media-container">
                <div className="media-heading">FIND US ON</div>
                <div className="media-info">
                    <div><Image icon="fb icon.svg" label="Facebook"></Image></div>
                    <div><Image icon="linkedin icon.svg" label="LinkedIn"></Image></div>
                    <div><Image icon="twitter icon.svg" label="Twitter"></Image></div>
                    <div><Image icon="insta icon.svg" label="Instagram"></Image></div>
                </div>
                <div className="terms-policies-container">
                    <div>Privacy Policy</div>
                    <div>Terms &amp; Conditions</div>
                    <div>Cookies</div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
