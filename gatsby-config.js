module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
        servicesData: {
            title: `services`,
            services: [
                {
                    icon: `icon campaign - active.svg`,
                    label: `Campaign X`,
                    desc: `Lorem ipsum dolor sit amet concecitur dacit me ne ultem ot te ne oprem ili kako repas i will i on li anacitur et melum demini, con cilium de pau.`,
                },
                {
                    icon: `icon strategy.svg`,
                    label: `Strategic Consulting`,
                    desc: `Lorem ipsum dolor sit amet concecitur dacit me ne ultem ot te ne oprem ili kako repas i will i on li anacitur et melum demini, con cilium de pau.`,
                },
                {
                    icon: `icon live.svg`,
                    label: `Video & Live Communication`,
                    desc: `Lorem ipsum dolor sit amet concecitur dacit me ne ultem ot te ne oprem ili kako repas i will i on li anacitur et melum demini, con cilium de pau.`,
                },
                {
                    icon: `icon creative design.svg`,
                    label: `Creative Design`,
                    desc: `Lorem ipsum dolor sit amet concecitur dacit me ne ultem ot te ne oprem ili kako repas i will i on li anacitur et melum demini, con cilium de pau.`,
                }
            ]
        },
        recentWorkData: {
            title: `recent work`,
            backgroundText: `work`,
            recentWork: [{ icon: `b&g.svg`, label: `B&G` }, { icon: `go loud.svg`, label: `Go Loud` }, { icon: `dynamic_event_preview 1.svg`, label: `Dynamic Events` }, { icon: `ipha.svg`, label: `IPHA` }],
            buttonLabel: "SEE ALL WORK"
        },
        clientsData: {
            title: `clients`,
            clients: [
                { icon: `image 4.svg`, label: `Pfizer` },
                { icon: `image 15.svg`, label: `Patient Care` },
                { icon: `image 5.svg`, label: `B&G` },
                { icon: `image 6.svg`, label: `Consilient Health` },
                { icon: `image 8.svg`, label: `Allergan` },
                { icon: `image 9.svg`, label: `Sudocrem` },
                { icon: `image 7.svg`, label: `Today fm` },
                { icon: `image 11.svg`, label: `Bayer` },
                { icon: `image 12.svg`, label: `Agri Aware` },
                { icon: `image 10.svg`, label: `DID Electrical` },
                { icon: `image 13.svg`, label: `Sport Ireland` },
                { icon: `image 14.svg`, label: `DLR` }
            ],
            buttonLabel: `GET IN TOUCH`
        }
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                custom: {
                    families: ["Lato, Dank Mono"],
                    urls: ["/fonts/fonts.css"],
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
