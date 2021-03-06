$(function() {

  var categoryOne = window.categoryOne;
  var categoryTwo = window.categoryTwo;
  var categoryThree = window.categoryThree;
  var activeWord;
  var score = 0;
  var highScore = [];
  var updatedHighScore = 0;

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

  //count down timer function

  $('#startButton').on('click', function() {
    soundtrack.src = 'Scrambler.wav';
    soundtrack.play(true,true);
  });
  $('#startButton').on('click', counter)
  function counter() {
    var count = 31;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
    function timer() {
      count=count-1;
      if (count <=5) {
        $('#timer').css('color', 'red');
      }
      if (count === 0) {
        clearInterval(counter);
        soundtrack.pause(true,true);
        failSound.pause(true,true);
        alert('You are out of time');
        return;
      }
      $('#timer').text(count + ' Seconds');
    }
  }
  //resets the scrambled word and score so that player can play again. restarts soundtrack.

  $('#reset').on('click', function() {
    $('#scrambled').empty();
    score = 0;
    $('#playerScore').text('0');
    $('#timer').css('color', 'black');
    $('#currentPlayerWord').val('');
    soundtrack.play(true,true);
    counter();

    highScore.push(score);
    var currentHighScore = Math.max.apply(Math,highScore);
    $('#highScore').text(currentHighScore);
  });

  //function to run onclick of selector button one. Calls the shuffle word function and applies it to
  //the scrambled word that will be displayed in the display box.

  $('#selectorButtonOne').on('click', function() {
    var $displayBox = $('#scrambled');
    activeWord = categoryOne[Math.floor(Math.random() * categoryOne.length)];
    console.log(activeWord);
    var shuffledWord = shuffleWord(activeWord);
    $displayBox.text(shuffledWord);
  });

  //player input function to run when player types. Checks for a match with the original word in the array

  $('#playerInput').submit(function(event) {
    event.preventDefault();

    var playerWord = $('#currentPlayerWord').val().toLowerCase();

    if (playerWord === activeWord) {
      score += playerWord.length;
      $('#playerScore').text(score);
    } else {
      $('#playerScore').text(score -=1);
      soundtrack.pause(true,true);
      failSound.src = 'fail-buzzer.wav';
      failSound.play();
    }
    soundtrack.play(true,true);

//push the score to the highscore array. current high score will then check to make sure high score is up to date.

    $('#currentPlayerWord').val('');
    highScore.push(score);
    var currentHighScore = Math.max.apply(Math,highScore);
    $('#highScore').text(currentHighScore);
  });



  //  button two and button three. Very repetitive but basically do the same as button one above.

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
