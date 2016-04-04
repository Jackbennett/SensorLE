window.gauge = function(options){
  'use strict'

  options = options || {}

  var d3 = window.d3
  var w = 500
  var h = 250
  var innerRadius = options.innerRadius || 180
  var outerRadius = options.outerRadius || 240

  var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(0)
    .endAngle(function(d){
      return scale(d.pressure)
    })

  var scale = d3.scale.linear()
    .domain([0, 255])
    .range([0.01, Math.PI])

  var fill = d3.scale.linear()
    .domain([0,255])
    .range(['#BF4D28', '#E6AC27'])

  var svg = d3.select("#chart").append("svg")
    .attr('width', w)
    .attr('height', h)
    .append('g')
      .attr('transform', 'translate(' + w /2 + ', ' + h + '), rotate(-90)')


  function update(data){
    var data = data || options.data || {pressure: 250} // Mock Data
    var bar = svg.selectAll('path')
      .data([data])

    bar.enter()
      .append('path')
      .attr("d", arc)

    bar.attr("d", arc)
      .style("fill", function(d){return fill(d.pressure)})

    bar.exit().remove()
  }

  update()

  return {update: update}
}
