# Week 10

[Sketch](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_10/MajorProjectSketch05/).

![png1](https://github.com/KristineGudmundsen/CodeWords/raw/master/SKO/Week_10/CodeText.png)

I had issues getting the text to be displayed at the planes properly. 
I created an array() with the sentences, and I wanted the texture() to call the sentences from the array on every plane(). 
What happened was that all the sentences showed up on all the planes().  

## Sound Issue

```javascript
function mouseWheel(event){
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
```

Even though some of my trials make sense won't work and I feel my attempts is a shot in the dark, I believe the two libraries I use (p5.easycam and p5.sound) are not working well together. Since I am using WEBGL and only 3D objects would work in the code, to play() and loop() sounds in the draw() function creates problems. 

## Google Spreadsheet

![png2](https://github.com/KristineGudmundsen/CodeWords/raw/master/SKO/Week_10/SpreadSheet.png)

After emailing and consultation in class, Karen directed me to the p5.easycam references and the mouse wheel event delta. I still needed to figure out the event and where to put the event. 

[Previous](https://github.com/KristineGudmundsen/CodeWords/tree/master/SKO/Week_09) | [Next](https://github.com/KristineGudmundsen/CodeWords/tree/master/SKO/Week_11)
