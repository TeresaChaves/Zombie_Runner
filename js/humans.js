class Humans {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.widthHuman = 80
        this.heigthHuman = 190
        this.posHumanX = this.canvasSize.w + this.heigthHuman
        this.humanFloor = this.canvasSize.h - this.heigthHuman - 200
        this.posHumanY = this.humanFloor + this.heigthHuman - 50

        this.velHuman = {
            x: Math.random() * 12,
            y: 6

        }

        this.image = new Image();
        this.image.src = "../img/human.png";

    }
    drawHuman() {
        this.ctx.drawImage(this.image, this.posHumanX, this.posHumanY, this.widthHuman, this.heigthHuman)
        // this.ctx.fillStyle = "grey"
        // this.ctx.fillRect(this.posHumanX, this.posHumanY, this.widthHuman, this.heigthHuman)
        this.moveHuman()
    }
    moveHuman() {
        this.posHumanX -= this.velHuman.x
    }
}