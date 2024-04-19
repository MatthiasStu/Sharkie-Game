class Jellyfish extends MovableObject {
    height = 100;
    width = 80;
    speedY = 0;
    energy = 50;

    offset = {
        top: 30,
        left: 25,
        right: 25,
        bottom: 30
    };

    images_movement = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];

    images_deadgreen = [
        'img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g4.png'
    ];

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png') //purple jellyfish
        this.loadImages(this.images_movement);
        this.loadImages(this.images_deadgreen);
        this.x = 500 + Math.random() * 2000;
        this.y = 100 + Math.random() * 300;
        this.x_min = this.x - 150;
        this.x_max = this.x + 150;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
        this.moveLeftandRight();
    }
    /**
     * sets energy to zero if jellyfish gets hit 
     */
    jellyFishIsHit() {
        this.energy -= 50;
        if (this.energy < 0) {
            this.energy = 0;
        };
    };
    /**
     * if the jellyfish are hit by a bubble than they gonna fly to the upper end of the map 
     */
    raiseDead() {
        this.speedY = 0.03;
        setInterval(() => {
            this.x += 2;
            this.y -= this.speedY;
            this.speedY += 0.1;
        }, 25)
    };
    /**
     * 
     * @returns that the energy of the jellyfish is 0 
     */
    jellyFishIsDead() {
        return this.energy == 0;
    };
    /**
     * plays the animations of the jellyfish
     */
    animate() {
        setInterval(() => {
            if (this.jellyFishIsDead()) {
                this.playAnimation(this.images_deadgreen);
                this.raiseDead();
            } else {
                this.playAnimation(this.images_movement);
            }
        }, 200);
    }


}




