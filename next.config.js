const withCss = require('@zeit/next-css');
const withFonts = require('next-fonts');
module.exports = withCss(withFonts({
  webpack(config, options) {
   return config;
  },
}));