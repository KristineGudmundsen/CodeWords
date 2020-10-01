//Code by Kristine Gudmundsen

let sound0;
let sound1;
let sound2;
let sound3;
/*let sound4;
let sound5;
let sound6;
let sound7;
let sound8;
let sound9;
let sound10;
let sound11;
*/
//let soundList;

let text;
words = ['Think image.\nCompare it to\nsound.', 'It seems possible\nto layer many\nmany many\nsounds', 'and tracks together while\nmaintaining legibility.', 'The results just keep getting more complex, more interesting.', 'Vision seems to work differently.', 'Of course commercial images we see everyday on TV and in cinema are often', 'made from layers as well, sometimes as many as thousands —', 'but these layers work together to create', 'a single illusionistic (or super-illusionistic) space.', 'In other words, they are not heard as separate sounds.', 'When we start mixing arbitrary images together,', 'we quickly destroy any meaning.']; 
let colorList;

function preload(){
  sound0 = loadSound('data/0.mp3');
  sound1 = loadSound('data/1.mp3');
  sound2 = loadSound('data/2.mp3');
  sound3 = loadSound('data/3.mp3');
  /*sound4 = loadSound('data/4.mp3');
  sound5 = loadSound('data/5.mp3');
  sound6 = loadSound('data/6.mp3');
  sound7 = loadSound('data/7.mp3');
  sound8 = loadSound('data/8.mp3');
  sound9 = loadSound('data/9.mp3');
  sound10 = loadSound('data/10.mp3');
  sound11 = loadSound('data/11.mp3');
  */
 // soundList = loadSound(['data/0.mp3', 'data/1.mp3', 'data/2.mp3', 'data/3.mp3', 'data/4.mp3', 'data/5.mp3', 'data/6.mp3', 'data/7.mp3', 'data/8.mp3', 'data/9.mp3', 'data/10.mp3', 'data/11.mp3']);
}

function setup() {
  colorMode(HSB,360,100,100,100);
  colorList = [color(20,60,100,30), color(30,90,100,90), color(25,70,100,90), color(120,60,40,40), color(360,20,100,60), color(20,15,100,60), color(20,40,100,80), color(10,85,100,60), color(30,60,90,40), color(30,70,80,60), color(30,60,50, 90), color(40,50,100,80)];
  createCanvas(windowWidth, windowHeight, WEBGL);
  createEasyCam();
  document.oncontextmenu = () => false;
  
  text = createGraphics(windowWidth,windowHeight);
  text.background(255,90);
  text.textFont('Arial');
  text.textAlign(RIGHT*1);
  text.textSize(250);
  text.fill(0);
  text.noStroke();
  text.textLeading(300);
  //text.text(words[0],30, 250);
}

function draw() {
  background(0);
  translate(0,0,350);
  for(let z = 0; z < 12; z++){
    push();
    translate(0,0,100*z);
    texture(text);
    text.text(words[z],20, 250);
    noStroke();
    //fill(colorList[z]);
    plane(200,150);
    pop();
  }
}
// I've commented out my sound trials cause they're not working.
//I want the sounds to start playing at the postitions of the planes in the nested loop.

//function keyPressed(){
//  sound11.loop();
//}

/*function mouseWheel(event){
  let scroll = 0;
   if (scroll > -350 && scroll < 0) {
      sound0.play();
      sound0.loop();
     } else {
      sound1.play();
      sound1.loop();
    }
  
  push();
  translate(0,0,350);
  sound0.loop();
  sound0.soundMode('sustain');
  pop();
  push();
  translate(0,0,100);
  sound1.loop();
  sound1.soundMode('sustain');
  pop();
  push();
  translate(0,0,100);
  sound2.loop();
  sound2.soundMode('sustain');
  pop();
  
  var z = 0;
  z += event.delta;
  sound0.loop(z*350);
  sound0.playMode('sustain');
  sound1.loop(z*450);
  sound1.playMode('sustain');
  sound2.loop(z*550);
  sound2.playMode('sustain');  
  sound3.loop(z*650);
  sound3.playMode('sustain');
}

*/
