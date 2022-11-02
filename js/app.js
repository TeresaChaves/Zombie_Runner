const App = {
    appName: 'Zombie Runer',
    version: '1.0.0',
    license: undefined,
    author: 'Teresa Chaves & Juan cardenas',
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
    life: 3,
    score: 0,
    convertedHuman: [],
    background: undefined,
    FPS: 60,
    framesCounter: 0,
    init() {
        this.setDimensions()
        this.setContext()
        this.createPlayer()
        //this.createLife()
        this.createBackground()

        this.generateObstacles()
        this.clearObstacles()
        this.generateHumans()


        this.player.setEventHandlers()
        this.player.jump()




        this.start()

        //console.log("hola")

    },

    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight

        }
        //console.log(this.canvasSize)
        document.querySelector('#myCanvas').setAttribute('height', this.canvasSize.h)
        document.querySelector('#myCanvas').setAttribute('width', this.canvasSize.w)
    },

    setContext() {
        this.ctx = document.querySelector('#myCanvas').getContext('2d')
    },

    start() {
        // console.log(this.canvasSize)

        this.interval = setInterval(() => {



            this.framesCounter++
            if ((this.framesCounter) % (Math.floor(Math.random() * 70) + 50) === 0) {
                this.generateObstacles()

            }
            if (this.framesCounter % 150 === 0) {
                this.generateHumans()
            }
            this.clear()
            this.drawAll()
            this.isCollisionObstacle()
            this.isCollisionHuman()



        }, 1000 / this.FPS)

    },


    createPlayer() {
        this.player = new Players(this.ctx, this.canvasSize)

    },

    createBackground() {
        this.background = new Background(this.ctx, this.canvasSize)
    },

    // createLife() {
    //     this.drawsLife = new DrawLife(this.ctx, this.canvasSize)
    // },

    generateObstacles() {
        this.obstacles.push(new Obstacle(this.ctx, this.canvasSize))
        //console.log(this.canvasSize)


    },

    generateHumans() {
        this.humans.push(new Humans(this.ctx, this.canvasSize))
    },




    scoreGen() {
        this.ctx.fillText('Score', 10, 50)
        this.ctx.strokeText('Score', 10, 50)
        this.ctx.font = '32px arial'
        this.ctx.fillText("Lifes", 120, 50)
        this.ctx.strokeText(`Lifes ${this.life}`, 120, 50)
        this.ctx.font = '32px arial'
    },





    drawAll() {

        this.background.draw()
        this.scoreGen()
        this.player.drawPlayer()
        this.convertedHuman.forEach(life => life.drawDrawLife())

        this.obstacles.forEach((obstacle => obstacle.drawObstacle())),
            this.obstacles.forEach((obstacle => obstacle.moveObstacle()))
        this.humans.forEach((humans => humans.drawHuman())),
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
                this.player.posPlayerX + this.player.widthPlayer >= obs.posObstacleX &&
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

                this.player.posPlayerX + this.player.widthPlayer >= hum.posHumanX &&
                this.player.posPlayerY + this.player.heightPlayer >= hum.posHumanY &&
                this.player.posPlayerX <= hum.posHumanX + hum.widthHuman

            ) {
                this.humans.splice(hum[i], 1)
                this.life++


                this.convertedHuman.push(new DrawLife(this.ctx, this.canvasSize, this.posDrawLifeX, this.posDrawLifeY))
                //console.log(this.drawsLife)
                // if (this.convertedHuman.length === 1) {
                //     this.posDrawLifeX += 80

                // }
                // if (this.convertedHuman.length === 2) {
                //     this.posDrawLifeX += 190



                console.log(this.life)
            }
            else if (this.life === 10) {
                console.log("you win")
                // console.log(this.humans = 10, 'you win')

            }





        })

    },


    gameOver() {
        this.clear()
        clearInterval(this.interval)
        // console.log("this.gameOver()")
        document.querySelector('#').style.display = "block"


    },
}
// startGame() {
//     let startDiv = document.getElementById("start")
//     startDiv.style.display = "none"
//     start()
// }
