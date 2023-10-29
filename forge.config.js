module.exports = {
  packagerConfig: {
    asar: true,
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
    },
    {
      name: "@electron-forge/maker-flatpak",
      config: {
        options: {
          icon: "src/public/images/icon.png",
          categories: ["Game", "Utility"],
        }
      }
    }
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
