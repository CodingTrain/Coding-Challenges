// AFINN 11 Sentiment Analysis
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/
// Part 1: https://youtu.be/uw3GbsY_Pbc
// Part 2: https://youtu.be/VV1JmMYceJw

// https://editor.p5js.org/codingtrain/sketches/aNeMdpy-b

var afinn;

function preload() {
  // Using an edited version of AFINN111 list to remove NSFW and offensive words
  afinn = loadJSON('afinn111-edited.json');
}

function setup() {
  noCanvas();
  console.log(afinn);

  var txt = select('#txt');
  txt.input(typing);

  function typing() {
    var textinput = txt.value();
    var words = textinput.split(/\W/);
    console.log(words);
    var scoredwords = [];
    var totalScore = 0;
    for (var i = 0; i < words.length; i++) {
      var word = words[i].toLowerCase();
      if (afinn.hasOwnProperty(word)) {
        var score = afinn[word];
        console.log(word, score);
        totalScore += Number(score);
        scoredwords.push(word + ': ' + score + ' ');
      }
    }
    var scorePar = select('#scoreP');
    scorePar.html('score: ' + totalScore);
    var comp = select('#comparativeP');
    comp.html('comparative: ' + totalScore / words.length);
    var wordlist = select('#wordlistP');
    wordlist.html(scoredwords);

    //console.log(txt.value());
  }
}

function draw() {}
