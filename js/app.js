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
  
  var count=30;
  var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
  function timer() {
    count=count-1;
    if (count <= 0) {
      clearInterval(counter);
      alert("You're out of time");
      return;
    }
    $("#timer").text(count + " secs");
    //Do code for showing the number of seconds here
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












  // $('#playerInput').submit(function(event) {
  //   event.preventDefault();
  //
  //   var playerWord = $('#currentPlayerWord').val();
  //
  //   if (playerWord === activeWord) {
  //     alert("Correct!");
  //     score += playerWord.length;
  //     $('#playerScore').text(score);
  //
  //   }
  //   else {
  //     alert("Learn how to spell dummy!!");
  //   }
  //   console.log(activeWord);
  //   console.log(playerWord);
  //
  //   $('#currentPlayerWord').val("");
  //   return;
  //
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
