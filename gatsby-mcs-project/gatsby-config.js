module.exports = {
  siteMetadata: {
    title: `My Cheat Sheets`,
    description: `Find or make your own developer cheat sheets. Get community help and help the community yourself.`,
    menuItems: [
      {
          text: "Home",
          link: "/",
      },
      {
          text: "Sheets",
          link: "/sheets",
      },
      {
          text: "Creators",
          link: "/creators",
      },
      {
          text: "News",
          link: "/news",
      },
      {
          text: "Forum",
          link: "/forum",
      },
      {
          text: "My sheets",
          link: "/mysheets",
      }
    ],
    author: [`AO`, `AJS`],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
            },
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Cheat Sheets`,
        short_name: `MCS`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tab-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
