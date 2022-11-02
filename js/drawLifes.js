class DrawLife {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.image = new Image();
        this.image.src = "../img/player.png";
        // this.image.frames = 3;
        // this.image.framesIndex = 0;
        //console.log(this.image)

        this.widthDrawLife = 250
        this.heightDrawLife = 200
        this.posDrawLifeX = 200
        this.posDrawLifeY = this.canvasSize.h - this.heightDrawLife - 40
        this.posFloor = this.canvasSize.h - 50
        // this.velDrawLife = {
        //     x: 8,
        //     y: 4
        // }
        // this.gravity = 0.4

        // console.log("drawLife")

    }

    drawDrawLife() {
        //this.ctx.fillStyle = 'green'
        //this.ctx.fillRect(this.posdrawLifeX, this.posdrawLifeY, this.widthdrawLife, this.heightdrawLife)

        this.ctx.drawImage(
            this.image,
            this.posDrawLifeX - 180,
            this.posDrawLifeY - 80,
            this.widthDrawLife,
            this.heightDrawLife


        )
        console.log(this.ctx.drawImage)




    }





    jump() {

        this.posDrawLifeY -= 5
        this.velDrawLife.y = -15
    }


}

