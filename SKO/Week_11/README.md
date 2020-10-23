# Week 11

## State.Distance

![png](https://github.com/KristineGudmundsen/CodeWords/raw/master/SKO/Week_11/State.Distance.png)

[State.distance test](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_11/MajorProjectStateDistanceTest/).

Thanks to the p5.easycam examples by Thomas Diewald I discovered state.distance(), which measures the z position. Based on one of the examples, I tried to mute and unmute the sounds with state.distance(), which worked. I then used this method in my Major Project Sketch. 

## Sketch_01 week11
[Sketch_01](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_11/MajorProjectSketch10/).

I was able to play() all the sounds according to their positions, but this meant they wouldn't be in sync.

## Sketch_02 week11

[Sketch_02](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_11/MajorProjectSketch11/).

I therefor looped() all the sounds before setting the volume() in the 'ELSE IF' statement. This made the sounds in sync, but the sounds still broke as you zoomed out of the sketch. Karen suggested that I won't need an 'ELSE' as this would just cause more confusion.

## Sketch_03 week11

[Sketch_03](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_11/MajorProjectSketch12/).

In sketch 3, I muted, played() and looped() the sounds at the first plane(), and I then unmuted() all the sounds 'IF' state.distance > x. 
The sounds still 'broke' as you scrolled out. My theory was that all the sound lines needed to be put in a function, as the draw function() is a 3D space. 

## Mapping
Karen also helped me making the font size responsive to the windowWidth(), by using:

```javascript
sizeVariable=(map(width, 300, 1800, 40, 200));
//300 = min width
//1800 = max width
//40 = min font size
//200 = max font size
```

[Previous](https://github.com/KristineGudmundsen/CodeWords/tree/master/SKO/Week_10) | [Next](https://github.com/KristineGudmundsen/CodeWords/tree/master/SKO/Week_12)
