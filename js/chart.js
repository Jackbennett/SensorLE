var socket = io()

document.addEventListener('DOMContentLoaded', function(){

var w = 960,
    h = 500,
    tau = Math.PI * 2,
    good = '#E6AC27',
    bad = '#BF4D28'

var scale = d3.scale.linear()
  .domain([0, 1023])
  .range([0.01, Math.PI])

var arc = d3.svg.arc()
  .innerRadius(180)
  .outerRadius(240)
  .startAngle(0)
  .endAngle(function(d){
    return scale(d.pressure)
  })

var svg = d3.select('#chart')
  .append('svg')
    .attr('width', w)
    .attr('height', h)
  .append('g')
    .attr('transform', 'translate(' + w /2 + ', ' + h / 2 + '), rotate(-90)')

function update(data){
  var bar = svg.selectAll('path')
    .data([data])

  bar.enter()
      .append('path')
      .attr("d", arc)
      .style('fill', bad)

  bar.attr("d", arc)

  bar.exit().remove()
}

update({"pressure": 500})

socket.on('data', function(d){
  update(d)
})

})
