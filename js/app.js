$(function() {

  var categoryOne = ["javascript", "jquery", "console"];
  var categoryTwo = ["mojito", "cosmopolitan", "pina colada"];
  var categoryThree = ["kiwi", "snifter", "jandals"];
  var activeWord = [];


  $('#selectorButtonOne').on('click', function() {
    var randomWordOne = categoryOne[Math.floor(Math.random() * categoryOne.length)];
    activeWord.push(randomWordOne);
    console.log(activeWord);
    activeWord.toString();

//need to shuffle word first!!!!


var $displayBox = $('#scrambled').append(activeWord);
$($displayBox).css({"background-color": "yellow", "font-size": "60px", "text-align": "center", "margin": "20px", "font-family": "Helvetica"});




    // activeWord.toString();
    // activeWord.split(" ");
  //  console.log(activeWord);

$('#submitButton').on('submit', function(e) {
  e.preventDefault();
  if ('#playerInput' === activeWord) {
    console.log("player wins!");
  }

  var activeWord = "";
});

  });




  //
  //
  //
  // $('#selectorButtonTwo').on('click', function() {
  //   var randomWordTwo = categoryTwo[Math.floor(Math.random() * categoryTwo.length)];
  //   activeWord.push(randomWordTwo);
  //   console.log(randomWordTwo);
  // });
  //
  // $('#selectorButtonThree').on('click', function() {
  //   var randomWordThree = categoryThree[Math.floor(Math.random() * categoryThree.length)];
  //   activeWord.push(randomWordThree);
  //
  //   console.log(randomWordThree);
  // });
  //



});
