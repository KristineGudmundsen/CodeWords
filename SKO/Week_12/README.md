# Week 12

## Attempts

### Consultation

[Styling](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketch14/).

When Andy had a look at my code to give feedback in week 11, the sound still broke. I tested a couple of my codes which worked on my computer on other devices and they only worked on mine. 

For every new attempt, I uploaded it to GitHub to get someone to look at it. 

[Test1000000](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketch16/).

[OnlyPlay](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchOnlyPlay/).

[OnlyLoop](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchOnlyLoop/).

### Backup codes/MousePressed

[Backup2](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchBackup2/).

[Backup3](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchBackup3/).

[Backup4](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchBackup4/).

[mousePressed](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchTest100/).

I first made a backup code where the sounds are in the mousePressed() function. The sounds unmuted at every plane perfectly, but the user had to click every time they got to a new plane. 


### My Own Function

[FunctionSound](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchFunctionSounds/).

This led me to my next attempt. If I were able to get the sounds working in the mousePressed() function meant that I could use another function that wouldn't require clicking and it would still work. 

After watching some of Daniel Shiffman's tutorials on functions, I wrote my own function. 
https://www.youtube.com/watch?v=wRHAitGzBrg
https://www.youtube.com/watch?v=zkc417YapfE
Yet again, the GitHub link worked on my computer, but not others. 

### HUD

[FunctionSoundHUDS](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchFunctionSoundsHUDS/).

[FunctionSound2](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchFunctionSounds2/).

[FunctionSoundHUDS2](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchFunctionSoundsHUDS2/).

I then moved the function into easycam.HUD() which creates a 2D space within the 3D code, which allows two-dimensional objects. I thought this might help lighten the code, but it didn't work. 


### MouseWheel

[MouseWheel](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchMouseWheel/).

[MouseWheel2](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchMouseWheel2/).

[MouseWheel3](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchMouseWheel3/).

[MouseWheel4](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchMouseWheel4/).

[MouseWheel5](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/MajorProjectSketchMouseWheel5/).


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

## Final Code

[Grey](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/CodeWords1/).

[Blue](https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/CodeWords0/).

I have never experienced such ups and downs with designing as when coding. The feeling of finally solving my everlasting sound problem was the best feeling. I have been so close to giving up the sound, but through what felt like hundreds of codes that each led me one step closer to the solution, I was able to finally solve it. I now feel like I'm an expert at my code and the process of problem-solving have taught me a great deal of debugging and looking for solutions through testing(testing, testing), tutorials, references and reaching out for help.

As I'm not a hundred per cent sure of the colours, I still want to experiment with colours some more and I might submit a new code to the website. 

I can honestly say that this has been the most instructive and interesting Studio, and it has been a perfect last semester of my bachelor. I am grateful I got the chance to learn code before graduating. Thank you for all the code sessions, knowledge sharing, feedback, help and playful assignments. 



