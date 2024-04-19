class World {
    character = new Character;
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    isMuted = false;

    statusBar = new StatusBar();
    coinbar = new CoinBar();
    throwableObjects = [];
    poisonbar = new PoisonBar();


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    };
    /**
     * sets everything on this world
     */
    setWorld() {
        this.character.world = this;
    };
    /** 
     * Main Gameloop play all function that are needed to run constant 
     * */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkShootCollisions()
            this.checkCoinCollisions();
            this.checkShootCollisionsEndboss();
            this.checkEndbossCollisions();
            this.checkPosionCollisions();
        }, 100);
    };
    /**
     * checks if character and coins are colliding and  sets the the functions that are needed if that is happening 
     */
    checkCoinCollisions() {
        this.level.collectObjects.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.coinbar.collisionWithCoin();
                coin.removecoin(this.isMuted);
            }
        })
    };
    /**
    * checks if character and poisons are colliding and  sets the the functions that are needed if that is happening 
     */
    checkPosionCollisions() {
        this.level.poisons.forEach((poisons) => {
            if (this.character.isColliding(poisons)) {
                poisons.removepoison();
                this.character.hitPoison();
                this.poisonbar.setPercentage(this.character.poisnedEnergy)
            }
        })
    };
    /**
     * checks if character and enemy are colliding and  sets the the functions that are needed if that is happening 
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => { // Check collision 
            if (this.character.isColliding(enemy)) {
                this.character.hit()
                this.statusBar.setPercentage(this.character.energy);
            }
        })
    };
    /**
     * checks if enemy and the bubbles sharkie is shooting are colliding and sets functions for it 
     */
    checkShootCollisions() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((throwableObjects) => {
                if (enemy.isColliding(throwableObjects)) {
                    enemy.jellyFishIsHit();
                    throwableObjects.isTrapped();
                }
            })
        })
    };
    /**
     * checks if endboss and the bubbles sharkie is shooting are colliding and sets functions for it 
     */
    checkShootCollisionsEndboss() {
        this.level.endBoss.forEach((endboss) => {
            this.throwableObjects.forEach((throwableObjects) => {
                if (endboss.isColliding(throwableObjects)) {
                    endboss.endbossIsHit();
                }
            })
        })
    };
    /**
     * checks if sharkie is getting damage from the endboss and sets all functions for it 
     */
    checkEndbossCollisions() {
        this.level.endBoss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        })
    }
    /**
     * draws all object that are needed on the map 
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.collectObjects)
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap((this.coinbar));
        this.addToMap((this.poisonbar));
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.endBoss);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.poisons);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }
    /**
     * gets called in the draw functions to add objects to map  
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }
    /**
     * is used to draw the movable objects on the map, if movalbe objeckt is sharkie and he is looking to a other direction the images of sharkie getting flipped  
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx)


        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }
    /**
     * function to flip the image of sharkie  
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0)
        this.ctx.scale(-1, 1)
        mo.x = mo.x * -1;
    }
    /**
     * function to flip the image of sharkie  back  
     */
    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }
}