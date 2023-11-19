const defaultSettings = {
    video: {
        resolution: "hd"
    },
    audio: {
        volume: 50
    }
}
var settings = defaultSettings

function saveSettings() {
    settings.done = true
    localStorage.setItem("settings", JSON.stringify(settings))
}

function loadSettings() {
    if("settings" in localStorage) {
        settings = JSON.parse(localStorage.getItem("settings"))
    }
    console.log("Loaded settings!")
    console.log(settings)
    setResolution(settings.video.resolution, true)
    setVolume(settings.audio.volume, true)
}

window.addEventListener("pagehide", () => {
    saveSettings()
})

window.addEventListener("load", () => {
    loadSettings()
})