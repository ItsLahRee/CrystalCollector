//global variables
var randomNumber;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function() {

  $(".slices").empty();

random_result = Math.floor(Math.random() * 69 + 30);  //hoisting

//New Random number generates everytime we Win or Lose
$("#result").html('This Pug Wants'+ ' ' + random_result + ' ' + 'slices!');

//A game with 4 pizza slices photos as buttions

for (var i = 0; i < 4; i++) {
  
//Every slice needs a random number between 1-12
  var random = Math.floor(Math.random() * 11) + 1;
  console.log(random);

  var slice = $("<div>");
  
      slice.attr ({
        "class":'slice',
        "data-random": random
      });

    slice.html(random);

  $(".slices").append(slice);
    }
  };

  resetAndStart();

//when clicking a slice it should add numbers up 
//untill it meets or exceeds target number

//Event delegation
$(document).on('click', ".slice", function () {
  
  var num= parseInt($(this).attr('data-random'));

  var result = num + 5;
  previous += num;

  $("#previous").html(previous);
  console.log(previous);
  
//conditional logic
  if(previous > random_result) {
    lost--;
    $("#lost").html(lost);
    previous=0;
    $("#previous").html(previous);
    resetAndStart();
  }
  else if(previous === random_result){
    win++;
    $("#win").html(win);
    previous=0;
    $("#previous").html(previous);
    resetAndStart();
  }
 
});

//If the total is = to target#, then increment win counter

//if total is > than target# then we start over, & decrement win counter
