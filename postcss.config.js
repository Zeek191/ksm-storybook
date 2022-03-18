const path = require("path");

module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "custom-media-queries": {
          importFrom: path.join(__dirname, "src/base/styles/media.css"),
        },
      },
    },
  },
};
