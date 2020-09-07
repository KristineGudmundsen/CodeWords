//K by Kristine

function setup() {
createCanvas(400,400);
background(0);
}


function draw() {
stroke(random(150,200));
strokeWeight(mouseX,mouseY);
line(90,250,275,50);
triangle(100,200,275,350,275,300);
fill(random(150,200));
ellipse(100,200,50,300);
}
