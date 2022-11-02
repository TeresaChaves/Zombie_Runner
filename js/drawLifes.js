class DrawLife {
    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize

        this.widthDrawLife = 100
        this.heightDrawLife = 100
        this.posDrawLifeX = 80
        this.posDrawLifeY = this.canvasSize.h - this.heightDrawLife - 40
        this.posFloor = this.canvasSize.h - 50
        // this.velDrawLife = {
        //     x: 8,
        //     y: 4
        // }
        //this.gravity = 0.4
    }
    drawLife() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.posLifeX, this.posLifeY, this.widthLife, this.heightLife)


    }

}