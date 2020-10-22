//Original Code by Thomas Diewald
//Edited by Kristine Gudmundsen
//Test for CodeWords 2020

let sound0;

var easycam,
  state = {
  distance: 340,
  center  : [5, 3, -13],
  rotation: [0.3, -0.4, -0.1, 0.85]
  },
  x=0, y=20;

this.mouse = {
  cam : cam,
  mwheel : 0,
}
let pos = state.distance;

function preload() {
  sound0 = loadSound('data/0.mp3');
  myFont = loadFont('data/Roboto-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  easycam = createEasyCam();
  document.oncontextmenu = function() { return false; }

  // use the loaded font
  textFont(myFont);
  textSize(16);
  stroke(50,50,52);
  strokeWeight(0.5);
}

function draw() {
  // 3D section
  background(32);
  lights();

  // 2D screen-aligned rendering section
  easycam.beginHUD();
    noLights();
    let state = easycam.getState();

    // Render the labels
    fill(69,161,255);
    text("Distance:",x+35,y+25);
    text("Center:  ",x+35,y+25+20);
    text("Rotation:",x+35,y+25+40);
    text("Framerate:",x+35,y+25+60);

    // Render the state numbers
    fill(69,161,255);
    text(nfs(state.distance, 1, 2),x+125,y+25);
    text(nfs(state.center,   1, 2),x+125,y+25+20);
    text(nfs(state.rotation, 1, 3),x+125,y+25+40);
    text(nfs(frameRate(),    1, 2),x+125,y+25+60);
  easycam.endHUD();
  sound0.loop();
  
  if(state.distance < 500){
    sound0.setVolume(0);
  } else if(state.distance > 500){
    sound0.setVolume(0.5);
    normalMaterial();
    sphere(50);
  }
}
