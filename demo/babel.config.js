const path = require('path');

function createReactCssModulesPlugin() {
  return [
    "react-css-modules",
    {
      context: "src",
      filetypes: {
        ".scss": {
          syntax: "postcss-scss",
          plugins: [
            [
              "postcss-import-sync2",
              {
                resolve: function (id, basedir, importOptions) {
                  let nextId = id;

                  if (id.substr(0, 2) === "./") {
                    nextId = id.replace("./", "");
                  }

                  if (nextId[0] !== "_") {
                    nextId = `_${nextId}`;
                  }

                  if (nextId.indexOf(".scss") === -1) {
                    nextId = `${nextId}.scss`;
                  }

                  return path.resolve(basedir, nextId);
                },
              },
            ],
            [
              "postcss-nested",
              {
                bubble: ["@include"],
                preserveEmpty: true,
              },
            ],
          ],
        },
      },
      generateScopedName: "[path]___[name]__[local]___[hash:base64:5]",
      webpackHotModuleReloading: true,
      exclude: "node_modules",
      handleMissingStyleName: "throw",
    },
  ];
}

module.exports = function (api) {
  api.cache(true);

  return {
    plugins: ["@babel/transform-react-jsx", createReactCssModulesPlugin()],
  };
};
