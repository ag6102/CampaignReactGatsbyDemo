/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Introduction from "./introduction"
import Services from "./services"
import RecentWorks from "./recentWorks"
import ClientsInfo from "./clientsInfo"
import AOS from 'aos';
import 'aos/dist/aos.css'
import Footer from "./footer"

const Layout = () => {
  // or simply just AOS.init();
  AOS.init({
    // initialise with other settings
    duration: 2000
  });
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          servicesData{
            title,
            services{
              icon,
              label,
              desc
            }
          },
          recentWorkData{
            title,
            backgroundText,
            recentWork{
              icon,
              label
            },
            buttonLabel
          },
          clientsData{
            title,
            clients{
              icon,
              label
            },
            buttonLabel
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Introduction></Introduction>
      <div style={{ background: `#EFEDE4`, position: `relative`, top: `-90px` }}>
        <Services servicesData={data.site.siteMetadata.servicesData}></Services>
        <RecentWorks recentWorks={data.site.siteMetadata.recentWorkData}></RecentWorks>
        <ClientsInfo clients={data.site.siteMetadata.clientsData}></ClientsInfo>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Layout
