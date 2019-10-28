import {background} from './background.js';
import {foreground} from './foreground.js';
import {start} from './start.js';
import {end} from './end.js';



const canvas = document.getElementById("flappybird");
const context = canvas.getContext("2d");

const gameImage =  new Image();
gameImage.src = "../images/sprite.png"

document.addEventListener("click", function(e){
    switch(state.current) {
        case state.start:
            state.current = state.game;
            fallingAudio.play();
            break;
        case state.game:
            bird.flap();
            flapAudio.play();
            break;
        case state.end:
            let rec = canvas.getBoundingClientRect();
            let click = e.clientX - rec.left;
            let clickY = e.clientY - rec.top;

            if ( click >= startButton.x && 
                click <= startButton.x + startButton.w && 
                clickY >= startButton.y && 
                clickY <= startButton.y + startButton.h){
                    pipes.reset();
                    bird.speedReset();
                    score.reset();
                    state.current = state.start;
                }
            break;
    }
})

const state = {
    current: 0,
    start: 0,
    game: 1,
    end: 2
}
let frames = 0;

const startButton = {
    x: 120,
    y: 263,
    w: 83,
    h: 29
}

const flapAudio = new Audio();
flapAudio.src = '../audio/sfx_flap.wav';
const scoreAudio = new Audio();
scoreAudio.src = '../audio/sfx_point.wav';
const deathAudio = new Audio();
deathAudio.src = '../audio/sfx_die.wav';
const hitAudio = new Audio();
hitAudio.src = '../audio/sfx_hit.wav';
const fallingAudio = new Audio();
fallingAudio.src = '../audio/sfx_swooshing.wav';

const DEGREE = Math.PI/180;

//  pipes
const pipes = {
    position: [],

    top: {
        sX: 553,
        sY: 0
    },

    bottom: {
        sX: 502,
        sY: 0
    },
    h: 400,
    w: 53,
    gap: 85,
    maxY: -150,
    dx: 2,

    draw: function() {
        for(let i = 0; i < this.position.length; i++) {
            let pos = this.position[i];
            let topYPos = pos.y;
            let botYPos = pos.y + this.h + this.gap;

            context.drawImage(gameImage, this.top.sX, this.top.sY, this.w, 
                this.h, pos.x, topYPos, this.w, this.h)
            context.drawImage(gameImage, this.bottom.sX, this.bottom.sY, this.w, 
                this.h, pos.x, botYPos, this.w, this.h)
        }
    },

    update: function() {
        if (state.current !== state.game) return;

        if(frames % 100 === 0) {
            this.position.push({
                x: canvas.width,
                y: this.maxY * (Math.random() + 1)
            });
        }

        for ( let i = 0; i < this.position.length; i++) {
            let pos = this.position[i];
            

            let bottompipePos = pos.y + this.h + this.gap;

            if (bird.x + bird.radius > pos.x && 
                bird.x - bird.radius < pos.x + this.w &&
                bird.y + bird.radius > pos.y &&
                bird.y - bird.radius < pos.y + this.h) {
                    state.current = state.end;
                    hitAudio.play();
                }
            if (bird.x + bird.radius > pos.x && 
                bird.x - bird.radius < pos.x + this.w &&
                bird.y + bird.radius > bottompipePos &&
                bird.y - bird.radius < bottompipePos + this.h) {
                    state.current = state.end;
                    hitAudio.play();
                }

            if (pos.x + this.w <= 0) {
                this.position.shift();
                score.value += 1;
                scoreAudio.play();
                score.best = Math.max(score.value, score.best);
                localStorage.setItem("best", score.best);
            }

            pos.x -= this.dx;
        }
    },

    reset: function() {
        this.position = [];
    }

}

// bird
const bird = {
    animation: [
        { sX: 276, sY: 112 },
        { sX: 276, sY: 139 },
        { sX: 276, sY: 164 },
        { sX: 276, sY: 139 },
    ],
    x: 50,
    y: 150,
    w: 34,
    h: 26,
    frame: 0,
    gravity: 0.25,
    jump: 4.6,
    speed: 0,
    rotation: 0,
    radius: 12,

    draw: function () {
        let flappy = this.animation[this.frame];
        context.save();
        context.translate(this.x, this.y );
        context.rotate(this.rotation);
        context.drawImage(gameImage, flappy.sX, flappy.sY, this.w, this.h,  - this.w / 2,
            - this.h / 2, this.w, this.h);

        context.restore();
    },

    flap: function () {
        this.speed = -this.jump;
    },

    update: function () {
        this.period = state.current === state.start ? 10 : 5;
        this.frame += frames%this.period === 0 ? 1 : 0;
        this.frame = this.frame%this.animation.length;


        if(state.current === state.start) {
            this.y = 150;
            this.rotation = 0 * DEGREE;
        } else {
            this.speed += this.gravity;
            this.y += this.speed;

            if (this.y + this.h/2 >= canvas.height - foreground.h) {
                this.y = canvas.height - foreground.h - this.h/2;
                
                if (state.current === state.game) {
                    state.current = state.end;
                    deathAudio.play();
                }
            }

            if (this.speed >= this.jump) {
                this.rotation = 90 * DEGREE;
                this.frame = 1;
            } else {
                this.rotation = -25 * DEGREE;
            }
        }
    },

    speedReset: function() {
        this.speed = 0;
    }


}

const score = {
    best: parseInt(localStorage.getItem("best")) || 0,
    value: 0,

    draw: function () {
        context.fillStyle = '#FFF';
        context.strokeStyle = "#000";

        if (state.current === state.game) {
            context.lineWidth = 2;
            context.font = "35px Teko";
            context.fillText(this.value, canvas.width / 2, 50);
            context.strokeText(this.value, canvas.width / 2, 50);
        } else if (state.current === state.end) {
            context.font = "25px Teko";
            context.fillText(this.value, 225, 186);
            context.strokeText(this.value, 225, 186);

            context.fillText(this.best, 225, 228);
            context.strokeText(this.best, 225, 228);


        }
    },

    reset: function () {
        this.value = 0;
    }
}

function draw() {
    context.fillStyle = "#70c5ce";
    context.fillRect(0, 0 , canvas.width, canvas.height);

    background.draw();
    pipes.draw();
    foreground.draw();
    bird.draw();
    score.draw();

    if (state.current === state.start) {
        start.draw();
    }
    if (state.current === state.end) {
        end.draw();
        score.draw();
    }
    
    
}

function update () {
    bird.update();

    if (state.current === state.game) {
        foreground.update();
    }
    pipes.update();
}

function loop() {
    update();
    draw();
    frames++;

    requestAnimationFrame(loop);
}




loop();