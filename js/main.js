window.socket = io()

document.addEventListener('DOMContentLoaded', function(){
  var pressure = gauge()
  pressure.update({pressure: 255})
  socket.on('data', function(d){
    console.log(d)
    pressure.update(d)
  })

  var demo = gauge()
  setInterval(function(){
    var value = Math.floor(Math.random() * 255)
    console.log('Demo value: ' + value)
    demo.update({pressure: value})
  }, 3000)

})

