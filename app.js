var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var five = require('johnny-five')

var board = new five.Board()

app.use(express.static(__dirname))

board.on("ready", function() {
  var last = 0
  this.pinMode(0, five.Pin.ANALOG)
  this.analogRead(0, voltage =>{
  if(last !== voltage){
    io.emit("data", {"pressure": voltage})
    last = voltage
    }
  })
})
board.on("fail", function() {
  console.log('board not found. Not attached?')
})

http.listen(3000, () =>{
  console.log('listening')
})
