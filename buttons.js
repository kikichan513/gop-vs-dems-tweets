/*

// case 1: filter on 1 issue, filter on party
// case 2: filter on 2 issue, filter on party
// case 3: filter on 1 issue, filter on party, filter on 2nd issue
// case 4: filter on party, then filter on issue
// case 5: filter on party, filter on issue, switch party
// case 6: switch parties

*/

// the w1 and h2 are not used 
function drawButtons() {
    // var w = window.innerWidth - 250;
    var h = window.innerHeight;
    var w = 725;
    function removeByValue(array, value){
      return array.filter(function(elem, _index){
          return value != elem;
      });
    }
    var clicked = []
    var clickedparty = ""

   function filterIssue (d){ 
            category = this.id;  
            if (!clicked.includes(category)){ // havent been clicked before
              
              d3.select(this)
//              .style("fill", "#A1A2C2")
              .style("fill-opacity", 1)
              .on('mouseleave', null);

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
            //  .style("fill", "#6C6EA0")
              .style("fill-opacity", .6)  
              .on('mouseleave', function(d, i) {
              d3.select(this).style('fill-opacity', .6);
            })

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
        .attr("width", 1000)
        .attr("height", 70)

    // Incarceration
    buttons.append("rect")
          .attr("id", "Incarceration")
          .attr("x", w /14 )
          .attr("y", h / 200 )
          .attr("width", w/ 7)
          .attr("height", h / 17)
          .attr("fill", "#6C6EA0")
          .attr("fill-opacity", .6)   // ORIGINAL BUTTON .6
          .attr('stroke', '#ffffff')
          .attr('stroke-opacity', .5)
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
            .attr("x", w /12)
            .attr('y', window.innerHeight * .04)
            .attr('fill', 'black')
            .style("font-family", "futura")
            .style("font-size", "1.3em");
            
    // Immigration
    buttons.append("rect")
          .attr("id", "Immigration")
          .attr("x", w / 4.5)
          .attr("y", h / 200 )
          .attr("width", w/ 7)
          .attr("height", h / 17)
          .attr("fill", "#6C6EA0")
          .attr("fill-opacity", .6)  // ORIGINAL BUTTON .6
          .attr('stroke', '#ffffff')
          .attr('stroke-opacity', .5)
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
            .attr('x', w / 4.1)
            .attr('y', window.innerHeight * .04)
            .attr('fill', 'black')
            .style("font-family", "futura")
            .style("font-size", "1.3em");

    // Abortion
    buttons.append("rect")
          .attr("id", "Abortion")
          .attr("x", w / 2.7)
          .attr("y", h / 200 )
          .attr("width", w/ 7)
          .attr("height", h / 17)
          .attr("fill", "#6C6EA0")
          .attr("fill-opacity", .6)
          .attr('stroke', '#ffffff')
          .attr('stroke-opacity', .5)
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
            .text('Abortion')
            .attr('x', w / 2.5)
            .attr('y', window.innerHeight * .04)
            .attr('fill', 'black')
            .style("font-family", "futura")
            .style("font-size", "1.3em");

    // GunControl
    buttons.append("rect")
          .attr("id", "GunControl")
          .attr("x", w / 1.92)
          .attr("y", h / 200 )
          .attr("width", w/ 7)
          .attr("height", h / 17)
          .attr("fill", "#6C6EA0")
          .attr("fill-opacity", .6)
          .attr('stroke', '#ffffff')
          .attr('stroke-opacity', .5)
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
            .attr('x', w / 1.85)
            .attr('y', window.innerHeight * .04)
            .attr('fill', 'black')
            .style("font-family", "futura")
            .style("font-size", "1.3em");

    buttons.append("rect")
          .attr("id", "Republican")
           .attr("x", w / 1.47)
          .attr("y", h / 200 )
          .attr("width", w/ 8)
          .attr("height", h / 17)
          .style("fill-opacity", .6)
          .style("fill", "#ff4040")
          .attr("rx", 20)
          .attr("ry", 20)
          .on('mouseover', function(d, i) {
            d3.select(this).style('fill-opacity', 1);
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
                .style("fill", "#6C6EA0")
                .style("fill-opacity", .6)  
              }

             d3.select(this)
              .style("fill-opacity", 1)
              .on('mouseout',null);


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
            .style("fill-opacity", .6)
            .on('mouseout', function(d, i) {
            d3.select(this).style('fill-opacity', .6);
          })

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
            .text('Republicans')
           .attr("x", w / 1.45)
            .attr('y', window.innerHeight * .04)
            .attr('fill', 'black')
            .style("font-family", "futura")
            .style("font-size", "1.3em");

    buttons.append("rect")
          .attr("id", "Democrat")
          .attr("x", w / 1.23)
          .attr("y", h / 200 )
          .attr("width", w/ 8)
          .attr("height", h / 17)
          .style("fill", "#2D6D95")
          .style("fill-opacity", .6)
          .attr("rx", 20)
          .attr("ry", 20)
          .on('mouseover', function(d, i) {
            d3.select(this).style('fill-opacity', 1);
          }) 
          .on('mouseout', function(d, i) {
            d3.select(this).style('fill-opacity', .6);
          })
          .on("click", function (d){
            party = this.id
            if (clickedparty != party){ // not been clicked yet
            
              if (clickedparty.length){
                d3.select('#Republican')
                .style("fill", "#ff4040")
                .style("fill-opacity", .6);
              }
             
             d3.select(this)
              .style("fill-opacity", 1)
              .on('mouseout', null);

            clickedparty = party

            d3.selectAll(".dot").style("opacity", .8);

            if (clicked.length > 0){
              // an issue has been filtered
            
              d3.selectAll(".dot").filter(function(d) { 
              
              return (d.Party != clickedparty || !clicked.includes(d.Category))}).style("opacity", .2);
            }
            else {
              d3.selectAll(".dot").filter(function(d) { 
              return (d.Party != clickedparty)}).style("opacity", .2);
            }
            
          }
          else { // it had been clicked

            d3.select(this)
              .style("fill-opacity", .6)  
              .on('mouseout', function(d, i) {
            d3.select(this).style('fill-opacity', .6);
          });

            clickedparty = "" 
            // if an issue has been clicked, remove the filter of party to show both rep dems on the issue(s) filtered
            if (clicked.length > 0){
              d3.selectAll(".dot").style("opacity", .8);
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
            .text('Democrats')
            .attr("x", w / 1.21)
            .attr('y', window.innerHeight * .04)
            .attr('fill', 'black')
            .style("font-family", "futura")
            .style("font-size", "1.3em");
}

