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
            })
    })
}

function takeScreenshot() {
    let canvas = document.createElement("canvas")
    canvas.width = videoElement.videoWidth
    canvas.height = videoElement.videoHeight
    let ctx = canvas.getContext("2d")
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height)
    let dataURL = canvas.toDataURL("image/png")
    let link = document.createElement("a")
    link.href = dataURL
    link.download = "screenshot.png"
    link.click()
}

startVideoStream()