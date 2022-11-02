class Background {

    constructor(ctx, canvassize) {
        this.ctx = ctx;
        this.canvassize = canvassize

        this.image = new Image();
        this.image.src = "../img/background.jpg";

        this.posBackX = 0;
        this.posBackY = 0;

        this.velBackX = 1;
    }

    draw() {

        this.ctx.drawImage(this.image, this.posBackX, this.posBackY, this.canvassize.w, this.canvassize.h);
        this.ctx.drawImage(this.image, this.posBackX + this.canvassize.w, this.posBackY, this.canvassize.w, this.canvassize.h);
        this.move()
    }

    move() {
        if (this.posBackX <= -this.canvassize.w) {
            this.posBackX = 0;
        }
        this.posBackX -= this.velBackX;
    }

}



