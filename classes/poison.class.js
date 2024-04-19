class Poison extends MovableObject {
    height = 70;
    width = 70;
    speedY = 0;

    offset = {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10
    };

    collectpoison_sound = new Audio;

    images_poisons = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png',
    ];

    constructor() {
        super().loadImage('img/4. Marcadores/Posión/Animada/1.png');
        this.loadImages(this.images_poisons);
        this.x = 300 + Math.random() * 2000;
        this.y = 100 + Math.random() * 300;
        this.animate();
    }
    /**
     * function to remove poison from the visable world 
     */
    removepoison() {
        setInterval(() => {
            this.x = 10000;
            this.y -= 1000;
        }, 25)
    };
    /**
     * function to play animation of the poisons 
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.images_poisons)
        }, 200);
    };
}  
