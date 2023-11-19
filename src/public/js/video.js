var videoElement = document.getElementById("camera")

var videoConstraints = {
    audio: false,
    video: {
        width: { ideal: 1920, min: 1920, max: 1920 },
        height: { ideal: 1080, min: 1080, max: 1080 },
        frameRate: { ideal: 30, min: 30, max: 30 }
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

function stopVideoStream() {
    videoElement.srcObject.getVideoTracks()[0].stop()
}

function setResolution(resolution, restore) {
    switch (resolution) {
        case "hd":
            videoConstraints.video = {
                width: { ideal: 1920, min: 1920, max: 1920 },
                height: { ideal: 1080, min: 1080, max: 1080 },
                frameRate: { ideal: 30, min: 30, max: 30 }
            }
            break
        case "sd":
            videoConstraints.video = {
                width: { ideal: 1280, min: 1280, max: 1280 },
                height: { ideal: 720, min: 720, max: 720 },
                frameRate: { ideal: 60, min: 60, max: 60 }
            }
            break
    }
    if (restore) {
        let buttonElement = document.getElementById(resolution)
        buttonElement.checked = true
    } else {
        stopVideoStream()
        startVideoStream()
    }
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