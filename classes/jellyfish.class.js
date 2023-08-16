class Jellyfish extends MovableObject{
    height = 100; 
    width = 80;
    offset = {
        top: 0, 
        left:  0, 
        right: 0, 
        bottom: 0
    }; 
    images_movement = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ]; 
    constructor(){ 
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png') //purple jellyfish
        this.loadImages(this.images_movement);
        this.x = 200 + Math.random() * 2000;
        this.y = 100 + Math.random() * 300;
        this.x_min = this.x-150; 
        this.x_max = this.x+150; 
        this.speed = 0.15  + Math.random() * 0.25; 
        this.animate(); 
    }


    animate(){ 
        this.moveLeftandRight(); 
        setInterval(() => {
            this.playAnimation(this.images_movement)
    }, 200); 
    }
}