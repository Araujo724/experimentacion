radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        basic.showString("deposite")
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (receivedNumber == 2) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(200)
        basic.showString("deposite")
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
basic.forever(function () {
    radio.setGroup(1)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(0)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
})
