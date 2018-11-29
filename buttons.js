function drawButtons(margin, w, h) {
  // var margin = {top: 75, right: 80, bottom: 80, left: 225},
  //   w = window.innerWidth - window.innerWidth / 3,
  //   h = window.innerHeight - window.innerHeight / 4;

  var clicked = ""
  // http://blockbuilder.org/Ctuauden/52d057254665400f561ef73cb6e5841a
  var buttons = d3.select("#buttons").append("svg")
        .attr("class", "btn")
        // .attr("viewBox", "0 0 100 100")
        // .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("width", window.innerWidth * .8)
        .attr("height", window.innerHeight / 8);
    // Incarceration
    buttons.append("rect")
          .attr("id", "Incarceration")
          .attr("x", w / 6)
          .attr("y", window.innerHeight * .02)
          .attr("width", w/ 8)
          .attr("height", h / 15)
          .attr("fill", "#61b3d0")
          .attr("fill-opacity", .6)
          .attr('stroke', '#2378ae')
          .attr('stroke-width', '3')
          .attr("rx", 4)
          .on('mouseenter', function(d, i) {
            d3.select(this).style('fill-opacity', 1);
          }) 
          .on("click", function (d){ 
            d3.select(this)
              .style("fill", "#cdcdcd")
              .style("fill-opacity", .6);
            category = this.id
            if (clicked != category){
              d3.selectAll(".dot").filter(function(d) { 
              return d.Category != category; 
              }).style("opacity", .2);
              clicked = category
            }
            else {
              clicked = ""
              d3.selectAll(".dot").style("opacity", 1);
              d3.select(this)
                .style("fill", "#61b3d0")
                .style("fill-opacity", .6);
            }
          })
          .on('mouseleave', function(d, i) {
            d3.select(this).style('fill-opacity', .6);
          });

    buttons.append("text")
            .text('Incarceration')
            .attr('x', w / 5.2)
            .attr('y', window.innerHeight * .05)
            .attr('fill', 'black');
            
    // Immigration
    buttons.append("rect")
          .attr("id", "Immigration")
          .attr("x", w / 3.1)
          .attr("y", window.innerHeight * .02)
          .attr("width", w/ 8)
          .attr("height", h / 15)
           .attr("fill", "#61b3d0")
          .attr("fill-opacity", .6)
          .attr('stroke', '#2378ae')
          .attr('stroke-width', '3')
          .attr("rx", 4)
          .on("click", function (d){ 
            d3.select(this)
              .style("fill", "#cdcdcd")
              .style("fill-opacity", .6);
            category = this.id
            if (clicked != category){
              d3.selectAll(".dot").filter(function(d) { 
              return d.Category != category; 
              }).style("opacity", .2);
              clicked = category
            }
            else {
              clicked = ""
              d3.selectAll(".dot").style("opacity", 1);
              d3.select(this)
                .style("fill", "#61b3d0")
                .style("fill-opacity", .6);
            }
          })
      
          .on('mouseover', function(d, i) {
              d3.select(this).style('fill-opacity', 1);
            })
          .on('mouseout', function(d, i) {
              d3.select(this).style('fill-opacity', .6);
          });

    buttons.append("text")
            .text('Immigration')
            .attr('x', w / 2.8)
            .attr('y', window.innerHeight * .05)
            .attr('fill', 'black');

    // Abortion
    buttons.append("rect")
          .attr("id", "Abortion")
          .attr("x", w / 2.08)
          .attr("y", window.innerHeight * .02)
          .attr("fill", "#61b3d0")
          .attr("fill-opacity", .6)
          .attr('stroke', '#2378ae')
          .attr('stroke-width', '3')
          .attr("rx", 4)
          .attr("width", w / 8)
          .attr("height", h / 15)
          .on("click", function (d){ 
            d3.select(this)
              .style("fill", "#cdcdcd")
              .style("fill-opacity", .6);
            category = this.id
            if (clicked != category){
              d3.selectAll(".dot").filter(function(d) { 
              return d.Category != category; 
              }).style("opacity", .2);
              clicked = category
            }
            else {
              clicked = ""
              d3.selectAll(".dot").style("opacity", 1);
              d3.select(this)
                .style("fill", "#61b3d0")
                .style("fill-opacity", .6);
            }
          })
          .on('mouseover', function(d, i) {
              d3.select(this).style('fill-opacity', 1);
            })
          .on('mouseout', function(d, i) {
              d3.select(this).style('fill-opacity', .6);
          });

    buttons.append("text")
            .text('Abortion')
            .attr('x', w / 1.93)
            .attr('y', window.innerHeight * .05)
            .attr('fill', 'black');

    // GunControl
    buttons.append("rect")
          .attr("id", "GunControl")
          .attr("x", w / 1.56)
          .attr("y", window.innerHeight * .02)
          .attr("width", w / 8)
          .attr("height", h / 15)
          .attr("fill", "#61b3d0")
          .attr("fill-opacity", .6)
          .attr('stroke', '#2378ae')
          .attr('stroke-width', '3')
          .attr("rx", 4)
          .on("click", function (d){ 
            d3.select(this)
              .style("fill", "#cdcdcd")
              .style("fill-opacity", .6);
            category = this.id
            if (clicked != category){
              d3.selectAll(".dot").filter(function(d) { 
              return d.Category != category; 
              }).style("opacity", .2);
              clicked = category
            }
            else {
              clicked = ""
              d3.selectAll(".dot").style("opacity", 1);
              d3.select(this)
                .style("fill", "#61b3d0")
                .style("fill-opacity", .6);
            }
          })
      
          .on('mouseover', function(d, i) {
              d3.select(this).style('fill-opacity', 1);
            })
          .on('mouseout', function(d, i) {
              d3.select(this).style('fill-opacity', .6);
          });
    buttons.append("text")
            .text('Gun control')
            .attr('x', w / 1.49)
            .attr('y', window.innerHeight * .05)
            .attr('fill', 'black');

    buttons.append("rect")
          .attr("id", "Republican")
          .attr("x", w * .87)
          .attr("y", window.innerHeight * .02)
          .attr("width", w / 8)
          .attr("height", h / 15)
          .style("fill-opacity", .6)
          .style("fill", "#ff4040")
          .attr("rx", 20)
          .attr("ry", 20)
          .on('mouseover', function(d, i) {
            d3.select(this).style('fill-opacity', .8);
          })
          .on("click", function (d){
            d3.select(this)
              .style("fill", "#8e0000")
              .style("fill-opacity", .6);
            category = this.id
            if (clicked != category){
              d3.selectAll(".dot").filter(function(d) { 
              return d.Party != category; 
              }).style("opacity", .2);
              clicked = category
            }
            else {
              clicked = ""
              d3.selectAll(".dot").style("opacity", 1);
              d3.select(this)
                .style("fill", "#ff4040")
                .style("fill-opacity", .6);
            }
          })
          .on('mouseout', function(d, i) {
            d3.select(this).style('fill-opacity', .6);
          });

    buttons.append("rect")
          .attr("id", "Democrat")
          .attr("x", w)
          .attr("y", window.innerHeight * .02)
          .attr("width", w / 8)
          .attr("height", h / 15)
          .style("fill", "#0099cc")
          .style("fill-opacity", .6)
          .attr("rx", 20)
          .attr("ry", 20)
          .on('mouseover', function(d, i) {
            d3.select(this).style('fill-opacity', 1);
          })
          .on("click", function (d){ 
            d3.select(this)
              .style("fill", "#006080")
              .style("fill-opacity", .6);
            category = this.id
            if (clicked != category){
              d3.selectAll(".dot").filter(function(d) { 
                return d.Party != category; 
                }).style("opacity", .2);
              clicked = category
            }
            else {
              clicked = ""
              d3.selectAll(".dot").style("opacity", 1);
              d3.select(this)
                .style("fill", "#0099cc")
                .style("fill-opacity", .6);
            }
          })
          .on('mouseout', function(d, i) {
            d3.select(this).style('fill-opacity', .6);
          });
}
