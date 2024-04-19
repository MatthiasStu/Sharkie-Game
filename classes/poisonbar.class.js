class PoisonBar extends DrawableObject {

    IMAGES_POISONBAR = [
        'img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
        'img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png'
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_POISONBAR)
        this.x = 30;
        this.y = 100;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    };
    /**
     * 
     *  function to change image depending of percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_POISONBAR[this.resolveImageIndex()]
        this.img = this.imageCache[path];

    };
    /**
     * set percante if characte colliding with coin 
     */
    collisionWithPoison() {
        let newPercentage = this.percentage + 20;
        this.setPercentage(newPercentage);
    };
    /**
     * 
     * @returns the percentage for the setpercantage function
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