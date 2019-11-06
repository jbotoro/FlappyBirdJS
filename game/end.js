const canvas = document.getElementById("flappybird");
const context = canvas.getContext("2d");

const gameImage = new Image();
gameImage.src = "/FlappyBirdJS/images/sprite.png";

export const end = {
    sX: 175,
    sY: 228,
    w: 225,
    h: 202,
    x: canvas.width / 2 - 225 / 2,
    y: 90,

    draw: function () {
        context.drawImage(gameImage, this.sX, this.sY, this.w, this.h,
            this.x, this.y, this.w, this.h)
    }
}