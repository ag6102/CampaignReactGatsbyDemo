import PropTypes from "prop-types"
import React from "react"
import "./recentWorks.css"
import SectionHeader from "./sectionHeader"
import Button from "./button"
import Image from "./image"

const RecentWorks = ({ recentWorks }) => (
    <div className="recent-work-container" data-aos="fade-down">
        <div className="work-header">
            <div className="recent-subheading subheading">recent work</div>
            <div className="work-right-header">
                <SectionHeader headerText={recentWorks.backgroundText}></SectionHeader>
            </div>
        </div>
        <div className="recent-works">
            {recentWorks.recentWork.map((item, key) =>
                <div className="work">
                    <Image icon={item.icon} label={item.label}></Image>
                    <div className="overlay-con">
                        <div style={{ width: `100%` }}>
                            <div className="project-heading">Project</div>
                            <div className="project-name">Clients Name</div>
                            <div className="project-button">SEE CASE STUDY</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <div style={{ fontFamily: `Proxima-Nova-Bold`, textAlign: `center` }}>
            <Button buttonText="SEE ALL WORK"></Button>
        </div>
    </div>
)

RecentWorks.propTypes = {
    recentWorks: PropTypes.object
}

RecentWorks.defaultProps = {
    headerText: ``,
}

export default RecentWorks
