// main.js
let volume = 100

document.getElementById('audio-selection').addEventListener("change", (event) => {
    audioselector = document.getElementById("audio-selection")
    if (audioselector.elements[0].checked) {
        document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg"
        document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3"
    } else if (audioselector.elements[1].checked) {
        document.getElementById("sound-image").src = "./assets/media/images/car.svg"
        document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3"
    } else {
        document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg"
        document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3"
    }
})

document.getElementById('volume-number').addEventListener("change", (event) => {
    volume = document.getElementById("volume-number").value
    volumechanged()
})

document.getElementById('volume-slider').addEventListener("change", (event) => {
    volume = document.getElementById("volume-slider").value
    volumechanged()
})

function volumechanged() {
    document.getElementById("volume-slider").value = volume
    document.getElementById("volume-number").value = volume
    document.getElementById("horn-sound").volume = volume/100

    document.getElementById("honk-btn").disabled = false;
    if (volume >= 67 && volume <= 100) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg"
    } else if (volume <= 66 && volume >= 34) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg"
    } else if (volume > 0) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg"
    } else {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg"
        document.getElementById("honk-btn").disabled = true;
    }
}

document.getElementById("honk-btn").addEventListener("click", (event) => {
    event.preventDefault()
    document.getElementById("horn-sound").play()
})