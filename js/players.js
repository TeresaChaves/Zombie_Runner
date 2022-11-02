class Players {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.image = new Image();
        this.image.src = "../img/player.png";
        this.image.frames = 3;
        this.image.framesIndex = 0;
        console.log(this.image)

        this.widthPlayer = 250
        this.heightPlayer = 200
        this.posPlayerX = 50
        this.posPlayerY = this.canvasSize.h - this.heightPlayer - 40
        this.posFloor = this.canvasSize.h - 50
        this.velPlayer = {
            x: 8,
            y: 4
        }
        this.gravity = 0.4

        // console.log("player")

    }

    drawPlayer() {
        //this.ctx.fillStyle = 'green'
        //this.ctx.fillRect(this.posPlayerX, this.posPlayerY, this.widthPlayer, this.heightPlayer)

        this.ctx.drawImage(//this.image, 33, 71, 104, 124, 21, 20, 87, 104,
            this.image,
            this.posPlayerX,
            this.posPlayerY,
            this.widthPlayer,
            this.heightPlayer
        )

        // this.animate(framesCounter)
        this.setGravity()


    }
    // animate(framesCounter) {
    //     if (framesCounter % 5 == 0) {
    //         this.image.framesIndex++;
    //     }
    //     if (this.image.framesIndex >= this.image.frames) {
    //         this.image.framesIndex = 0;
    //     }
    // }


    setEventHandlers() {
        // document.onkeydown = event => (event.key === this.keys.ArrowLeft) && (this.createPlayer())
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.posPlayerX -= 10
                    // console.log(event.key)
                    break;

                case 'ArrowRight':
                    this.posPlayerX += 10
                    // console.log(event.key)
                    break;
                case 'ArrowDown':
                    this.posPlayerY += 10
                    // console.log(event.key)
                    break;

                case " ":
                    event.preventDefault()
                    if (this.posPlayerY + this.heightPlayer >= this.posFloor) {
                        this.jump()
                    }


                    // console.log(event.key)


                    break;

            }
        }

    }

    setGravity() {
        if (this.posPlayerY + this.heightPlayer < this.posFloor) {
            this.posPlayerY += this.velPlayer.y
            this.velPlayer.y += this.gravity
        }
        else {
            this.posPlayerY = this.posFloor - this.heightPlayer
            this.velPlayer.y = 1
        }
    }


    jump() {

        this.posPlayerY -= 5
        this.velPlayer.y = -15
    }


}