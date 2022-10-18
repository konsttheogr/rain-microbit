let xs: number[] = []
xs = [
    2,
    2,
    2,
    2,
    2
]
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
    basic.pause(50)
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

