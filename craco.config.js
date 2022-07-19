const CracoLessPlugin = require("craco-less");
// import CracoLessPlugin from "craco-less";

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#21ce86",
              "@success-color": "#21ce86",

              //   "@warning-color": "#faad14",
              //   "@error-color": "#f5222d",
              // "@font-size-base": "14px",
              "@heading-color": "#4e7884",
              "@text-color": "#4e7884",
              "@text-color-secondary": "red",
              //   "@disabled-color": "rgba(0, 0, 0, 0.25)",
              "@border-radius-base": "6px",
              "@border-color-base": "#21ce86",
              //   "@box-shadow-base":
              //     "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
              //   "@font-family": "montserrat",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
