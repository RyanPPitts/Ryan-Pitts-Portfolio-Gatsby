const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/ryanpitts/React Projects/portfolio-pitts/gatsby-portfolio-dev/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ryanpitts/React Projects/portfolio-pitts/gatsby-portfolio-dev/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ryanpitts/React Projects/portfolio-pitts/gatsby-portfolio-dev/src/pages/index.js")))
}

