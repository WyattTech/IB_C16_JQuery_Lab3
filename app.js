$(document).ready(function() {
  $("#keyboard-upper-container").hide();
  $("#yellow-block").hide();
});

$(document).keydown( function(e) {
  if(e.keyCode == 16) {
      $("#keyboard-lower-container").hide();
      $("#keyboard-upper-container").show();
  };
});

$(document).keyup( function(e) {
  if (e.keyCode == 16) {
      $("#keyboard-upper-container").hide();
      $("#keyboard-lower-container").show();
  };
});

$(document).keydown( function(e) {
  if (e.keyCode == 16) {
      e.preventDefault();
  } else {
      // console.log(e.key.charCodeAt());
      $(`#${e.key.charCodeAt()}`).css('background-color', 'yellow');

  };

});

$(document).keyup( function(e) {
  $(`#${e.key.charCodeAt()}`).css('background-color', '');
});

let sentences = [
  'ten ate neite ate nee enet ite ate inet ent eate',
  'Too ato too nOt enot one totA not anot tOO aNot',
  'oat itain oat tain nate eate tea anne inant nean',
  'itant eate anot eat nato inate eat anot tain eat', 
  'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let lettersIndex = 0;
let sentenceIndex = 0;
let sentence;
let sentEnd;
let letters;
let targLet;
let checkLetters;

printSentence();

$(document).keypress( function() {

  typeLetters();
  feedback();

});

function printSentence() {

  sentence = sentences[sentenceIndex];
  letters = sentence.split('', sentence.length);
  checkLetters = letters;
  console.log(sentence);
  console.log(letters);
  lettersIndex = 0;
  do {
      $("#sentence").append(`<span id="letters${lettersIndex}">${letters[lettersIndex]}</span>`);
      lettersIndex++;
  } while( lettersIndex < sentence.length );
  lettersIndex = 1;
  sentenceIndex++;
  $(`#letters${[0]}`).css("background-color", "yellow");
  $("#target-letter").append(`<span id="target">${letters[0]}</span>`);

};

function typeLetters() {

  targetLetter();
  $(`#letters${lettersIndex}`).css("background-color", "yellow");
  console.log(letters[lettersIndex]);
  if ( lettersIndex > 0 ) {
      $(`#letters${lettersIndex}`).prev().css("background-color", "white");
  };    
  
  lettersIndex++;
  console.log("+++" + lettersIndex );
  sentEnd = lettersIndex - 1;

  if ( sentence.length === lettersIndex - 1 ) {
      $("#sentence").empty();
      printSentence();
  };
};

function targetLetter() {

  $("#target-letter").empty();
  if ( letters[lettersIndex] === ' ' ) {
      $("#target-letter").append(`<span id="target">[ SPACE ]</span>`);
  } else if ( lettersIndex < sentence.length ) {
      $("#target-letter").append(`<span id="target">${letters[lettersIndex]}</span>`);
  };

};

function feedback() {
  $(document).keypress( function() {
      if ( letters[lettersIndex] == $(`#letters${lettersIndex}`).keypress() ) {
          $("#feedback").empty();
          $("#feedback").append(`<span class="glyphicon glyphicon-ok"></span>`);
      } else if ( letters[lettersIndex] != e.key.charCodeAt() ) {
          $("#feedback").empty();
          $("#feedback").append(`<span class="glyphicon glyphicon-remove"></span>`);
      };
  });
};
