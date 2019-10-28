const canvas = document.getElementById("flappybird");
const context = canvas.getContext("2d");

const gameImage = new Image();
gameImage.src = "../images/sprite.png"

export const background = {
    sX: 0,
    sY: 0,
    w: 275,
    h: 226,
    x: 0,
    y: canvas.height - 226,

    draw: function() {
        context.drawImage(gameImage, this.sX, this.sY, this.w, this.h, 
            this.x, this.y, this.w, this.h)
        context.drawImage(gameImage, this.sX, this.sY, this.w, this.h, 
            this.x + this.w , this.y, this.w, this.h)
    }
}