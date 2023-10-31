module.exports = {
  packagerConfig: {
    asar: false,
    icon: "src/public/images/icon",
    extraResources: [
      {
        from: "src/public",
        to: "resources/app/public",
      },
    ],
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-zip",
      platforms: ["linux"],
    }
  ]
};
