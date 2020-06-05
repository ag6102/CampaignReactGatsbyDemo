import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/AgencyXLogo.svg'
import Button from "./button"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header-container" >
    <div className="header-content">
      <div className="left-con">
        <div><img src={logo} alt="Agency X Logo"></img></div>
        <div className="heading-con">
          <div>Campaigns.</div>
          <div>Evolved.</div>
        </div>
        <div className="desc-con">
          <div className="desc1-con">
            Agency X is a strategic creative agency, helping brands gain competitive advantage by harnessing changes in consumer behaviour, technology, and business methods.
        </div>
          <div className="desc2-con">
            We are made for progressive marketers who want to stay ahead of the game.
        </div>
        </div>
        <div className="header-but-con">
          <Button buttonText="EXPLORE"></Button>
        </div>
      </div>
      <div className="right-con" data-aos="fade-down">
        <div className="ann-1"></div>
        <div className="ann-2"></div>
        <div className="ann-3"></div>
        <div className="ann-4"></div>
        <div className="ann-5"></div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
