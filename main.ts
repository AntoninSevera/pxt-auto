let m1 = PCAmotor.Motors.M1
let m4 = PCAmotor.Motors.M4
let silaM1 = 0
let silaM4 = 0
let pole: Array<number> = []
let variable = 0
//radio
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(0)

///

//SOS tlacitko
input.onButtonPressed(Button.AB, function () {
    PCAmotor.MotorStopAll()

})




radio.onReceivedString(function (string) {

    for (let i = 0; i < string.length - 1; i++) {

        variable = string.charCodeAt(i)
        pole.push(variable)
        silaM1 = variable
        silaM4 = variable
        PCAmotor.MotorRun(m1, silaM1)
        PCAmotor.MotorRun(m4, silaM4)
    }



})

"ahoj".charCodeAt(0)

