window.socket = io()
window.gauge = function(options){
  'use strict'
  
  options = options || {}
  
  var d3 = window.d3
  var w, h, 
  var innerRadius = options.innerRadius || 180
  var outerRadius = options.outerRadius || 240 
  var data = options.data || []
  
  var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(0)
    .endAngle(function(d){
      return scale(d.pressure)
    })
  
  var scale = d3.scale.linear()
    .domain([0, 1023])
    .range([0.01, Math.PI])
  
  var fill = d3.scale.linear()
    .domain([0,1023])
    .range(['#BF4D28', '#E6AC27'])
  
  var svg = d3.select("#chart").append("svg")
  
  function chart(){
    var bar = svg.selectAll('path')
      .data([data])

    bar.enter()
      .append('path')
      .attr("d", arc)

    bar.attr("d", arc)
      .style("fill", function(d){return color(d.pressure)})

    bar.exit().remove()
  }
}


document.addEventListener('DOMContentLoaded', function(){

var w = 960,
    h = 500,



var svg = d3.select('#chart')
  .append('svg')
    .attr('width', w)
    .attr('height', h)
  .append('g')
    .attr('transform', 'translate(' + w /2 + ', ' + h / 2 + '), rotate(-90)')

update({"pressure": 500})

socket.on('data', function(d){
  console.log(d)
  update(d)
})

})
