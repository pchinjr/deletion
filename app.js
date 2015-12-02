var characters = []; //empty array to hold the split characters
 
$('#content').on('keyup', function(){
  var entry = $("#content").val();
  var splitt = entry.split("");
  characters = splitt;
  removeTimer.play();
});

$('#content').on('keypress', function(){
  removeTimer.stop();
});

var removeTimer = $.timer( function() {
  characters.shift(); //removes first element from array
  $('#content').val( characters.join("") );
}, 3000, false);

autosize(document.querySelectorAll('textarea'));

// form action
/*$("form").submit( function (event) {
  var entry = $("#input").val(); //grabs the text in the input box
  var charCount = $("#input").val().split(''); //splits the input into an array of characters
  var emptySpace = [" "]; //array to hold an empty space
  var charTotal = charCount.length; //length of array 
  
  Array.prototype.push.apply(characters, charCount); //puts the input array into the empty array
  Array.prototype.push.apply(characters, emptySpace); //adds a space to the characters array
  
  event.preventDefault();
  $("#input").val(" "); //clear input box
  $('#content').html( '<h3>' + characters.join("") + '<span class="typed-cursor">|</span></h3>' );
  removeTimer.play();
});*/


