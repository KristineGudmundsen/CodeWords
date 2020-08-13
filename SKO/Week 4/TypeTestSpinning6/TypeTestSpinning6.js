//CodeWords workshop Thursday 13 August
//Code by Kristine

function preload() {
font2 = loadFont('data/GTFOppositTRIAL-Bold.otf');
font = loadFont('data/AmbitTRIAL-Regular.otf');
}
var spin=0; //startpoint degrees
var letterSize=24;

function setup() {
createCanvas(600,600);
background(220);
fill(0);
angleMode(DEGREES); //90 degrees
textAlign(CENTER);
frameRate(20);
}


function draw() {
fill(0);
translate(300,300); //moves text
rotate(spin); //rotate is working with variable
textFont(font2);
textSize(letterSize);
text('large',0,0);
spin+=map(mouseX,0,600,-3,3); //this will make the mouseX affect the spin direction and speed
letterSize=map(mouseY,0,600,8,72);
stroke(0);
pop();
background(220,20);



}
