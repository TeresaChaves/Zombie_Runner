class Obstacle {
    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.widthObstacle = 150
        this.heigthObstacle = 75
        this.obstFloor = this.canvasSize.h - this.heigthObstacle - 80
        this.posObstacleX = this.canvasSize.w - 50
        this.posObstacleY = this.canvasSize.h - this.heigthObstacle - 70

        this.velObstacle = {
            x: 6,
            y: 4

        }

        this.image = new Image();
        this.image.src = "./img/bomba.png";
    }

    drawObstacle() {

        this.ctx.drawImage(this.image, this.posObstacleX, this.posObstacleY, this.widthObstacle, this.heigthObstacle)
        // this.ctx.fillStyle = "red"
        // this.ctx.fillRect(this.posObstacleX, this.posObstacleY, this.widthObstacle, this.heigthObstacle)


        this.moveObstacle()
    }
    moveObstacle() {

        this.posObstacleX -= this.velObstacle.x
    }
}

