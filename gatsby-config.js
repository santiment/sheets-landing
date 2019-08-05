module.exports = {
  siteMetadata: {
    title: `Sheets - Crypto asset data for Google Sheets`,
    description: `Relevant access for on-chain, social development activity, prices and volume data.`,
    author: `Santiment Team`,
    siteUrl: 'https://sheets-stage.santiment.net'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["BACKEND_URL"],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "SAN",
        // This is the field under which it's accessible
        fieldName: "san",
        // URL to query from
        url: "https://api.santiment.net/graphql",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        background_color: `#1aa168`,
        theme_color: `#1aa168`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
