var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var five = require('johnny-five')

var board = new five.Board({port: 'COM3'})

app.use(express.static(__dirname))

board.on("ready", function() {
	var last = 0
	this.pinMode(0, five.Pin.ANALOG)
	this.analogRead(0, voltage =>{
		if(last !== voltage){
			io.emit("data", {"value": voltage})
			last = voltage
		}
	})
})

http.listen(3000, '0.0.0.0', () =>{
	console.log('listening')
})
