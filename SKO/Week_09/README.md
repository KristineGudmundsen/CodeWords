# Week 9

## Digital prototyping
![png](https://github.com/KristineGudmundsen/CodeWords/raw/master/SKO/Week_09/LayersDemo.png)

I divided up the text while being mindful of not creating too many layers. I ended up with 12 layers, which meant I also needed 12 different sound layers.

## Code

### Text as Texture
Since p5.easycam uses WEBGL and only allows 3D objects, I had to create planes() and use text as texture. 

```javascript
  text = createGraphics(windowWidth,windowHeight);
  text.background(255,90);
  text.textFont('Arial');
  text.textAlign(CENTER);
  text.textSize(400);
  text.fill(0);
  text.noStroke();
  text.text('Hey Test', width * 0.5, height * 0.5);
```

### MouseWheel
Since the reader uses the mouse wheel to zoom out and navigate in the sketch, it seemed logical to use the mouseWheel() function to trigger the sounds. 

### Sketch_01
[Sketch1](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_09/MajorProjectSketch01/)

I looped the planes() manually to see how the planes() on different X and Y positions would look like. I also called the text in the draw() function, which meant that the text would draw over each other and look pixelated.

```javascript
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
```
I used the same z-axis numbers from the nested loop in an 'IF's' statements that would trigger the sounds. This didn't work. 

```javascript
function mouseWheel() {
  if (z < 450){
    sound1.play();
    sound1.loop();
```

### Sketch_02
[Sketch2](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_09/MajorProjectSketch02/)

A more efficient way was to create a nested loop for the planes(). 

```javascript
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
 ```
For the sounds, I declared a Position that would trigger the sounds. I also used 'pos += event.delta;', but this wouldn't work either because I didn't write the event anywhere?

```javascript
function mouseWheel(event){
  pos += event.delta;
  sound1.loop(pos)*450;
  sound2.loop(pos)*550;
  sound3.loop(pos)*650;
}
 ```

