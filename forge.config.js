module.exports = {
  packagerConfig: {
    asar: false,
    icon: "src/public/images/icon"
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-zip"
    }
  ]
}