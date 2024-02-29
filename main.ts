input.onButtonPressed(Button.A, function () {
    buttonbpressed = 0
    if (buttonapressed) {
        buttonapressed = 0
    } else {
        buttonapressed = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    hummingbird.setPositionServo(FourPort.Two, 180)
    basic.pause(1000)
    buttonbpressed = 0
})
input.onButtonPressed(Button.B, function () {
    buttonapressed = 0
    if (buttonbpressed) {
        buttonbpressed = 0
    } else {
        buttonbpressed = 1
    }
})
let buttonapressed = 0
let buttonbpressed = 0
hummingbird.startHummingbird()
music.play(music.tonePlayable(622, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(311, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(466, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(415, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(311, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(622, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(466, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
basic.forever(function () {
    if (buttonbpressed) {
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        0
        )
        basic.pause(50)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        50
        )
        basic.pause(50)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        100
        )
        basic.pause(50)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        150
        )
        basic.pause(50)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        200
        )
        basic.pause(50)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        255
        )
        basic.pause(500)
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        0
        )
        basic.pause(50)
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        50
        )
        basic.pause(50)
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        100
        )
        basic.pause(50)
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        150
        )
        basic.pause(50)
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        200
        )
        basic.pause(50)
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        255
        )
        basic.pause(500)
        hummingbird.setLED(ThreePort.Three, 0)
        basic.pause(50)
        hummingbird.setLED(ThreePort.Three, 10)
        basic.pause(50)
        hummingbird.setLED(ThreePort.Three, 20)
        basic.pause(50)
        hummingbird.setLED(ThreePort.Three, 30)
        basic.pause(50)
        hummingbird.setLED(ThreePort.Three, 40)
        basic.pause(50)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        200
        )
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        200
        )
        hummingbird.setLED(ThreePort.Three, 50)
        basic.pause(500)
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        150
        )
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        150
        )
        hummingbird.setLED(ThreePort.Three, 40)
        basic.pause(50)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        100
        )
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        100
        )
        hummingbird.setLED(ThreePort.Three, 30)
        basic.pause(50)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        50
        )
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        50
        )
        hummingbird.setLED(ThreePort.Three, 20)
        basic.pause(50)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        25
        )
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        25
        )
        hummingbird.setLED(ThreePort.Three, 10)
        basic.pause(50)
        hummingbird.setLED(ThreePort.Three, 0)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        0
        )
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        0
        )
        basic.pause(500)
    }
})
basic.forever(function () {
    if (buttonapressed) {
        basic.pause(200)
        hummingbird.setLED(ThreePort.One, 100)
        hummingbird.setLED(ThreePort.Two, 100)
        basic.pause(500)
        hummingbird.setLED(ThreePort.One, 25)
        hummingbird.setLED(ThreePort.Two, 25)
        basic.pause(500)
    } else {
        hummingbird.setLED(ThreePort.One, 0)
        hummingbird.setLED(ThreePort.Two, 0)
    }
})
basic.forever(function () {
    basic.showString("STANLEY & MAIA | PARASITISM")
})
basic.forever(function () {
    if (buttonapressed) {
        hummingbird.setPositionServo(FourPort.Two, 45)
        basic.pause(500)
        hummingbird.setPositionServo(FourPort.Two, -45)
        basic.pause(500)
    }
})
basic.forever(function () {
    if (buttonbpressed) {
        hummingbird.setPositionServo(FourPort.One, 180)
        basic.pause(500)
        hummingbird.setPositionServo(FourPort.One, 0)
        basic.pause(500)
    }
})
