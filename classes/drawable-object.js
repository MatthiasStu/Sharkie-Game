class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 150;
    height = 150;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };
    /**
     * draws fixed images to map like backgroundobjects 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
    /**
     * 
     * function to draw a frame to check if collision detaction is working, not used anymore
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Jellyfish || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height)
            ctx.stroke();
        }
    };
    /**
     * loads all images of a array and reset the image path
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    };
};