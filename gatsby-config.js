const path = require("path");

module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        config: path.join(__dirname, "config"),
        "@": path.join(__dirname, "src"),
      },
    },
    "gatsby-plugin-postcss",
  ],
};
