// console.log("categoryOne (outside):", categoryOne);
$(function() {
  // console.log("categoryOne (inside):", window.categoryOne);

  var categoryOne = window.categoryOne;
  var categoryTwo = window.categoryTwo;
  var categoryThree = window.categoryThree;
  var activeWord;
  var score = 0;
  var highScore = [];
  var updatedHighScore = 0;

  //   var categoryOne = $('#selectorButtonOne');
  //   $.each(window.categoryOne, function(i, categoryOne) {
  //     $selectorButtonOne.append
  // });

  //shuffle function
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
  //count down timer

  $("#startButton").on('click', counter)

  function counter() {
    var count = 10;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
    function timer() {
      count=count-1;
      if (count <=5) {
        $("#timer").css("color", "red");
      }
      if (count === 0) {
        clearInterval(counter);
        alert("You're out of time");
        return;
      }
      $("#timer").text(count + " Seconds");
    }
  };

  // });

  //button one on click function

  //
  //
  // $('.selectors').on('click', function() {
  //   var $displayBox = $('#scrambled');
  //   activeWord = this.selectors[Math.floor(Math.random() * this.selectors.length)];
  //   console.log(activeWord);
  //
  //   var shuffledWord = shuffleWord(activeWord);
  //   $displayBox.text(shuffledWord);
  // });

  $('#selectorButtonOne').on('click', function() {
    var $displayBox = $('#scrambled');
    activeWord = categoryOne[Math.floor(Math.random() * categoryOne.length)];
    console.log(activeWord);

    var shuffledWord = shuffleWord(activeWord);
    $displayBox.text(shuffledWord);
  });

  $('#playerInput').submit(function(event) {
    event.preventDefault();

    var playerWord = $('#currentPlayerWord').val().toLowerCase();

    if (playerWord === activeWord) {
      alert("Correct!");
      score += playerWord.length;
      $('#playerScore').text(score);
    }
    else {
      alert("Learn how to spell dummy!!");
      $('#playerScore').text(score -=1);
    }
    // console.log(activeWord);
    // console.log(playerWord);

    $('#currentPlayerWord').val("");
    highScore.push(score);
    var currentHighScore = Math.max.apply(Math,highScore);
    $('#highScore').text(currentHighScore);
  });

  //resets the scrambled word and score so that player can play again. Needed to insert the counter again
  //therefore quite repetitive but it works!
  //resets the score back to zero to re-increment
  $('#reset').on('click', function() {
    $('#scrambled').empty();
    score = 0;
    $('#playerScore').text('0');
    $('#currentPlayerWord').val("");
    counter();

    highScore.push(score);
    var currentHighScore = Math.max.apply(Math,highScore);
    $('#highScore').text(currentHighScore);

  });

  //  button two and button three. Very repetitive.
  $('#selectorButtonThree').on('click', function() {
    var $displayBox = $('#scrambled');
    activeWord = categoryThree[Math.floor(Math.random() * categoryThree.length)];
    console.log(activeWord);

    var shuffledWord = shuffleWord(activeWord);
    $displayBox.text(shuffledWord);
  });

  $('#selectorButtonTwo').on('click', function() {
    var $displayBox = $('#scrambled');
    activeWord = categoryTwo[Math.floor(Math.random() * categoryTwo.length)];
    console.log(activeWord);

    var shuffledWord = shuffleWord(activeWord);
    $displayBox.text(shuffledWord);
  });
});

//
//
// $('.selectors').on('click', function() {
//   var $displayBox = $('#scrambled');
//   activeWord = this.selectors[Math.floor(Math.random() * this.length)];
//   console.log(activeWord);
//
//   var shuffledWord = shuffleWord(activeWord);
//   $displayBox.text(shuffledWord);
// });
