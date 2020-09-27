//Code by Kristine Gudmundsen

//variable z for the Z-axis 
var z = 0;

let text1;
let text2;
let text3;

var sound0;
var sound1;
var sound2;
var sound3;
var sound4;

function preload() {
  sound0 = loadSound ('data/0.mp3');
  sound1 = loadSound ('data/1.mp3');
  sound2 = loadSound ('data/2.mp3');
  sound3 = loadSound ('data/3.mp3');
  sound4 = loadSound ('data/4.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  createEasyCam();
  document.oncontextmenu = () => false;
  
 // analyzer = new p5.amplitude();
  
  text1 = createGraphics(200, 200);
  text1.textSize(30);
  text1.textAlign(plane);
  text1.background(255,90);
  
  text2 = createGraphics(200, 200);
  text2.textSize(30);
  text2.textAlign(plane);
  text2.background(255,90);
  
  text3 = createGraphics(200, 200);
  text3.textSize(30);
  text3.textAlign(plane);
  text3.background(255,90);
}

function draw() {
  sound0.play();
  sound0.loop();

  translate(0,0,350);
  background(0);
  normalMaterial();
  lights();
  text1.text('Think Image.', 15, 110);
  texture(text1);
  plane(200,150);
  
  push();
  translate(20,0,100);
  text2.text('Compare it to', 15, 110);
  texture(text2);
  plane(200,150);
  pop();
  
  push();
  translate(-10,0,200);
  text3.text('Sound.', 15, 110);
  texture(text3);
  plane(200,150);
  pop();
  
  push();
  translate(20,-10,300);
  text3.text('Sound.', 15, 110);
  texture(text3);
  plane(200,150);
  pop();
}

//Need to find a way to play or unmute sounds when you're passing the planes with mousewheel.
//I can't figure out the right math, I've tried && and just "<" or ">", but it's always just one sound that plays or overwrite the others.
//The sound also breaks when I zoom out to much.
function mouseWheel() {
  if (z < 450){
    sound1.play();
    sound1.loop();
//sound1.masterVolume(1,1);
//I tried to fade in the sound with masterVolume, but that didn't work.
  }
  if (z > 450 || z < 550){
    sound2.play();
    sound2.loop();
  } 
  if (z > 550 || z < 650){
    sound3.play();
    sound3.loop();
  }
}


/*function keyPressed() {
 sound0.stop();
 sound0.noLoop();
 sound1.stop();
 sound1.noLoop();
 sound2.stop();
 sound2.noLoop();
}
*/
