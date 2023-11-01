module.exports = {
  packagerConfig: {
    asar: false,
    icon: "src/public/images/icon"
  },
  makers: [
    {
      name: "@electron-forge/maker-zip"
    }
  ]
}