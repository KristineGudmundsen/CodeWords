//Code by Kristine Gudmundsen for CodeWords 2020 week 11

let sound0;
let sound1;
let sound2;
let sound3;
let sound4;
let sound5;
let sound6;
let sound7;
let sound8;
let sound9;
let sound10;
let sound11;

let sentence;

var easycam,
  state = {
  distance: 340
  },
  x=0, y=20;

this.mouse = {
  cam : cam,
  mwheel : 0,
}
let pos = state.distance;

function preload() {
  sound0 = loadSound('data/0.mp3');
  sound1 = loadSound('data/1.mp3');
  sound2 = loadSound('data/2.mp3');
  sound3 = loadSound('data/3.mp3');
  sound4 = loadSound('data/4.mp3');
  sound5 = loadSound('data/5.mp3');
  sound6 = loadSound('data/6.mp3');
  sound7 = loadSound('data/7.mp3');
  sound8 = loadSound('data/8.mp3');
  sound9 = loadSound('data/9.mp3');
  sound10 = loadSound('data/10.mp3');
  sound11 = loadSound('data/11.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //setAttributes('antialias', true);
  easycam = createEasyCam();
  document.oncontextmenu = function() { return false; }
  sentence = ['Think image.\nCompare it to\nsound.', 'It seems possible\nto layer many\nmany many\nsounds', 'and tracks\ntogether while\nmaintaining\nlegibility.', 'The results just\nkeep getting more\ncomplex, more\ninteresting.', 'Vision seems to\nwork differently.\nOf course\ncommercial', 'images we see\neveryday on TV\nand in cinema\nare often made', 'from layers as\nwell, sometimes\nas many as\nthousands —', 'but these layers\nwork together\nto create a', 'single illusionistic\n(or super-\nillusionistic)\nspace.', 'In other words,\nthey are not\nheard as\nseparate sounds.', 'When we start\nmixing arbitrary\nimages together,', 'we quickly\ndestroy\nany meaning.']; 

  myText0 = createGraphics(windowWidth,windowHeight);
  myText0.background(255,90);
  myText0.textFont('Helvetica');
  myText0.textAlign(LEFT);
  myText0.textSize(260);
  myText0.fill(0);
  myText0.noStroke(0);
  myText0.textLeading(290);
  myText0.text(sentence[0],windowWidth/50,250);
  
  myText1 = createGraphics(windowWidth,windowHeight);
  myText1.background(255,90);
  myText1.textFont('Helvetica');
  myText1.textAlign(LEFT);
  myText1.textSize(200);
  myText1.fill(0);
  myText1.noStroke();
  myText1.textLeading(230);
  myText1.text(sentence[1],windowWidth/50,200);
  
  myText2 = createGraphics(windowWidth,windowHeight);
  myText2.background(255,90);
  myText2.textFont('Helvetica');
  myText2.textAlign(LEFT);
  myText2.textSize(200);
  myText2.fill(0);
  myText2.noStroke();
  myText2.textLeading(230);
  myText2.text(sentence[2],windowWidth/50,200);
  
  myText3 = createGraphics(windowWidth,windowHeight);
  myText3.background(255,90);
  myText3.textFont('Helvetica');
  myText3.textAlign(LEFT);
  myText3.textSize(200);
  myText3.fill(0);
  myText3.noStroke();
  myText3.textLeading(230);
  myText3.text(sentence[3],windowWidth/50,200);
  
  myText4 = createGraphics(windowWidth,windowHeight);
  myText4.background(255,90);
  myText4.textFont('Helvetica');
  myText4.textAlign(LEFT);
  myText4.textSize(200);
  myText4.fill(0);
  myText4.noStroke();
  myText4.textLeading(230);
  myText4.text(sentence[4],windowWidth/50,200);

  myText5 = createGraphics(windowWidth,windowHeight);
  myText5.background(255,90);
  myText5.textFont('Helvetica');
  myText5.textAlign(LEFT);
  myText5.textSize(200);
  myText5.fill(0);
  myText5.noStroke();
  myText5.textLeading(230);
  myText5.text(sentence[5],windowWidth/50,200);
  
  myText6 = createGraphics(windowWidth,windowHeight);
  myText6.background(255,90);
  myText6.textFont('Helvetica');
  myText6.textAlign(LEFT);
  myText6.textSize(200);
  myText6.fill(0);
  myText6.noStroke();
  myText6.textLeading(230);
  myText6.text(sentence[6],windowWidth/50,200);
  
  myText7 = createGraphics(windowWidth,windowHeight);
  myText7.background(255,90);
  myText7.textFont('Helvetica');
  myText7.textAlign(LEFT);
  myText7.textSize(200);
  myText7.fill(0);
  myText7.noStroke();
  myText7.textLeading(230);
  myText7.text(sentence[7],windowWidth/50,200);
  
  myText8 = createGraphics(windowWidth,windowHeight);
  myText8.background(255,90);
  myText8.textFont('Helvetica');
  myText8.textAlign(LEFT);
  myText8.textSize(200);
  myText8.fill(0);
  myText8.noStroke();
  myText8.textLeading(230);
  myText8.text(sentence[8],windowWidth/50,200);
  
  myText9 = createGraphics(windowWidth,windowHeight);
  myText9.background(255,90);
  myText9.textFont('Helvetica');
  myText9.textAlign(LEFT);
  myText9.textSize(200);
  myText9.fill(0);
  myText9.noStroke();
  myText9.textLeading(230);
  myText9.text(sentence[9],windowWidth/50,200);
  
  myText10 = createGraphics(windowWidth,windowHeight);
  myText10.background(255,90);
  myText10.textFont('Helvetica');
  myText10.textAlign(LEFT);
  myText10.textSize(200);
  myText10.fill(0);
  myText10.noStroke();
  myText10.textLeading(230);
  myText10.text(sentence[10],windowWidth/50,200);
  
  myText11 = createGraphics(windowWidth,windowHeight);
  myText11.background(255,90);
  myText11.textFont('Helvetica');
  myText11.textAlign(LEFT);
  myText11.textSize(260);
  myText11.fill(0);
  myText11.noStroke(0);
  myText11.textLeading(290);
  myText11.text(sentence[11],windowWidth/50,250);
}

function draw() {
  background(0);
  translate(0,0,280);
  lights();

let state = easycam.getState();
 
  push();
  translate(0,0,100);
  texture(myText0);
  noStroke();
  plane(windowWidth/10,windowWidth/14);
  pop();
  
  push();
  translate(0,0,200);
  texture(myText1);
  noStroke();
  plane(windowWidth/10,windowWidth/14);
  pop();
 
  push();
  translate(0,0,300);
  texture(myText2);
  noStroke();
  plane(windowWidth/10,windowWidth/14);
  pop();
 
  push();
  translate(0,0,400);
  texture(myText3);
  noStroke();
  plane(windowWidth/10,windowWidth/14);
  pop();

  push();
  translate(0,0,500);
  texture(myText4);
  noStroke();
  plane(windowWidth/10,windowWidth/14);
  pop();

  push();
  translate(0,0,600);
  texture(myText5);
  noStroke();
  plane(windowWidth/10,windowWidth/14);
  pop();
  
  push();
  translate(0,0,700);
  texture(myText6);
  noStroke();
  plane(windowWidth/10,windowWidth/14);
  pop();
  
  push();
  translate(0,0,800);
  texture(myText7);
  noStroke();
  plane(windowWidth/10,windowWidth/14);
  pop();

  push();
  translate(0,0,900);
  texture(myText8);
  noStroke();
  plane(windowWidth/10,windowWidth/14);
  pop();
  
  push();
  translate(0,0,1000);
  texture(myText9);
  noStroke();
  plane(windowWidth/10,windowWidth/14);
  pop();
  
  push();
  translate(0,0,1100);
  texture(myText10);
  noStroke();
  plane(windowWidth/10,windowWidth/14);
  pop();
  
  push();
  translate(0,0,1200);
  texture(myText11);
  noStroke();
  plane(windowWidth/10,windowWidth/14);
  pop();
  
  
    if(state.distance > 500 && state.distance < 501){
    sound0.setVolume();
    sound0.loop();
  } else if(state.distance > 570 && state.distance < 575){
    sound1.setVolume();
    sound1.loop();
  } else if(state.distance > 670 && state.distance < 675){
    sound2.setVolume(0.3);
    sound2.loop();
  } else if(state.distance > 770 && state.distance < 775){
    sound3.setVolume(0.4);
    sound3.loop();
  } else if(state.distance > 870 && state.distance < 875){
    sound4.setVolume(0.4);
    sound4.loop();
  } else if(state.distance > 970 && state.distance < 975){
    sound5.setVolume(0.5);
    sound5.loop();
  } else if(state.distance > 1070 && state.distance < 1075){
    sound6.setVolume(0.5);
    sound6.loop();
  } else if(state.distance > 1170 && state.distance < 1175){
    sound7.setVolume(0.5);
    sound7.loop();
  } else if(state.distance > 1270 && state.distance < 1275){
    sound8.setVolume(0.5);
    sound8.loop();
  } else if(state.distance > 1370 && state.distance < 1375){
    sound9.setVolume(0.5);
    sound9.loop();
  } else if(state.distance > 1470 && state.distance < 1475){
    sound10.setVolume(0.5);
    sound10.loop();
  } else if(state.distance > 1570 && state.distance < 1575){
    sound11.setVolume(0.5);
    sound11.loop();
  }
}

function keyPressed(){
  if (sound0.isPlaying() || sound1.isPlaying() || sound2.isPlaying() || sound3.isPlaying() || sound4.isPlaying() || sound5.isPlaying() || sound6.isPlaying() || sound7.isPlaying() || sound8.isPlaying() || sound9.isPlaying() || sound10.isPlaying() || sound11.isPlaying()){
    sound0.stop();
    sound1.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();
    sound8.stop();
    sound9.stop();
    sound10.stop();
    sound11.stop();
  }
}
