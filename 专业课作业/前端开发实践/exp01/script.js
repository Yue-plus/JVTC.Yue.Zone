const CLOUD_SPEED = 1
const MOUNTAIN_SPEED = 0.8

let cloud1LeftPercentage = 45.0
let cloud2LeftPercentage = 70.0
let cloud3LeftPercentage = 15.0

let mountain1LeftPercentage = 10.0
let mountain2LeftPercentage = 60.0

addEventListener("keydown", ev => {
    switch (ev.key) {
        case "A":
        case "a":
        case "ArrowLeft":
            document.getElementById("player").style.backgroundPosition = "-200px -200px"
            cloud1LeftPercentage += CLOUD_SPEED
            cloud2LeftPercentage += CLOUD_SPEED
            cloud3LeftPercentage += CLOUD_SPEED
            mountain1LeftPercentage += MOUNTAIN_SPEED
            mountain2LeftPercentage += MOUNTAIN_SPEED
            document.getElementById("cloud1").style.left = cloud1LeftPercentage + "%"
            document.getElementById("cloud2").style.left = cloud2LeftPercentage + "%"
            document.getElementById("cloud3").style.left = cloud3LeftPercentage + "%"
            document.getElementById("mountain1").style.left = mountain1LeftPercentage + "%"
            document.getElementById("mountain2").style.left = mountain2LeftPercentage + "%"
            break;
        case "D":
        case "d":
        case "ArrowRight":
            document.getElementById("player").style.backgroundPosition = "-200px -0"
            cloud1LeftPercentage -= CLOUD_SPEED
            cloud2LeftPercentage -= CLOUD_SPEED
            cloud3LeftPercentage -= CLOUD_SPEED
            mountain1LeftPercentage -= MOUNTAIN_SPEED
            mountain2LeftPercentage -= MOUNTAIN_SPEED
            document.getElementById("cloud1").style.left = cloud1LeftPercentage + "%"
            document.getElementById("cloud2").style.left = cloud2LeftPercentage + "%"
            document.getElementById("cloud3").style.left = cloud3LeftPercentage + "%"
            document.getElementById("mountain1").style.left = mountain1LeftPercentage + "%"
            document.getElementById("mountain2").style.left = mountain2LeftPercentage + "%"
            break
    }
})

addEventListener("keyup", ev => {
    switch (ev.key) {
        case "A":
        case "a":
        case "ArrowLeft":
            document.getElementById("player").style.backgroundPosition = "0 -200px"
            break
        case "D":
        case "d":
        case "ArrowRight":
            document.getElementById("player").style.backgroundPosition = "0 0"
            break
    }
})
