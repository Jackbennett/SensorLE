var five = require('johnny-five')
var board = new five.Board({port: 'COM3'})

board.on("ready", () => {
	var led = new five.Led(5)
	led.pulse()
})
