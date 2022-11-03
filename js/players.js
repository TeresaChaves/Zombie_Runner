class Players {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.image = new Image();
        this.image.src = "./img/player.png";
        this.image.frames = 3;
        this.image.framesIndex = 0;

        this.widthPlayer = 150
        this.heightPlayer = 200
        this.posPlayerX = 150
        this.posPlayerY = this.canvasSize.h - this.heightPlayer - 40
        this.posFloor = this.canvasSize.h - 50
        this.velPlayer = {
            x: 10,
            y: 4
        }
        this.gravity = 0.3



    }

    drawPlayer(framesCounter, count) {


        this.ctx.drawImage(
            this.image,
            this.image.framesIndex * (this.image.width / this.image.frames),
            0,
            this.image.width / this.image.frames,
            this.image.height,
            (80 * -count) + this.posPlayerX,
            this.posPlayerY,
            this.widthPlayer,
            this.heightPlayer
        )

        this.animate(framesCounter)
        this.setGravity()
    }

    animate(framesCounter) {
        console.log("hola")
        if (framesCounter % 60 == 0) {
            this.image.framesIndex++;
        }
        if (this.image.framesIndex >= this.image.frames) {
            this.image.framesIndex = 0;
        }
    }


    setEventHandlers() {


        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.posPlayerX -= 100
                    console.log(event.key)
                    break;

                case 'ArrowRight':
                    this.posPlayerX += 100
                    console.log(event.key)
                    break;
                // case 'ArrowDown':
                //     this.posPlayerY += 10

                // break;
                case " ":
                    event.preventDefault()
                    if (this.posPlayerY + this.heightPlayer >= this.posFloor) {
                        this.jump()


                    }

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

        this.posPlayerY = this.posFloor - this.heightPlayer - 5
        this.velPlayer.y = -15
    }


}