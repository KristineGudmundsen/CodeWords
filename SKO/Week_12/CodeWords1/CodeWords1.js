//Code by Kristine Gudmundsen for CodeWords 2020.
//Click once to start and scroll out to read and listen.

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

let myFont;
let sentence;
var sizeVariable;
var leadingVariable;
var positionVariable;
var dimensionsVariable;

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
  
  myFont = loadFont('data/DegularDisplay-Regular.otf');
}

function setup() {    
  createCanvas(windowWidth, windowHeight, WEBGL);
  easycam = createEasyCam();
  sentence = ['Think image.\nCompare\nit to\nsound.', 'It seems possible\nto layer many\nmany many\nsounds', 'and tracks\ntogether while\nmaintaining\nlegibility.', 'The results just\nkeep getting\nmore complex,\nmore interesting.', 'Vision seems to\nwork differently.\nOf course\ncommercial', 'images we see\neveryday on TV\nand in cinema\nare often made', 'from layers as\nwell, sometimes\nas many as\nthousands —', 'but these\nlayers work\ntogether to\ncreate a', 'single illusionistic\n(or super-\nillusionistic)\nspace.', 'In other words,\nthey are not\nheard as\nseparate sounds.', 'When we\nstart mixing\narbitrary images\ntogether,', 'we quickly\ndestroy\nany\nmeaning.']; 
  let colorList;
  colorMode(HSB,360,100,100,100);
  colorList = [color(55,5,100,40), color(55,5,100,40), color(55,5,100,40), color(55,5,90,40), color(55,5,80,40), color(55,5,70,40), color(55,5,60,40), color(55,5,50,40), color(55,5,40,40), color(55,5,30,40), color(55,5,20,40), color(55,5,0,40)];
  sizeVariable=(map(width, 300, 1800, 34, 200));
  leadingVariable=(map(height, 550, 1400, 26, 350));
  positionVariable=(map(height, 550, 1400, 26, 300));
  dimensionsVariable=(map(height, 550, 1400, height/3, height+300));
  
  myText0 = createGraphics(width/1.25,dimensionsVariable);
  myText0.background(colorList[0]);
  myText0.textFont(myFont);
  myText0.textAlign(LEFT);
  myText0.textSize(sizeVariable);
  myText0.fill(0);
  myText0.noStroke(0);
  myText0.textLeading(leadingVariable);
  myText0.text(sentence[0],width/51,positionVariable);
  
  myText1 = createGraphics(width/1.25,dimensionsVariable);
  myText1.background(colorList[1]);
  myText1.textFont(myFont);
  myText1.textAlign(LEFT);
  myText1.textSize(sizeVariable);
  myText1.fill(0);
  myText1.noStroke();
  myText1.textLeading(leadingVariable);
  myText1.text(sentence[1],windowWidth/51,positionVariable);
  
  myText2 = createGraphics(width/1.25,dimensionsVariable);
  myText2.background(colorList[2]);
  myText2.textFont(myFont);
  myText2.textAlign(LEFT);
  myText2.textSize(sizeVariable);
  myText2.fill(0);
  myText2.noStroke();
  myText2.textLeading(leadingVariable);
  myText2.text(sentence[2],windowWidth/51,positionVariable);
  
  myText3 = createGraphics(width/1.25,dimensionsVariable);
  myText3.background(colorList[3]);
  myText3.textFont(myFont);
  myText3.textAlign(LEFT);
  myText3.textSize(sizeVariable);
  myText3.fill(0);
  myText3.noStroke();
  myText3.textLeading(leadingVariable);
  myText3.text(sentence[3],windowWidth/51,positionVariable);
  
  myText4 = createGraphics(width/1.25,dimensionsVariable);
  myText4.background(colorList[4]);
  myText4.textFont(myFont);
  myText4.textAlign(LEFT);
  myText4.textSize(sizeVariable);
  myText4.fill(0);
  myText4.noStroke();
  myText4.textLeading(leadingVariable);
  myText4.text(sentence[4],windowWidth/51,positionVariable);

  myText5 = createGraphics(width/1.25,dimensionsVariable);
  myText5.background(colorList[5]);
  myText5.textFont(myFont);
  myText5.textAlign(LEFT);
  myText5.textSize(sizeVariable);
  myText5.fill(0);
  myText5.noStroke();
  myText5.textLeading(leadingVariable);
  myText5.text(sentence[5],windowWidth/51,positionVariable);
  
  myText6 = createGraphics(width/1.25,dimensionsVariable);
  myText6.background(colorList[6]);
  myText6.textFont(myFont);
  myText6.textAlign(LEFT);
  myText6.textSize(sizeVariable);
  myText6.fill(0);
  myText6.noStroke();
  myText6.textLeading(leadingVariable);
  myText6.text(sentence[6],windowWidth/51,positionVariable);
  
  myText7 = createGraphics(width/1.25,dimensionsVariable);
  myText7.background(colorList[7]);
  myText7.textFont(myFont);
  myText7.textAlign(LEFT);
  myText7.textSize(sizeVariable);
  myText7.fill(0);
  myText7.noStroke();
  myText7.textLeading(leadingVariable);
  myText7.text(sentence[7],windowWidth/51,positionVariable);
  
  myText8 = createGraphics(width/1.25,dimensionsVariable);
  myText8.background(colorList[8]);
  myText8.textFont(myFont);
  myText8.textAlign(LEFT);
  myText8.textSize(sizeVariable);
  myText8.fill(0);
  myText8.noStroke();
  myText8.textLeading(leadingVariable);
  myText8.text(sentence[8],windowWidth/51,positionVariable);
  
  myText9 = createGraphics(width/1.25,dimensionsVariable);
  myText9.background(colorList[9]);
  myText9.textFont(myFont);
  myText9.textAlign(LEFT);
  myText9.textSize(sizeVariable);
  myText9.fill(0);
  myText9.noStroke();
  myText9.textLeading(leadingVariable);
  myText9.text(sentence[9],windowWidth/51,positionVariable);
  
  myText10 = createGraphics(width/1.25,dimensionsVariable);
  myText10.background(colorList[10]);
  myText10.textFont(myFont);
  myText10.textAlign(LEFT);
  myText10.textSize(sizeVariable);
  myText10.fill(0);
  myText10.noStroke();
  myText10.textLeading(leadingVariable);
  myText10.text(sentence[10],windowWidth/51,positionVariable);
  
  myText11 = createGraphics(width/1.25,dimensionsVariable);
  myText11.background(colorList[11]);
  myText11.textFont(myFont);
  myText11.textAlign(LEFT);
  myText11.textSize(sizeVariable);
  myText11.fill(0);
  myText11.noStroke(0);
  myText11.textLeading(leadingVariable);
  myText11.text(sentence[11],windowWidth/51,positionVariable);
  
  amplitude = new p5.Amplitude();
}

function draw() {
  background(0);
  translate(0,0,280);
 
  push();
  translate(0,0,100);
  texture(myText0);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,200);
  texture(myText1);
  noStroke();
  plane(width/10,width/14);
  pop();
 
  push();
  translate(0,0,300);
  texture(myText2);
  noStroke();
  plane(width/10,width/14);
  pop();
 
  push();
  translate(0,0,400);
  texture(myText3);
  noStroke();
  plane(width/10,width/14);
  pop();

  push();
  translate(0,0,500);
  texture(myText4);
  noStroke();
  plane(width/10,width/14);
  pop();

  push();
  translate(0,0,600);
  texture(myText5);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,700);
  texture(myText6);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,800);
  texture(myText7);
  noStroke();
  plane(width/10,width/14);
  pop();

  push();
  translate(0,0,900);
  texture(myText8);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,1000);
  texture(myText9);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,1100);
  texture(myText10);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,1200);
  texture(myText11);
  noStroke();
  plane(width/10,width/14);
  pop();
}

function mouseWheel(){
  let state = easycam.getState();
  if(state.distance < 500.1){
    sound0.loop();
    sound0.setVolume(0);
    sound1.loop();
    sound1.setVolume(0);
    sound2.loop();
    sound2.setVolume(0);
    sound3.loop();
    sound3.setVolume(0);
    sound4.loop();
    sound4.setVolume(0);
    sound5.loop();
    sound5.setVolume(0);
    sound6.loop();
    sound6.setVolume(0);
    sound7.loop();
    sound7.setVolume(0);
    sound8.loop();
    sound8.setVolume(0);
    sound9.loop();
    sound9.setVolume(0);
    sound10.loop();
    sound10.setVolume(0);
    sound11.loop();
    sound11.setVolume(0);
  } 
   if(state.distance > 507){
    sound0.setVolume(0.5);
  }
  if(state.distance > 570){
    sound1.setVolume(0.5);
  }
  if(state.distance > 670){
    sound2.setVolume(0.5);
  }
  if(state.distance > 770){
    sound3.setVolume(0.5);
  }
  if(state.distance > 870){
    sound4.setVolume(0.5);
  }
  if(state.distance > 907){
    sound5.setVolume(0.5);
  }
  if(state.distance > 1070){
    sound6.setVolume(0.5);
  }
  if(state.distance > 1170){
    sound7.setVolume(0.5);
  }
  if(state.distance > 1270){
    sound8.setVolume(0.5);
  }
  if(state.distance > 1370){
    sound9.setVolume(0.7);
  }
  if(state.distance > 1470){
    sound10.setVolume(1);
  }
  if(state.distance > 1570){
    sound11.setVolume(0.5);
  }
}
