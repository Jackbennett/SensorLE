var w = 960,
    h = 500,
    tau = Math.PI * 2,
    good = '#E6AC27',
    bad = '#BF4D28'

var arc = d3.svg.arc()
  .innerRadius(180)
  .outerRadius(240)
  .startAngle(0)

var svg = d3.select('#chart')
  .append('svg')
    .attr('width', w)
    .attr('height', h)
  .append('g')
    .attr('transform', 'translate(' + w /2 + ', ' + h / 2 + '), rotate(-90)')

var bar = svg.append('path')
  .datum({endAngle: .3 * Math.PI })
  .style('fill', bad)
  .attr("d", arc)
