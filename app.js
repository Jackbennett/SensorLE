var five = require('johnny-five')
var board = new five.Board({port: 'COM3'})

board.on("ready", function() {
	this.pinMode(0, five.Pin.ANALOG)
	this.analogRead(0, voltage =>{
		console.log(voltage)
	})
})
