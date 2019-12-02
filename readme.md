## FlappyBirdJS

[Live Link](https://jbotoro.github.io/FlappyBirdJS/)

![start screen](https://github.com/jbotoro/markdown_images/blob/master/start%20screen%20flappy.png)

### Inspiration

FlappyBirdJS is a re-creation of the famous mobile game but with a small twist, it was written solely using JavaScript and uses Canvas for its 2D rendering.

### How to Play

Guide the bird through the obstacles (pipes) while avoiding colliding with the ground or the pipes themselves. To flap the wings of the bird simply click on the screen, find the right timing of clicks to guide the bird through the obstacles safely.

### Features

#### 2D Rendering & Sprite-ing
All rendering is done utilizing HTML5 and Canvas to draw the various elements of the game (like the background, foreground, bird etc.)


All elements of the canvas were drawn using various iterations of this same logic
```javascript
const canvas = document.getElementById("flappybird");
const context = canvas.getContext("2d");

const gameImage = new Image();
gameImage.src = "/FlappyBirdJS/images/sprite.png";

draw: function() {
        context.drawImage(gameImage, this.sX, this.sY, this.w, this.h, 
            this.x, this.y, this.w, this.h)
        context.drawImage(gameImage, this.sX, this.sY, this.w, this.h, 
            this.x + this.w , this.y, this.w, this.h)
    }
```

#### High Score
  Current High Score for the game is saved in the localstorage as "best" and after the game is over the current "best" is displayed as the current high score.

 ```javascript
 
    score.best = Math.max(score.value, score.best);
    localStorage.setItem("best", score.best);
 
    best: parseInt(localStorage.getItem("best")) || 0
 ```
 
 ![end screen & best score](https://github.com/jbotoro/markdown_images/blob/master/end%20screen%20flappy.png)
#### Audio
All audio playing is done using JavaScript's HTMLAudioElement API.

All audio used was implemented in a similar way to the following code for the Flap audio file.

```javascript
const flapAudio = new Audio();
flapAudio.src = '/FlappyBirdJS/audio/sfx_flap.wav';

case state.game:
    bird.flap();
    flapAudio.play();
    break;
```
