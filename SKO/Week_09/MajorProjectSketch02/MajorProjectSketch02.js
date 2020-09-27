//Code by Kristine Gudmundsen

let sound0;
let sound1;
let sound2;
let sound3;
/*
let sound4;
let sound5;
let sound6;
let sound7;
let sound8;
let sound9;
let sound10;
let sound11;
*/
let text;

let pos = 0;

function preload(){
  sound0 = loadSound('data/0.mp3');
  sound1 = loadSound('data/1.mp3');
  sound2 = loadSound('data/2.mp3');
  sound3 = loadSound('data/3.mp3');
  /* Had to remove some of the files to get the sketch to work on github
  sound4 = loadSound('data/4.mp3');
  sound5 = loadSound('data/5.mp3');
  sound6 = loadSound('data/6.mp3');
  sound7 = loadSound('data/7.mp3');
  sound8 = loadSound('data/8.mp3');
  sound9 = loadSound('data/9.mp3');
  sound10 = loadSound('data/10.mp3');
  sound11 = loadSound('data/11.mp3');
  */
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  createEasyCam();
  document.oncontextmenu = () => false;
  
  text = createGraphics(windowWidth,windowHeight);
  text.background(255,90);
  text.textFont('Arial');
  text.textAlign(CENTER);
  text.textSize(400);
  text.fill(0);
  text.noStroke();
  text.text('Hey Test', width * 0.5, height * 0.5);
}

function draw() {
  background(0);
  translate(0,0,350);
  for(let z = 0; z < 12; z++){
    push();
    translate(0,0,100*z);
    texture(text);
    noStroke();
    plane(200,150);
    pop();
  }
  sound0.loop(pos)*350;
}
//I want the sounds to start playing at the postitions of the planes in the nested loop. 
//But it seems that all the sounds starts playing at the same time and that they're looping over and over each other. 
//One thing I believe I'm doing wrong is the numbers. 
//Even though I'm using the numbers from the nested loop on the Z-axis in the mouseWheel function doesn't mean that these numbers will work here, am I right?
//Do I need to link the nested loop and what's happening in the mouseWheel function somehow?
function mouseWheel(event){
  pos += event.delta;
  sound1.loop(pos)*450;
  sound2.loop(pos)*550;
  sound3.loop(pos)*650;
}
