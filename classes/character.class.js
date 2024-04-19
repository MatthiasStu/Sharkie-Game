
class Character extends MovableObject {
    height = 250;
    width = 300;
    x = 70;
    y = 90;
    speed = 5;
    timeUserInactive = 8000;
    world;
    currentInactive = 0;
    timeout = 100;
    isMuted = false;
    itsAnotherTry = false;

    offset = {
        top: 120,
        bottom: 30,
        left: 40,
        right: 30
    };

    isShootingbubble = false;

    images_movement = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];

    images_nomove = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    images_sleep = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'
    ];

    images_damage = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ];

    images_damageByEndboss = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ];

    images_deadshock = [
        'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/10.png',
    ];

    images_shootbubble = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'

    ];

    backgroundMusic = new Audio('audio/backgroundmusic.mp3');
    swimming_sound = new Audio('audio/swimming2.mp3');
    sleeping_sound = new Audio('audio/sleep.mp3');
    electroshock_sound = new Audio('audio/electroshock.mp3');
    poisondamage_sound = new Audio('audio/poisondamage.mp3');
    bubble_sound = new Audio('audio/bubble.mp3')

    /**
     * function to load all images and start the animate function 
     */
    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.images_movement);
        this.loadImages(this.images_nomove);
        this.loadImages(this.images_shootbubble);
        this.loadImages(this.images_damage);
        this.loadImages(this.images_deadshock);
        this.loadImages(this.images_sleep);
        this.loadImages(this.images_damageByEndboss)
        this.animate();
    };

    /**
     * animate function checks keyboard inputs, if the character is dead, hurt and starts the functions depending on the inputs it gets 
     * the boolean has hasexecutedOnce is for the endscreen, that it only gets renderd once, not in a intervall. 
     * the variable is getting couted up every round the interval ist going, i need this to set the user inactive after a time 
     */
    animate() {
        this.keyBoardIntervall();
        let hasExecutedOnce = false;
        setInterval(() => {
            this.playBackgroundmusic();
            if (this.isDead() || this.isPoisoned()) {
                this.playDeadfunctions();
                if (!hasExecutedOnce) {
                    this.renderEndScreen();
                    hasExecutedOnce = true;
                }
            }
            else if (this.world.keyboard.SPACE || this.isShootingbubble) {
                this.playAttackfunctions();
            }
            else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playMovingfunctions();
            }
            else if (this.isHurt()) {
                this.checkDamageType();
            } else {
                this.currentInactive = this.currentInactive + 100;
                this.setUserInactive();
            }
        }, 100);
    };

    /**
     * every function that needs to happen if sharkie is moving are embedded
     */
    playMovingfunctions() {
        this.playAnimation(this.images_movement)
        this.resetInactiveTime()
        this.sleeping_sound.pause();
    }
    /**
    * every function that needs to happen if sharkie is attacking are embedded
    */
    playAttackfunctions() {
        this.checkShootingBubbleAnimation();
        this.resetInactiveTime()
        this.playAnimation(this.images_shootbubble);
        this.shootBubbleSound();
        this.sleeping_sound.pause();

    }
    /**
    * every function that needs to happen if sharkie dies are embedded
    */
    playDeadfunctions() {
        this.stopBackgroundMusic();
        this.stayInLastFrame();
        this.playAnimation(this.images_deadshock);
        this.sleeping_sound.pause();
    }

    /**
     * function to secure that sharkies frames stay at the last frame if he dies
     */
    stayInLastFrame() {
        if (this.currentImage % this.images_deadshock.length == this.images_deadshock.length - 1) {
            this.currentImage--;
            this.y += this.speed * 5;
        }
    }

    /**
         * if sharkie moves, the variable that counts up to check how long the user is inactiv resets to 0 
         */
    resetInactiveTime() {
        return this.currentInactive = 0;
    }

    /**
     * function to put in elements for the end screen if sharkie dies and add a blurr filter and reset the audio button  
     */
    renderEndScreen() {
        document.getElementById('overlay').innerHTML =
            `<img class="gameover" src="img/6.Botones/Tittles/Game Over/Recurso 10.png">
        <img class="tryagainbutton" src="img/6.Botones/Try again/Recurso 16.png" onclick="init()">`;
        let addBlurToElement = document.getElementById('canvas');
        addBlurToElement.classList.add('blurfilter');
        document.getElementById('stopAudio').src = 'img/7. Mobile/SoundOn.png'

    };

    /**
     * function to decide wich animation and sound needs to play if sharkie gets hurt
     */
    checkDamageType() {
        if (this.damageType == "normal") {
            this.playAnimation(this.images_damage);
            if (this.isMuted == false) {
                this.electroshock_sound.play();
            }
        }
        if (this.damageType == "endbossDamage") {
            this.playAnimation(this.images_damageByEndboss)
            if (this.isMuted == false) {
                this.poisondamage_sound.play();
            }
        }
    };

    /**
     * function checks if game is muted and stops or plays sounds 
     */
    shootBubbleSound() {
        if (this.isMuted == false) {
            setTimeout(() => {
                this.bubble_sound.play();
            }, 500);
            setTimeout(() => {
                this.bubble_sound.pause();
            }, 600)
        }
    }

    /**
     * function that makes sure that the shooting animation only plays ones on keypress and doesnt loop 
     */
    checkShootingBubbleAnimation() {
        if (!this.isShootingbubble) {
            this.isShootingbubble = true;
            this.currentImage = 0;
        }
        if (this.currentImage == this.images_shootbubble.length) {
            this.isShootingbubble = false;
            this.shootBubble()
        }
    };

    /**
     * functions that checks the values of the keyboard booleans, moves the character, moves the camera and calls function to play sound 
     */
    keyBoardIntervall() {
        setInterval(() => {
            this.swimming_sound.pause()
            if (this.isDead()) {
                return;
            }
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.world.camera_x = -this.x + 70;
                this.checkMuteAndPlaySound();
            }
            if (this.world.keyboard.LEFT && this.x > 70) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.world.camera_x = -this.x + 70;
                this.checkMuteAndPlaySound();
            }
            if (this.world.keyboard.DOWN && this.y < 270) {
                this.y += this.speed;
                this.checkMuteAndPlaySound();
            }
            if (this.world.keyboard.UP && this.y > -100) {
                this.y -= this.speed;
                this.checkMuteAndPlaySound();
            }
        }, 1000 / 60);

    };
    /**
     * functions that checks in wich direction sharkie is looking and than throws a bubble by pushing bubble into the throwableobjectgs 
     */

    shootBubble() {
        if (this.otherDirection == true) {
            let bubble = new ThrowableObject(this.x + 40, this.y + 110, this.otherDirection);
            this.world.throwableObjects.push(bubble);
        } else {
            let bubble = new ThrowableObject(this.x + 210, this.y + 110);
            this.world.throwableObjects.push(bubble);
        }
    };
    /**
     * function to clear intervalls 
     */
    isDeadRequestForKeyboard() {
        clearInterval()
    };
    /**
     * if the varibale timeuserinactive gets to high he is playing an sleep animations with sleeping sounds 
     */
    setUserInactive() {
        if (this.currentInactive - this.timeUserInactive > 0) {
            this.playAnimation(this.images_sleep)
            if (this.isMuted == false) {
                this.sleeping_sound.volume = 0.5;
                this.sleeping_sound.play()
            }
        } else {
            this.playAnimation(this.images_nomove)
        }
    };
    /**
     * function checks if muted and if not plays the music in the background on setted volume  
     */
    playBackgroundmusic() {
        if (this.isMuted == false) {
            this.backgroundMusic.volume = 0.5;
            this.backgroundMusic.play();
        } else {
            this.backgroundMusic.pause();
            this.sleeping_sound.pause();
        }
    }
    /**
     * function to stop the backgroundmusic
     */
    stopBackgroundMusic() {
        this.backgroundMusic.pause();
    }
    /**
     * checks if muted and if false than the swimming sound plays 
     */
    checkMuteAndPlaySound() {
        if (this.isMuted == false) {
            this.swimming_sound.play();
        }
    };
    /** 
     * function to check what is the instance of a movable object, to set the variable, that is used to check what animation needs to get played
     */
    isColliding(mo) {
        let collisionResult = super.isColliding(mo);
        if (collisionResult) {
            if (mo instanceof Endboss) {
                this.damageType = "endbossDamage";
            } else if (mo instanceof Poison) {
                this.damageType = "endbossDamage"
            } else {
                this.damageType = "normal";
            }
            return collisionResult;
        }
    }
    damageType = "normal"
}; 