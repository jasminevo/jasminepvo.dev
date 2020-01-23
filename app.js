$(document).ready(function() {
  
  
    //Create function
    function randomNum() {
      return Math.floor((Math.random()*100));
    }
    
    //Assign variable
    let numberToGuess = randomNum();
    console.log(numberToGuess);
    
    //Using if/else and value comparison
    function checkGuess(guess) {
      // Check guess against our random number
      console.log(typeof guess)      //found out it returns as string
      if (parseInt(guess) === numberToGuess) {  //== is just a bandaid, use parsing
          alert("Correct Number")
      } else {
        alert("Guess again")
      }
      
    }
    
  // This code uses jQuery, a javascript library, to run.
  // You don't need to know how this works, 
  // just that it makes the submit button function.
    $('.guessingForm').submit(function(event) {
      event.preventDefault();
      var guess = $('#js-user-guess').val();
      $('#js-user-guess').val('');
      checkGuess(guess);
    });  
  // document.ready end    
  });  
