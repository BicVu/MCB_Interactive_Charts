function Main() {

//   d3.select("#descrip_header").node().value = 'NUTRITION';
//   d3.select("#description").node().value ='The chart shows that STATE NAME has the highest consumption of fruits at ____% and STATE NAME has the lowest at ____%. While the consumption of vegetables is at its highest in the state of STATE NAME at ____%, and lowest in the state of STATENAME at ____%';

  // d3.select("#descrip_header").remove();
  // d3.select("#description").remove();

  // var $div = d3
  //   .select("body")
  //   .append("div")
  //   .attr("id", "descrip_header")

  // var $div = d3
  //   .select("body")
  //   .append("div")
  //   .attr("id", "description")

  // Map
  // d3.select("#map").remove();

  // var $div = d3
  //   .select("body")
  //   .append("div")
  //   .attr("id", "map")



  // Chart
//   d3.select("#chart1").remove();

//   var $div = d3
//     .select("body")
//     .append("div")
//     .attr("id", "chart1")

//   GenderAgeChart()
}

// function Nutrition(type) {

//   // d3.select('#descrip_header').node().value = 'OVERALL OBESITY';
//   // d3.select('#description').node().value ='The chart shows further grouping according to age group from 18-24, 25-34, 35-44, 45-54, 55-64, and 65 and up years of age, and the prevalence of obesity was determined in each age group. In the males, the highest prevalence of obesity is at 46.4% in the 45-54 years age group (in the state of West Virginia), while in the females, the highest prevalence of obesity is at 42.9% in the 55-64 years age group (in the state of Mississippi). In all age groups, obesity was significantly more in the males compared to females.';

//   // Map




//   // Chart
//   d3.select("#chart1").remove();

//   var $div = d3
//     .select("body")
//     .append("div")
//     .attr("id", "chart1")

//   if (type === 'soda') {

//     SodaIntake()
//     SodaIntake2()
//     SodaIntake3()
//   }

//   else if (type === 'fruit') {
//     FruitIntake()
//   }
//   else if (type === 'vegetable') {
//     VegetableIntake()
//   };

// }

function Health() {

  // Map



  // Chart

  // Health_Interactivity function recreates #chart1, so don't need to recreate here..
  d3.select("#chart1").remove();
  Health_Interactivity()
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Event Listeners

// function optionChanged(nutrSelection) {
//   Nutrition(nutrSelection)
// }

// nutrition_button = d3.select("#nutrition");
// nutrition_button.on("click", Nutrition('soda'));

// physical_activity_button = d3.select("#activity");
// physical_activity_button.on("click", Health);

// main_button = d3.select("#main");
// main_button.on("click", Main);


// 1st call when page is loaded
d3.select("#chart1").remove();

var $div = d3
  .select("body")
  .append("div")
  .attr("id", "chart1")

Main()
