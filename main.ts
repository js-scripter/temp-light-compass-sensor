let currenttemprature = input.temperature()
let max = currenttemprature
let min = currenttemprature
basic.forever(function () {
    currenttemprature = input.temperature()
    if (currenttemprature < min) {
        min = currenttemprature
    }
    if (currenttemprature > max) {
        max = currenttemprature
    }
    basic.showNumber(min)
    basic.showString("-")
    basic.showNumber(max)
    if (input.lightLevel() > 25) {
        basic.showString("D")
        basic.pause(1000)
    } else {
        basic.showString("N")
        basic.pause(1000)
    }
    basic.clearScreen()
})
