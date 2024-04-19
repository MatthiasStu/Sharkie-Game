class CoinBar extends DrawableObject {

    IMAGES = [
        'img/4. Marcadores/green/Coin/0_  copia 4.png',
        'img/4. Marcadores/green/Coin/20_  copia 2.png',
        'img/4. Marcadores/green/Coin/40_  copia 4.png',
        'img/4. Marcadores/green/Coin/60_  copia 4.png',
        'img/4. Marcadores/green/Coin/80_  copia 4.png',
        'img/4. Marcadores/green/Coin/100_ copia 4.png'
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES)
        this.x = 30;
        this.y = 50;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    };
    /**
     * check the variable percentage and set the image for it
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()]
        this.img = this.imageCache[path];
    };
    /**
     * if the a collision with a coin is happening the percentage gets +20 
     */
    collisionWithCoin() {
        let newPercentage = this.percentage + 20;
        this.setPercentage(newPercentage);
    };
    /** 
     * returns the values for the setpercentage function 
    */
    resolveImageIndex() {
        if (this.percentage > 90) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        }
        else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    };
}