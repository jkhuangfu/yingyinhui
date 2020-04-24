module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        appId: "xyz.drnet.yingyinhui",
        productName: "影音汇",
        nsis: {
          // installerIcon: "build/icon.ico",
          // installerHeader: "build/icon.png",
          // installerHeaderIcon: "build/icon.ico",
          oneClick: false,
          allowToChangeInstallationDirectory: true,
          runAfterFinish: false,
        },
        win: {
          target: "nsis",
          icon: "build/icons/icon.png",
          legalTrademarks: "https://www.drnet.xyz",
        },
        mac: {
          target: "dmg",
          icon: "build/icons/icon.png",
        },
        dmg: {
          title: "影音汇",
          icon: "build/icons/icon.png",
          contents: [],
          window: {
            x: 400,
            y: 400,
          },
        },
      },
    },
  },
  productionSourceMap: false,
};
