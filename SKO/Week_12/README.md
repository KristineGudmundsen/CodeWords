# Week 12

## Attempts

### Consultation

[Styling Demo](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketch14/)

When Andy had a look at my code to give feedback on the styling in week 11, the sound still broke. I tested a couple of my codes which worked on my computer on other devices and they only worked on mine. 

As you can see, I had to upload every new attempt to GitHub to get someone to test out and see if my code worked on their computer. Some of the codes are very similar. So I have tried to reflect on some of the major changes that got me to the final code. 

### Backup codes/MousePressed

[MousePressed Demo](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketch16/)

[MousePressed Code](https://github.com/KristineGudmundsen/CodeWords/tree/master/SKO/Week_12/MajorProjectSketchTest100)

I first made a backup code where the sounds are in the mousePressed() function. The sounds unmuted at every plane perfectly, but the user had to click every time they got to a new plane. 

```javascript
function mousePressed(){
  let state = easycam.getState();
    if(state.distance < 506){
    sound0.play();
    sound0.loop();
    sound0.setVolume(0);
    } 
    if(state.distance > 507){
    sound0.setVolume(0.5);
  }
}
```

### My Own Function

[FunctionSound Demo](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchFunctionSounds/)

[FunctionSound Code](https://github.com/KristineGudmundsen/CodeWords/tree/master/SKO/Week_12/MajorProjectSketchFunctionSounds/)

This led me to my next attempt. If I were able to get the sounds working in the mousePressed() function meant that I could use another function that wouldn't require clicking and it would still work. 

After watching some of Daniel Shiffman's tutorials on functions, I wrote my own function. 
* https://www.youtube.com/watch?v=wRHAitGzBrg
* https://www.youtube.com/watch?v=zkc417YapfE

Yet again, the GitHub link worked on my computer, but not others. 

```javascript
function draw(){
  sounds();
}

function sounds(){
  let state = easycam.getState();
  if(state.distance < 506){
    sound0.play();
    sound0.loop();
    sound0.setVolume(0);
 ```

### HUD

[FunctionSoundHUDS Demo](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchFunctionSoundsHUDS2/)

[FunctionSoundHUDS Code](https://github.com/KristineGudmundsen/CodeWords/tree/master/SKO/Week_12/MajorProjectSketchFunctionSoundsHUDS2/)

I then moved the function into easycam.HUD() which creates a 2D space within the 3D code, which allows two-dimensional objects. I thought this might help lighten the code, but it didn't work. 

```javascript
function draw(){
  easycam.beginHUD();
  sounds();
  easycam.endHUD();
}

function sounds(){
  let state = easycam.getState();
  if(state.distance < 506){
    sound0.play();
    sound0.loop();
    sound0.setVolume(0);
 ```

### MouseWheel

[MouseWheel Demo](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchMouseWheel5/)

[MouseWheel Code](https://github.com/KristineGudmundsen/CodeWords/tree/master/SKO/Week_12/MajorProjectSketchMouseWheel5/)

Going back to where I started with the mouseWheel() function seemed to actually work!! The only problem was that some of the sounds played more than one time. 


I went through every single line and removed every unnecessary line of code. I then finally managed to find the problem by changing the first state.distance from 506 to 500.1. Since the sketch didn't start at 506 but 500.1, the sounds would be triggered numerous times from start(500.1) to 506. 

```javascript
//if(state.distance < 506){
if(state.distance < 500.1){
   sound0.play();
   sound0.loop();
   sound0.setVolume(0);
   }
}
```

## Other Code Attemps

Here's a list of all the code's with minor changes that I got others to test out on their computers:

* [OnlyPlay](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchOnlyPlay/)
* [OnlyLoop](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchOnlyLoop/)
* [MousePressed1](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchBackup2/)
* [MousePressed2](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchBackup3/)
* [MousePressed3](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchBackup4/)
* [FunctionSound2](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchFunctionSounds2/).
* [FunctionSoundHUDS](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchFunctionSoundsHUDS/).
* [MouseWheel1](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchMouseWheel/)
* [MouseWheel2](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchMouseWheel2/)
* [MouseWheel3](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchMouseWheel3/)
* [MouseWheel4](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchMouseWheel4/)

## Final Code

![1](https://github.com/KristineGudmundsen/CodeWords/raw/master/SKO/Week_12/KristineGudmundsen_HeroImage5.jpg)
![2](https://github.com/KristineGudmundsen/CodeWords/raw/master/SKO/Week_12/KristineGudmundsen_HeroImage2.jpg)
### [Final Code Grey](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/CodeWords1/) | [Final Code Blue](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/CodeWords0/)

I have never experienced such ups and downs with designing as when coding. The feeling of finally solving my everlasting sound problem was the best feeling. I have been so close to giving up the sound, but through what felt like hundreds of codes that each led me one step closer to the solution, I was able to finally solve it. I now feel like I'm an expert at my code and the process of problem-solving have taught me a great deal of debugging and looking for solutions through testing(testing, testing), tutorials, references and reaching out for help.

As I'm not a hundred per cent sure of the colours, I still want to experiment with colours some more and I might submit a new code to the website. 

## Soft Launch

I'm deeply impressed by what everyone managed to produce. All the codes are so diverse and equally interesting and impressive. Starting with little or no coding knowledge, we have all come a long way this semester thanks to Andy's and Karen's teaching. 

[Previous](https://github.com/KristineGudmundsen/CodeWords/tree/master/SKO/Week_11) | [Landing Page](https://github.com/KristineGudmundsen/CodeWords)
