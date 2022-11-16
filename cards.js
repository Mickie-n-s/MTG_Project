let cardList = []

function init() {

  var selector = d3.select("#selDataset");


  d3.json("card_names.json").then((data) => {
    var cardNames = data.data;

    cardNames.forEach((card) => {
      selector
        .append("option")
        .text(card)
        .property("value", card);
    });


  //   var firstSample = sampleNames[0];
  //   buildCharts(firstSample);
  //   buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

function addCard(card) {
      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#cardList");

      // Use `.html("") to clear any existing metadata
      PANEL.html("");
    var selectorTwo = d3.select("#selDataset");
    var cardnamesTwo = selectorTwo.property("value")
    cardList.push(cardnamesTwo)
    console.log(cardList)
    Object.entries(cardList).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

}



























