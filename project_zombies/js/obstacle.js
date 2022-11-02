class Obstacle {
    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.widthObstacle = 80
        this.heigthObstacle = 100
        this.obstFloor = this.canvasSize.h - this.heigthObstacle - 80
        this.posObstacleX = this.canvasSize.w - 50
        this.posObstacleY = 560



        this.velObstacle = {
            x: 6,
            y: 4

        }


    }

    drawObstacle() {
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.posObstacleX, this.posObstacleY, this.widthObstacle, this.heigthObstacle)


        this.moveObstacle()


    }
    moveObstacle() {

        this.posObstacleX -= this.velObstacle.x
    }
}

