let xs: number[] = []
xs = [
    2,
    2,
    2,
    2,
    2
]
let speed = 1
basic.forever(function () {
    basic.clearScreen()
    led.plot(xs[0], 0)
    led.plot(xs[1], 1)
    led.plot(xs[2], 2)
    led.plot(xs[3], 3)
    led.plot(xs[4], 4)
    xs[4] = xs[3]
    xs[3] = xs[2]
    xs[2] = xs[1]
    xs[1] = xs[0]
    basic.pause(speed * 50)
})


input.onButtonPressed(Button.A, function () {
    xs[0] -= 1
if (xs[0] == -1) {
        xs[0] = 0
    }
})
input.onButtonPressed(Button.B, function () {
    xs[0] += 1
if (xs[0] == 5) {
        xs[0] = 4
    }
})

input.onButtonPressed(Button.AB, function () {
    speed+=1
    if (speed==6) {speed=1}
})