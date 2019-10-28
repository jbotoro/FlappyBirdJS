const canvas = document.getElementById("flappybird");
const context = canvas.getContext("2d");

const gameImage = new Image();
gameImage.src = "../images/sprite.png"

export const foreground = {
    sX: 276,
    sY: 0,
    w: 224,
    h: 112,
    x: 0,
    y: canvas.height - 112,
    dx: 2,

    draw: function () {
        context.drawImage(gameImage, this.sX, this.sY, this.w, this.h,
            this.x, this.y, this.w, this.h)
        context.drawImage(gameImage, this.sX, this.sY, this.w, this.h,
            this.x + this.w, this.y, this.w, this.h)
    },

    update: function() {
        this.x = (this.x - this.dx)%(this.w/2);
    }
}