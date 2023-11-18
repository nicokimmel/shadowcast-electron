const defaultSettings = {
    video: {
        width: 1920,
        height: 1080,
        fps: 30
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
    console.log("Loaded settings")
    console.log(settings)
    setVolume(settings.audio.volume, true)
}

window.addEventListener("pagehide", () => {
    saveSettings()
})

window.addEventListener("load", () => {
    loadSettings()
})