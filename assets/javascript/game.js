//PSEUDOCODE

//global variables
var randomNumber;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function() {

  $(".crystals").empty();

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

    crystal.html(random);

  $(".crystals").append(crystal);
    }
  };

  resetAndStart();

//when clicking crystal it should add numbers up 
//untill it meets or exceeds target number

//Event delegation
$(document).on('click', ".crystal", function () {
  
  var num= parseInt($(this).attr('data-random'));

  var result = num + 5;
  previous += num;
  console.log(previous);
  
//conditional logic
  if(previous > random_result) {
    lost--;
    $("#lost").html(lost);
    previous=0;
    resetAndStart();
  }
  else if(previous === random_result){
    win++;
    $("#win").html(win);
    previous=0;
    resetAndStart();
  }
 
});

//If the total is = to target#, then increment win counter

//if total is > than target# then we start over, & decrement win counter
