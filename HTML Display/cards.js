let cardList = []
let cardListTwo = []
let cardListThree = []
let cardListFour = []
let cardListFive = []
let cardListSix = []
let cardListSeven = []

function init() {

  var selector = d3.select("#selDataset");


  d3.json("modern_card_names.json").then((data) => {
    var cardNames = data.data;

    cardNames.forEach((card) => {
      selector
        .append("option")
        .text(card)
        .property("value", card);
    });



  });
}


function initTwo() {

  var selectorTwo = d3.select("#selDatasetTwo");


  d3.json("standard_card_names.json").then((data) => {
    var cardNamesTwo = data.data;

    cardNamesTwo.forEach((card) => {
      selectorTwo
        .append("option")
        .text(card)
        .property("value", card);
    });



  });
}

function initThree() {

  var selectorThree = d3.select("#selDatasetThree");


  d3.json("historic_card_names.json").then((data) => {
    var cardNamesThree = data.data;

    cardNamesThree.forEach((card) => {
      selectorThree
        .append("option")
        .text(card)
        .property("value", card);
    });


  });
}

function initFour() {

  var selectorFour = d3.select("#selDatasetFour");


  d3.json("legacy_card_names.json").then((data) => {
    var cardNamesFour = data.data;

    cardNamesFour.forEach((card) => {
      selectorFour
        .append("option")
        .text(card)
        .property("value", card);
    });


  });
}

function initFive() {

  var selectorFive = d3.select("#selDatasetFive");


  d3.json("pauper_card_names.json").then((data) => {
    var cardNamesFive = data.data;

    cardNamesFive.forEach((card) => {
      selectorFive
        .append("option")
        .text(card)
        .property("value", card);
    });



  });
}

function initSix() {

  var selectorSix = d3.select("#selDatasetSix");


  d3.json("pioneer_card_names.json").then((data) => {
    var cardNamesSix = data.data;

    cardNamesSix.forEach((card) => {
      selectorSix
        .append("option")
        .text(card)
        .property("value", card);
    });



  });
}

function initSeven() {

  var selectorSeven = d3.select("#selDatasetSeven");


  d3.json("vintage_card_names.json").then((data) => {
    var cardNamesSeven = data.data;

    cardNamesSeven.forEach((card) => {
      selectorSeven
        .append("option")
        .text(card)
        .property("value", card);
    });



  });
}

init();

initTwo();

initThree();

initFour();

initFive();

initSix();

initSeven();



function addCard(card) {

      var PANEL = d3.select("#cardList");


      PANEL.html("");
    var newSelector = d3.select("#selDataset");
    var newCardNames = newSelector.property("value")
    cardList.push(newCardNames)
    console.log(cardList)
    Object.entries(cardList).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

}



function addCardTwo(card) {

  var PANEL = d3.select("#cardListTwo");


  PANEL.html("");
var newSelectorTwo = d3.select("#selDatasetTwo");
var newCardNamesTwo = newSelectorTwo.property("value")
cardListTwo.push(newCardNamesTwo)
console.log(cardListTwo)
Object.entries(cardListTwo).forEach(([key, value]) => {
  PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
});

}


function addCardThree(card) {

  var PANEL = d3.select("#cardListThree");


  PANEL.html("");
var newSelectorThree = d3.select("#selDatasetThree");
var newCardNamesThree = newSelectorThree.property("value")
cardListThree.push(newCardNamesThree)
console.log(cardListThree)
Object.entries(cardListThree).forEach(([key, value]) => {
  PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
});

}

function addCardFour(card) {

  var PANEL = d3.select("#cardListFour");


  PANEL.html("");
var newSelectorFour = d3.select("#selDatasetFour");
var newCardNamesFour = newSelectorFour.property("value")
cardListFour.push(newCardNamesFour)
console.log(cardListFour)
Object.entries(cardListFour).forEach(([key, value]) => {
  PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
});

}

function addCardFive(card) {

  var PANEL = d3.select("#cardListFive");


  PANEL.html("");
var newSelectorFive = d3.select("#selDatasetFive");
var newCardNamesFive = newSelectorFive.property("value")
cardListFive.push(newCardNamesFive)
console.log(cardListFive)
Object.entries(cardListFive).forEach(([key, value]) => {
  PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
});

}


function addCardSix(card) {

  var PANEL = d3.select("#cardListSix");


  PANEL.html("");
var newSelectorSix = d3.select("#selDatasetSix");
var newCardNamesSix = newSelectorSix.property("value")
cardListSix.push(newCardNamesSix)
console.log(cardListSix)
Object.entries(cardListSix).forEach(([key, value]) => {
  PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
});

}



function addCardSeven(card) {

  var PANEL = d3.select("#cardListSeven");


  PANEL.html("");
var newSelectorSeven = d3.select("#selDatasetSeven");
var newCardNamesSeven = newSelectorSeven.property("value")
cardListSeven.push(newCardNamesSeven)
console.log(cardListSeven)
Object.entries(cardListSeven).forEach(([key, value]) => {
  PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
});

}









