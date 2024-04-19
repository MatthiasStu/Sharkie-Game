class ThrowableObject extends DrawableObject {
    speedY = 0;
    acceleration = 1;
    level = level1
    isHit = false;


    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    constructor(x, y, z) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.z = z;
        this.height = 50;
        this.width = 50;
        this.throw(this.z);
    };
    /**
     * function to remove the bubble from the visable map 
     */
    isTrapped() {
        this.x = 10000;
        this.y = 10000;
    };
    /**
     * function to throw the bubble  
     */
    throw(z) {
        if (this.z == true) {
            this.speedY = 0.1;
            setInterval(() => {
                this.x -= 10;
                this.y -= this.speedY;
                this.speedY += 0.3;
            }, 25)

        } else {
            this.speedY = 0.1;
            setInterval(() => {
                this.x += 10;
                this.y -= this.speedY;
                this.speedY += 0.3;
            }, 25)
        };
    };
}