module.exports = {
  packagerConfig: {
    asar: true,
    icon: "src/images/icon-128x128.png",
    extraResources: [
      {
        from: "./src/public",
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
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
