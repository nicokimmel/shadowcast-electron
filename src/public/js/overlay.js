var volumeSlider = document.getElementById("volume")
volumeSlider.addEventListener("input", () => {
    setVolume(volumeSlider.value)
}, false)
setVolume(50, true)

var screenshotButton = document.getElementById("screenshot")
screenshotButton.addEventListener("click", () => {
    takeScreenshot()
}, false)