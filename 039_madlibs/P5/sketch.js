// Mad Libs!
// Daniel Shiffman
// https://thecodingtrain.com/challenges/39-madlibs-generator
// https://youtu.be/ziBO-U2_t3k
// https://editor.p5js.org/codingtrain/sketches/8gVGg0VR3

var data;

var txt =
  '$$Exclamation$$! they said $$Adverb$$ as they jumped into their $$Noun$$ and flew off with their $$Adjective$$ $$PluralNoun$$.';

function setup() {
  noCanvas();
  // Tabletop.init({
  //   key: '15WyEmfu6B1UCzzqeacYnzI8lutrxF6uWvFDiSteBqTs',
  //   callback: gotData,
  //   simpleSheet: true
  // });

  // Unfortunately since 2020 tabletop.js has been deprecated
  // because of some changes that Google had made. To learn
  // more about it, visit https://github.com/jsoma/tabletop

  // In this example, the library Papa Parse has been used
  // in a very similar fashion, so do something like this
  // instead. Keep in mind that the Google Sheet link has 
  // to a CSV link, rather than a web page!
   Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vSiJDczupcvlAJxd70RJ9hZina9cqweCiTj1EkYrH_17FhFBjdMFTEY2TOMmhwGBHGR05y7QRXLNbo6/pub?output=csv', {
    download: true,
    header: true,
    complete: function(results) {
      var stuff = results.data
      data = stuff
    }
  })

  var button = createButton('generate madlib');
  button.mousePressed(generate);
}

function replacer(match, pos) {
  var entry = random(data);
  return entry[pos];
}

function generate() {
  //console.log('generate');
  var madlib = txt.replace(/\$\$(.*?)\$\$/g, replacer);
  createP(madlib);
}

// function gotData(stuff, tabletop) {
//   data = stuff;
// }
