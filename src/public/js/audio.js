var audioElement = document.querySelector("#microphone")

var audioConstraints = {
    video: false,
    audio: {
        autoGainControl: false,
        echoCancellation: false,
        noiseSuppression: false
    }
}

function getAudioDeviceId(callback) {
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        let deviceId = null
        devices.forEach((device) => {
            if (device.label.startsWith("ShadowCast") && device.kind === "audioinput") {
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
        console.log(audioConstraints)
        navigator.mediaDevices.getUserMedia(audioConstraints)
            .then(function (stream) {
                //const audioContext = new (window.AudioContext)({ sampleRate: 22050 })
                //const audioSource = audioContext.createMediaStreamSource(stream)
                //audioSource.connect(audioContext.destination)
                audioElement.srcObject = stream
            })
            .catch(function (error) {
                console.log(error)
                console.log("Cound not connect to microphone!")
            })
    })
}

startAudioStream()