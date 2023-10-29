var video = document.querySelector("#camera")

var constraints = {
    audio: false,
    video: {
        width: { ideal: 1920 },
        height: { ideal: 1080 }
    }
}

navigator.mediaDevices.enumerateDevices().then(function (devices) {
    devices.forEach((device) => {
        if (device.label.startsWith("ShadowCast") && device.kind === "videoinput") {
            constraints.deviceId = { exact: devices[i].deviceId }
            console.log(device)
        }
    })
})

navigator.mediaDevices.getUserMedia(constraints)
    .then(function (stream) {
        video.srcObject = stream
    })
    .catch(function (error) {
        console.log("Cound not connect to camera!")
    })