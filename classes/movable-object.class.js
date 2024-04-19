class MovableObject extends DrawableObject {
    x_min;
    x_max;
    speed = 0.15;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    poisnedEnergy = 0;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    /**
     * one of the main functions in the game, you can put the varibale mo in it, like a jellyfish or the endboss, and it can get called in a other object, like the character object
     * and if they are colling with each other than this function returns a boolean true and if not than false
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    };

    /**
     * set the energy if a movable object gets hit 
     */
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    };
    /**
     * if the character is colliding a poison than this function gets used to set the poisonbar 
     */
    hitPoison() {
        this.poisnedEnergy += 20;
        if (this.poisnedEnergy > 100) {
            this.poisnedEnergy = 100;

        } else {
            this.lastHit = new Date().getTime();
        }
    };
    /**
     * 
     * @returns if the character is going to die by poison 
     */
    isPoisoned() {
        return this.poisnedEnergy == 100;
    };
    /**
     * sets time that the character doesnt get damaged to death with only one hit cause of  the fast going intervalls 
     * 
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    };

    /**
     * 
     * @returns if character dies
     */
    isDead() {
        return this.energy == 0;
    };
    /**
     * function to move left 
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    };
    /**
     * function that is used for the jellyfish if they die 
     */
    raiseDead() {
        this.y += this.speed * 5;
    };
    /**
     * main movement for the jellyfishes 
     */
    moveLeftandRight() {
        if (this.jellyFishIsDead()) {
            return;
        } else {
            setInterval(() => {
                if (this.x >= this.x_max) {
                    this.speed = -0.15;
                }
                if (this.x <= this.x_min) {
                    this.speed = 0.15;
                }
                this.x += this.speed;
            }, 100 / 60)
        }
    };
    /**
     * image array that gets pushed into this function is gonne be played 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
};
