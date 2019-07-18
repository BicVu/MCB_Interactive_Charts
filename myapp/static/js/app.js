
function MainCharts() {
  
  d3.select("#chart1").remove();

  var $div = d3
    .select("body")
    .append("div")
    .attr("id", "chart1")
  
}

function NutritionCharts(type) {
  d3.select("#chart1").remove();

  var $div = d3
    .select("body")
    .append("div")
    .attr("id", "chart1")

  if (type === 'soda') {

    SodaIntake()
    SodaIntake2()
    SodaIntake3()
  }

  else if (type === 'fruit') {
    FruitIntake()
  }
  else if (type === 'vegetable') {
    VegetableIntake()
  };

}

function HealthCharts() {

  // Health_Interactivity function recreates #chart1, so don't need to recreate here..
  d3.select("#chart1").remove();
  Health_Interactivity()
}

nutrition_button = d3.select("#nutrition");
nutrition_button.on("click", NutritionCharts);

function optionChanged(nutrSelection) {
  NutritionCharts(nutrSelection)
}

physical_activity_button = d3.select("#activity");
physical_activity_button.on("click", HealthCharts);

main_button = d3.select("#main");
main_button.on("click", MainCharts);

NutritionCharts('soda')

// run with 'Open in New Terminal'
// python -m http.server
