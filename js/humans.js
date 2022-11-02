class Humans {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.widthHuman = 150
        this.heigthHuman = 100
        this.posHumanX = this.canvasSize.w + this.heigthHuman
        this.humanFloor = this.canvasSize.h - this.heigthHuman - 200
        this.posHumanY = this.humanFloor + this.heigthHuman

        this.velHuman = {
            x: Math.random() * 12,
            y: 6

        }


    }
    drawHuman() {
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(this.posHumanX, this.posHumanY, this.widthHuman, this.heigthHuman)
        this.moveHuman()
    }
    moveHuman() {
        this.posHumanX -= this.velHuman.x
    }
}