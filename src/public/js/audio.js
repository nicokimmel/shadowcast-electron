var audioElement = document.getElementById("microphone")
var volumeSlider = document.getElementById("volume")

var audioConstraints = {
    video: false,
    audio: {
        autoGainControl: false,
        echoCancellation: false,
        noiseSuppression: false,
        channelCount: 1,
        latency: 0,
        sampleRate: 48000,
        sampleSize: 16
    }
}

function getAudioDeviceId(callback) {
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        let deviceId = null
        devices.forEach((device) => {
            if (device.label.includes("ShadowCast") && device.kind === "audioinput") {
                console.log("ShadowCast Audio Device found!")
                console.log(device)
                deviceId = device.deviceId
                return
            }
        })
        callback(deviceId)
    })
}

function startAudioStream() {
    getAudioDeviceId((deviceId) => {
        if (!deviceId) {
            return
        }
        audioConstraints.audio.deviceId = { exact: deviceId }
        navigator.mediaDevices.getUserMedia(audioConstraints)
            .then(function (stream) {
                audioElement.srcObject = stream
            })
            .catch(function (error) {
                console.log("Cound not connect to microphone!")
                console.log(error)
            })
    })
}

function setVolume(volume, restore) {
    audioElement.volume = volume / 100
    if (restore) {
        volumeSlider.value = volume
    }
}

startAudioStream()