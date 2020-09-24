//Code by Kristine Gudmundsen

let text1;
let text2;
let text3;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  createEasyCam();
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
  translate(0,0,350);
  background(0);
  normalMaterial();
  lights();
  text1.text('Think Image.', 15, 110);
  texture(text1);
  plane(200,150);
  push();
  translate(20,0,75);
  text2.text('Compare it to', 15, 110);
  texture(text2);
  plane(200,150);
  pop();
  push();
  translate(-10,0,150);
  text3.text('Sound.', 15, 110);
  texture(text3);
  plane(200,150);
  pop();
}
