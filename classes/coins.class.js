class Coin extends MovableObject {
    height = 40;
    width = 40;
    speedY = 0;
    collectcoin_sound = new Audio('audio/coincollect.mp3');
    isMuted = false;

    offset = {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10
    };

    images_coins = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png',
    ];

    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.images_coins);
        this.x = 200 + Math.random() * 2000;
        this.y = 100 + Math.random() * 300;
        this.animate();
    }
    /**
     *  removes coin from the visable part of the world and plays a soung  
     */
    removecoin(x) {
        if (x == false) {
            this.collectcoin_sound.play();
        }
        setInterval(() => {
            this.x = 10000;
            this.y -= 1000;
        }, 25)
    }
    /**
     * animates coin
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.images_coins)
        }, 200);
    };

}