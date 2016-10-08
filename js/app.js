$(function() {

  var categoryOne = ["javascript", "jquery", "console", "array", "bind", "split", "join", "concatenate"];
  var categoryTwo = ["mojito", "cosmopolitan", "pina colada"];
  var categoryThree = ["kiwi", "snifter", "jandals"];
  var activeWord;
  var score = 0;

  function shuffleWord(word) {
    var j, x, i;
    var wordArray = word.split('');

    for (i = wordArray.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = wordArray[i - 1];
      wordArray[i - 1] = wordArray[j];
      wordArray[j] = x;
    }

    return wordArray.join('');
  }

  $('#selectorButtonOne').on('click', function() {
    var $displayBox = $('#scrambled');
    activeWord = categoryOne[Math.floor(Math.random() * categoryOne.length)];
    console.log(activeWord);

    //need to shuffle word here!!!!
    var shuffledWord = shuffleWord(activeWord);
    $displayBox.text(shuffledWord);

    // playerWord = this.innerHTML.toLowerCase();
  });

  $('#playerInput').submit(function(event) {
    event.preventDefault();

    var playerWord = $('#currentPlayerWord').val();

    if (playerWord === activeWord) {
      alert("Correct!");
      score += playerWord.length;
      $('#playerScore').text(score);
      
    }
    else {
      alert("Learn how to spell dummy!!");
    }
    console.log(activeWord);
    console.log(playerWord);

    $('#currentPlayerWord').val("");
    return;

  });
  //
  //



  // .off( "submit" ). to turn off.
  //
  // $( "#target" ).submit(function( event ) {
  //   alert( "Handler for .submit() called." );
  //   event.preventDefault();
  //

  // var activeWord = "";

  //
  // $('#selectorButtonTwo').on('click', function() {
  //   var $displayBox = $('#scrambled');
  //   activeWord = categoryTwo[Math.floor(Math.random() * categoryTwo.length)];
  //   console.log(activeWord);
  //
  //   //need to shuffle word here!!!!
  //   var shuffledWord = shuffleWord(activeWord);
  //   $displayBox.text(shuffledWord);
  //
  //   // playerWord = this.innerHTML.toLowerCase();
  //
  //   $('#playerInput').submit(function(event) {
  //     event.preventDefault();
  //
  //     var playerWord = $('#currentPlayerWord').val();
  //     // var activeWord = "";
  //
  //     if (playerWord.textContent === activeWord.textContent) {
  //       alert("Correct!");
  //       // score ++;
  //       // $('#playerScore').text(score);
  //       // pointsDisplay.textContent = score;
  //     }
  //     else {
  //       alert("Learn how to spell dummy!!");
  //     }
  //     console.log(activeWord);
  //     console.log(playerWord);

  //   });
  // });






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
