class Endboss extends MovableObject {

    height = 520;
    width = 464;
    y = -30;
    energy = 500;
    isHit = false;
    isDead = false;
    isAttacking = false;
    winningScreenIsRenderd = false;
    speed = 55;
    

    images_introduce = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    images_movement = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    images_hurt = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];

    images_dead = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    images_attack = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png',
    ];

    images_youwin = [
        'img/6.Botones/Tittles/You win/Recurso 19.png',
        'img/6.Botones/Tittles/You win/Recurso 20.png',
        'img/6.Botones/Tittles/You win/Recurso 21.png',
        'img/6.Botones/Tittles/You win/Recurso 22.png'
    ];

    offset = {
        top: 240,
        left: 30,
        right: 30,
        bottom: 40
    };

    isHurt_sound = new Audio('audio/endbossishurt.mp3')

    constructor() {
        super().loadImage(this.images_movement[0]);
        this.loadImages(this.images_movement);
        this.loadImages(this.images_hurt);
        this.loadImages(this.images_dead);
        this.loadImages(this.images_attack);
        this.loadImages(this.images_introduce)
        this.x = 10000;
        this.animate();
        this.attack();
    };
    /**
     * 
     * sets energy and the booleand isHit or isDead depending on the energy
     */
    endbossIsHit() {
        if (this.isHit) {
            return
        }
        this.energy -= 50;
        if (this.energy > 0) {
            this.isHit = true;
            if (world && world.character.isMuted == false) {
                this.isHurt_sound.play()
            }
        } else if (this.energy < 0) {
            this.isDead = true;
        }
    };
    /**
     * 
     * @returns boolean true if endboss is that
     */
    endbossIsDead() {
        return this.isDead = true;
    };
    /**
     * lets endboss go of the map if he's dead and starts function to render the winnigg screen 
     */
    letEndBossDie() {
        this.speedY = 0.03;
        setInterval(() => {
            this.y -= this.speedY;
            this.speedY -= 0.05;
        }, 25)
        setTimeout(() => {
            if (this.winningScreenIsRenderd) {
                return
            } else {
                this.renderWinningScreen()
            }
        }, 500)
    };
    /**
     * Renders the winning screen elements, sets boolean so it doesnt get rerenderd in a loop
     */
    renderWinningScreen() {
        this.winningScreenIsRendered = true;
        let overlay = document.getElementById('overlay');
        overlay.innerHTML = `<img class="youwin" src="img/6.Botones/Tittles/You win/Recurso 19.png">`;
        let addblurfilter = document.getElementById('canvas');
        addblurfilter.classList.add('blurfilter')
    }
    /** 
     * attack function of the endboss that sets coordinates of an attack
    */
    attack() {
        setInterval(() => {
            this.isAttacking = true;
            this.x -= this.speed;
        }, 2000)
        setInterval(() => {
            this.x += this.speed;
        }, 2250)
    };
    /** 
     * boolean to check if character and endboss already saw each other 
     */
    hadFirstConcact = false;
    /**
     * all animations and booleans needed for the endboss
     */
    animate() {
        let i = 0
        setInterval(() => {
            if (i < 10) {
                this.playAnimation(this.images_introduce); 
                if(this.hadFirstConcact == true){ 
                    setTimeout(() => {
                        this.x = 3250;
                    }, 401);
                }
                
            }
            else if (this.isHit) {
                this.playAnimation(this.images_hurt);
                setTimeout(() => {
                    this.isHit = false;
                }, 4000);
            } else if (this.isDead) {
                this.playAnimation(this.images_dead);
                this.letEndBossDie();
            } else if (this.isAttacking) {
                this.playAnimation(this.images_attack);
                this.isAttacking = false;
            } else {
                this.playAnimation(this.images_movement);
            }
            i++;
            if (world && world.character.x > 2760 && !this.hadFirstConcact) {
                i = 0;
                this.hadFirstConcact = true;
               
            }  
        }, 200);
    }
}
