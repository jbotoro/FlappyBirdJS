const canvas = document.getElementById("flappybird");
const context = canvas.getContext("2d");

const gameImage = new Image();
gameImage.src = "../images/sprite.png"

export const start = {
    sX: 0,
    sY: 228,
    w: 173,
    h: 152,
    x: canvas.width/2 - 173/2,
    y: 80,

    draw: function () {
        context.drawImage(gameImage, this.sX, this.sY, this.w, this.h,
            this.x, this.y, this.w, this.h)
    }
}