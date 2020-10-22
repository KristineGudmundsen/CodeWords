# Week 9

## Digital prototyping
![png](https://github.com/KristineGudmundsen/CodeWords/raw/master/SKO/Week_09/LayersDemo.png)

I divided up the text while being mindful of not creating too many layers. I ended up with 12 layers, which meant I also needed 12 different sound layers.

## Code

Text as Texture:
Since p5.easycam uses WEBGL and only allows 3D objects, I had to create planes() and use text as texture. 

MouseWheel:
Since the reader uses the mouse wheel to zoom out and navigate in the sketch, it seemed logical to use the mouseWheel() function to trigger the sounds. 

## Sketch_01
[Sketch 1](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_09/MajorProjectSketch01/).
I looped the planes() manually to see how the planes() on different X and Y positions would look like. 

I used the same z-axis numbers from the nested loop in an 'IF's' statements that would trigger the sounds. This didn't work. 

## Sketch_02
[Sketch 2](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_09/MajorProjectSketch02/).
A more efficient way was to create a nested loop for the planes(). 

For the sounds, I declared a Position that would trigger the sounds. I also used 'pos += event.delta;', but this wouldn't work either because I didn't write the event anywhere?
