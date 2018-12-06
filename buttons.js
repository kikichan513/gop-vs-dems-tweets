/*

// case 1: filter on 1 issue, filter on party
// case 2: filter on 2 issue, filter on party
// case 3: filter on 1 issue, filter on party, filter on 2nd issue
// case 4: filter on party, then filter on issue
// case 5: filter on party, filter on issue, switch party
// case 6: switch parties


*/

function drawButtons(margin, w, h) {
  // var margin = {top: 75, right: 80, bottom: 80, left: 225},
  //   w = window.innerWidth - window.innerWidth / 3,
  //   h = window.innerHeight - window.innerHeight / 4;

    function removeByValue(array, value){
      return array.filter(function(elem, _index){
          return value != elem;
      });
    }
    var clicked = []
    var clickedparty = ""


   function filterIssue (d){ 
            // TODO: Make sure button is shaded dark when pressed. Doesn't work at the moment
            
            // one more : if you click on party - then click on issue
            category = this.id;  
            if (!clicked.includes(category)){ // havent been clicked before
              
              d3.select(this)
              .style("fill", "#004d99")
              .style("fill-opacity", .6);

              clicked.push(category);

              d3.selectAll(".dot").style("opacity", .8);
              if (clickedparty == ""){ // no party filter has been applied
                d3.selectAll(".dot").filter( d => {
                return !clicked.includes(d.Category)}).style("opacity", .2);
              }else { // a party filter has been applied
                console.log("a party filter has been applied")
                d3.selectAll(".dot").filter( d => {
                return (!clicked.includes(d.Category)|| d.Party != clickedparty)}).style("opacity", .2);
              }
    
            }
            else { 

              d3.select(this)
              .style("fill", "#61b3d0")
              .style("fill-opacity", .6)  

              clicked = removeByValue(clicked,category)
              if (clicked.length){
                d3.selectAll(".dot[id*='"+ category + "']").style("opacity", .2)
              }
              if (!clicked.length){
                d3.selectAll(".dot").style("opacity", .8);
              }
            }
            
          }

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
          .attr("fill-opacity", .6)   // ORIGINAL BUTTON .6
          .attr('stroke', '#2378ae')
          .attr('stroke-width', '1')
          .attr("rx", 4)
          .on('mouseenter', function(d, i) {
            d3.select(this).style('fill-opacity', 1);
          }) 
          .on('mouseleave', function(d, i) {
            d3.select(this).style('fill-opacity', .6);
          })
          .on("click", filterIssue);
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
          .attr("fill-opacity", .6)  // ORIGINAL BUTTON .6
          .attr('stroke', '#2378ae')
          .attr('stroke-width', '1')
          .attr("rx", 4)
          .on('mouseenter', function(d, i) {
            d3.select(this).style('fill-opacity', 1);
          }) 
          .on('mouseleave', function(d, i) {
            d3.select(this).style('fill-opacity', .6);
          })
          .on("click", filterIssue);
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
          .attr('stroke-width', '1')
          .attr("rx", 4)
          .attr("width", w / 8)
          .attr("height", h / 15)
          .on('mouseenter', function(d, i) {
            d3.select(this).style('fill-opacity', 1);
          }) 
          .on('mouseleave', function(d, i) {
            d3.select(this).style('fill-opacity', .6);
          })
          .on("click", filterIssue);

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
          .attr('stroke-width', '1')
          .attr("rx", 4)
          .on('mouseenter', function(d, i) {
            d3.select(this).style('fill-opacity', 1);
          }) 
          .on('mouseleave', function(d, i) {
            d3.select(this).style('fill-opacity', .6);
          })
          .on("click", filterIssue);

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
          .on('mouseout', function(d, i) {
            d3.select(this).style('fill-opacity', .6);
          })
          .on("click", function (d){

            
             
           

            party = this.id
            console.log(party);

            if (clickedparty != party){ // not been clicked yet
             
               if (clickedparty.length){
                d3.select('#Democrat')
                .style("fill", "#61b3d0")
                .style("fill-opacity", .6)  
              }

             d3.select(this)
              .style("fill", "#8e0000")
              .style("fill-opacity", .6);


            console.log("clickedparty != party")
            clickedparty = party

            d3.selectAll(".dot").style("opacity", .8);

            if (clicked.length > 0){
              // an issue has been filtered
              console.log(" an issue has been filtered")
              console.log(clicked)
              d3.selectAll(".dot").filter(function(d) { 
              
              return (d.Party != clickedparty || !clicked.includes(d.Category))}).style("opacity", .2);
            }
            else {
              console.log(" no issue has been filtered")
              d3.selectAll(".dot").filter(function(d) { 
              return (d.Party != clickedparty)}).style("opacity", .2);
            }
            
          }
          else { // it had been clicked

             d3.select(this)
            .style("fill", "#ff4040")
            .style("fill-opacity", .6);

            console.log("clickedparty == party")

            clickedparty = "" 

            // if an issue has been clicked, remove the filter of party to show both rep dems on the issue(s) filtered
            if (clicked.length > 0){
              d3.selectAll(".dot").style("opacity", .8);

              console.log("remove filter on party, other issues present")
              d3.selectAll(".dot").filter( d => {
              return !clicked.includes(d.Category)}).style("opacity", .2);
            }
            // if there is no issue filtered on, return to normal
            else {
              console.log("remove filter on party, no issues present")
              d3.selectAll(".dot").style("opacity", .8);
            }

          }
          
          })
         

    buttons.append("text")
            .text('Rep')
            .attr('x', w / 1.10)
            .attr('y', window.innerHeight * .05)
            .attr('fill', 'black');

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
            d3.select(this).style('fill-opacity', .8);
          }) 
          .on('mouseout', function(d, i) {
            d3.select(this).style('fill-opacity', .6);
          })
          .on("click", function (d){

            party = this.id
          //  console.log(party);

            if (clickedparty != party){ // not been clicked yet
            
              if (clickedparty.length){
                d3.select('#Republican')
                .style("fill", "#ff4040")
                .style("fill-opacity", .6);
              }
             
             d3.select(this)
              .style("fill", "#004d99")
              .style("fill-opacity", .6);

          //  console.log("clickedparty != party")
            clickedparty = party

            d3.selectAll(".dot").style("opacity", .8);

            if (clicked.length > 0){
              // an issue has been filtered
             // console.log(" an issue has been filtered")
             // console.log(clicked)
              d3.selectAll(".dot").filter(function(d) { 
              
              return (d.Party != clickedparty || !clicked.includes(d.Category))}).style("opacity", .2);
            }
            else {
             // console.log(" no issue has been filtered")
              d3.selectAll(".dot").filter(function(d) { 
              return (d.Party != clickedparty)}).style("opacity", .2);
            }
            
          }
          else { // it had been clicked

            d3.select(this)
              .style("fill", "#61b3d0")
              .style("fill-opacity", .6)  

            //console.log("clickedparty == party")

            clickedparty = "" 

            // if an issue has been clicked, remove the filter of party to show both rep dems on the issue(s) filtered
            if (clicked.length > 0){
              d3.selectAll(".dot").style("opacity", .8);

             // console.log("remove filter on party, other issues present")
              d3.selectAll(".dot").filter( d => {
              return !clicked.includes(d.Category)}).style("opacity", .2);
            }
            // if there is no issue filtered on, return to normal
            else {
            //  console.log("remove filter on party, no issues present")
              d3.selectAll(".dot").style("opacity", .8);
            }

          }
          
          })
         
    buttons.append("text")
            .text('Dem')
            .attr('x', w / .95)
            .attr('y', window.innerHeight * .05)
            .attr('fill', 'black');
}
