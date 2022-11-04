const App = {
    appName: 'Zombie Runer',
    version: '1.0.0',
    license: undefined,
    author: 'Teresa Chaves & Juan ardenas',
    description: 'Project of IronHacks video Game ',
    ctx: undefined,
    imgInstance: undefined,
    canvasSize: {
        w: undefined,
        h: undefined,
    },
    player: [],
    obstacles: [],
    humans: [],
    life: 1,
    background: undefined,
    FPS: 60,
    framesCounter: 0,
    musicGame: new Audio('./img/gamemusic.wav'),
    musicWin: new Audio('./sounds/WINBETIS'),
    musicGameOver: new Audio('./sounds/gameover'),



    init() {
        // console.log(document.querySelector(".backgroundStart"))
        document.querySelector(".backgroundStart").style.display = "none"
        this.setDimensions()
        this.setContext()
        this.musicGame.play()
        //this.musicWin.play()
        this.createPlayer()
        this.createBackground()
        this.generateObstacles()
        this.clearObstacles()
        this.generateHumans()
        this.player.setEventHandlers()

        this.start()
    },

    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight

        }
        document.querySelector('#myCanvas').setAttribute('height', this.canvasSize.h)
        document.querySelector('#myCanvas').setAttribute('width', this.canvasSize.w)
    },

    setContext() {
        this.ctx = document.querySelector('#myCanvas').getContext('2d')
    },

    start() {
        this.interval = setInterval(() => {
            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++
            this.framesCounter++
            if (this.framesCounter % (Math.floor(Math.random() * 70) + 150) === 0) {
                this.generateObstacles()

            }
            if (this.framesCounter % 150 === 0) {
                this.generateHumans()
            }
            this.clear()
            this.drawAll()
            this.isCollisionObstacle()
            this.isCollisionHuman()
            this.youWin()

        }, 1000 / this.FPS)

    },


    createPlayer() {
        this.player = new Players(this.ctx, this.canvasSize)
    },

    createBackground() {
        this.background = new Background(this.ctx, this.canvasSize)
    },


    generateObstacles() {
        this.obstacles.push(new Obstacle(this.ctx, this.canvasSize))
    },

    generateHumans() {
        this.humans.push(new Humans(this.ctx, this.canvasSize))
    },

    scoreGen() {
        this.ctx.fillText(` ${this.life}`, 120, 50)
        this.ctx.strokeText(` ${this.life}`, 120, 50)
        this.ctx.font = '32px Helvetica'
        this.image = new Image();
        this.image.src = "img/heart.png";
        this.ctx.drawImage(this.image, 80, 20, 50, 50)
    },
    drawAll() {

        this.background.draw()
        this.scoreGen()


        for (let i = 0; i < this.life; i++) {
            this.player.drawPlayer(this.framesCounter, i)
        }
        this.obstacles.forEach((obstacle => obstacle.drawObstacle()))
        this.obstacles.forEach((obstacle => obstacle.moveObstacle()))
        this.humans.forEach((humans => humans.drawHuman()))
        this.humans.forEach((humans => humans.moveHuman()))
    },

    clear() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.clearHumans()
        this.clearObstacles()
    },

    clearObstacles() {
        this.obstacles = this.obstacles.filter(obs => obs.posObstacleX >= -100)
    },
    clearHumans() {
        this.humans = this.humans.filter(elem => elem.posHumanX >= -100)
    },

    isCollisionObstacle() {
        return this.obstacles.forEach((obs, index) => {
            if (
                this.player.posPlayerX + this.player.widthPlayer >= obs.posObstacleX + 60 &&
                this.player.posPlayerY + this.player.heightPlayer >= obs.posObstacleY &&
                this.player.posPlayerX <= obs.posObstacleX + obs.widthObstacle
            ) {

                this.obstacles.splice(obs[index], 1)

                this.life--
                this.score--
                if (this.life === 0) {
                    this.gameOver()
                }
            }
        })
    },


    isCollisionHuman() {


        return this.humans.forEach((hum, i) => {


            if (

                this.player.posPlayerX + this.player.widthPlayer >= hum.posHumanX + 100 &&
                this.player.posPlayerY + this.player.heightPlayer >= hum.posHumanY &&
                this.player.posPlayerX <= hum.posHumanX + hum.widthHuman

            ) {
                this.humans.splice(hum[i], 1)
                this.life++

            }

        })

    },


    gameOver() {
        this.clear()
        clearInterval(this.interval)
        // console.log("this.gameOver()")
        document.querySelector('#gameOver').style.display = "block"
        this.musicGameOver.play()



    },
    youWin() {
        if (this.life === 10) {


            this.clear()
            clearInterval(this.interval)
            document.querySelector('#youwin').style.display = "block"


            // this.ctx.fillStyle = "white"
            // this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)+



            // this.ctx.fillText('YOU WIN', this.canvasSize.w / 2, this.canvasSize.h / 2),

            //     this.ctx.strokeText('YOU WIN', this.canvasSize.w / 2, this.canvasSize.h / 2),
            //     this.ctx.font = '150px Helvetica'
        }
    }
}



