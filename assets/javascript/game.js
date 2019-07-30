//PSEUDOCODE

//global variables
var randomNumber;
var lost;
var win;


//Random Number Generator
random_result = Math.floor(Math.random() * 69 + 30);  //hoisting

//New Random number generates everytime we Win or Lose
$("#result").html('Random Result: '+ random_result);

//A game with 4 crystals photos as buttions
//Every crystal needs a random number between 1-12
for (var i = 0; i < 4; i++) {

  var random = Math.floor(Math.random() * 11) + 1;
  console.log(random);

  var crystal = $("<div>");
  
      crystal.attr ({
        "class":'crystal',
        "data-random": random
      });
  
  $(".crystals").append(crystal);
    }

//when clicking crystal it should add numbers up 
//untill it meets or exceeds target number
$(".crystal").on('click', function () {

  console.log($(this).attr('data-random'));
   
});

//If the total is = to target#, then increment win counter

//if total is > than target# then we start over, & decrement win counter
