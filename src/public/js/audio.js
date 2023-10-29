var audio = document.querySelector("#microphone")

var constraints = {
    video: false,
    audio: {
        autoGainControl: false,
        echoCancellation: false,
        noiseSuppression: false
    }
}

navigator.mediaDevices.enumerateDevices().then(function (devices) {
    devices.forEach((device) => {
        if (device.label.startsWith("ShadowCast") && device.kind === "audioinput") {
            constraints.deviceId = { exact: devices[i].deviceId }
            console.log(device)
        }
    })
})

navigator.mediaDevices.getUserMedia(constraints)
    .then(function (stream) {
        const audioContext = new (window.AudioContext)({ sampleRate: 22050 })
        const audioSource = audioContext.createMediaStreamSource(stream)
        audioSource.connect(audioContext.destination)
        audio.srcObject = stream
    })
    .catch(function (error) {
        console.log("Cound not connect to microphone!")
    })