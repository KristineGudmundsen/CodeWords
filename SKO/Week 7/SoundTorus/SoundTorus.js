//Code by Kristine Gudmundsen

var song;

function preload(){
 song = loadSound ('data/lucky_dragons_-_power_melody.mp3');
 //song2 = loadSound('data/After Hours.mp3');

}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
   analyzer = new p5.Amplitude();
   analyzer.setInput(song);
}

function draw() {
 var volume = analyzer.getLevel();
 volume*=100;
 background(0);
 normalMaterial();
 push();
 rotateX(volume, frameCount*0.01);
 rotateY(frameCount*0.01);
 rotateY(frameCount*0.01);
 torus(volume*10,25);
 pop();
}
 
 function mousePressed(){
   if (song.isPlaying()){
     song.stop();
     song.noLoop();
  }
   else {
     song.play();
     song.loop();
  }
}
