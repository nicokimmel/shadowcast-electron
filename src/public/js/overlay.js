var menu = document.getElementById("menu")
window.addEventListener("mousemove", (event) => {
    menu.style.visibility = event.clientY >= window.innerHeight - 64 ? "visible" : "hidden"
})

var volumeSlider = document.getElementById("volume")
volumeSlider.addEventListener("input", () => {
    setVolume(volumeSlider.value)
    settings.audio.volume = volumeSlider.value
}, false)
setVolume(50, true)

var screenshotButton = document.getElementById("screenshot")
screenshotButton.addEventListener("click", () => {
    takeScreenshot()
}, false)

var hdButton = document.getElementById("hd")
hdButton.addEventListener("click", () => {
    setResolution("hd")
    settings.video.resolution = "hd"
    console.log("hd")
}, false)
var sdButton = document.getElementById("sd")
sdButton.addEventListener("click", () => {
    setResolution("sd")
    settings.video.resolution = "sd"
    console.log("sd")
}, false)