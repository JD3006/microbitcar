function right () {
    for (let index = 0; index < 4; index++) {
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, 67)
    }
}
function back () {
    for (let index = 0; index < 4; index++) {
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, 67)
    }
}
function front () {
    for (let index = 0; index < 4; index++) {
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, 67)
    }
}
function left () {
    for (let index = 0; index < 4; index++) {
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, 67)
    }
}
function stop () {
    for (let index = 0; index < 4; index++) {
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 0, 67)
    }
}
function HeadLEDRED () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 100, 64)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 100, 64)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 0, 64)
}
function HeadLEDBlue () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 0, 64)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 100, 64)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 100, 64)
}
function HeadLEDGReen () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 100, 64)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 0, 64)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 100, 64)
}
let Distance = 0
let RS = 0
let LS = 0
let RR = 0
let LL = 0
led.enable(false)
pins.analogSetPitchPin(AnalogPin.P0)
let Strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
PCA9685.init(67, 0)
basic.forever(function () {
    LL = pins.digitalReadPin(DigitalPin.P12)
    RR = pins.digitalReadPin(DigitalPin.P13)
    LS = pins.digitalReadPin(DigitalPin.P2)
    RS = pins.digitalReadPin(DigitalPin.P2)
    Distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
})
