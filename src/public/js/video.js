var videoElement = document.getElementById("camera")

var videoConstraints = {
    audio: false,
    video: {
        width: { ideal: 1920 },
        height: { ideal: 1080 }
    }
}

function getVideoDeviceId(callback) {
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        let deviceId = null
        devices.forEach((device) => {
            if (device.label.startsWith("ShadowCast") && device.kind === "videoinput") {
                console.log("ShadowCast Video Device found!")
                console.log(device)
                deviceId = device.deviceId
                return
            }
        })
        callback(deviceId)
    })
}

function startVideoStream() {
    getVideoDeviceId((deviceId) => {
        if (!deviceId) {
            return
        }
        videoConstraints.video.deviceId = { exact: deviceId }
        navigator.mediaDevices.getUserMedia(videoConstraints)
            .then(function (stream) {
                videoElement.srcObject = stream
            })
            .catch(function (error) {
                console.log("Cound not connect to camera!")
                console.log(error)
            })
    })
}

startVideoStream()