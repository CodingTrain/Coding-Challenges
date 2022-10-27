// Chat Bot
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/challenges/80-voice-chatbot-with-p5speech
// https://youtu.be/iFTgphKCP9U

// Code from Challenge: https://editor.p5js.org/codingtrain/sketches/QcY2Z36mJ

// This code has been adapted to use promises instead of callbacks since callbacks are deprecated in RiveScript.
function setup() {
  noCanvas();
  let speech = new p5.Speech();
  let speechRec = new p5.SpeechRec("en-US", gotSpeech);
  let continuous = true;
  let interim = false;
  speechRec.start(continuous, interim);

  let bot = new RiveScript();

  // changed callbacks to .then and .catch
  bot.loadFile("brain.rive").then(brainReady).catch(brainError);

  function brainReady() {
    console.log("Chatbot ready!");
    bot.sortReplies();
  }

  function brainError() {
    console.log("Chatbot error!");
  }

  // let button = select('#submit');
  // let user_input = select('#user_input');
  // let output = select('#output');

  // button.mousePressed(chat);

  // Using async and await
  async function gotSpeech() {
    if (speechRec.resultValue) {
      let input = speechRec.resultString;
      // user_input.value(input);
      let reply = await bot.reply("local-user", input);
      speech.speak(reply);
      // output.html(reply);
    }
  }

  // function chat() {
  //   let input = user_input.value();
  // }
}
