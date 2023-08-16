class Character extends MovableObject {
    height = 250;
    width = 300;
    x = 70;
    y = 90;
    speed = 5;
    timeUserInactive = 8000;
    world;
    currentInactive = 0;
    timeout = 100;
    offset = {
        top: 120,
        bottom: 30,
        left: 40,
        right: 30
    }


    images_movement = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];

    images_nomove = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    images_sleep = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'
    ];

    images_damage = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ]

    images_deadshock = [
        'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/10.png',
    ];

    images_shootbubble = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'

    ];




    swimming_sound = new Audio('audio/swimming2.mp3');
    sleeping_sound = new Audio('audio/sleep.mp3')

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.images_movement);
        this.loadImages(this.images_nomove);
        this.loadImages(this.images_shootbubble);
        this.loadImages(this.images_damage);
        this.loadImages(this.images_deadshock);
        this.loadImages(this.images_sleep);
        this.animate();
    }

    animate() {

        this.keyBoardIntervall();
        setInterval(() => {
            if (this.isDead()) {
                if (this.currentImage % this.images_deadshock.length == this.images_deadshock.length - 1) {
                    this.currentImage--;
                    this.y += this.speed * 5;
                    
                }
                this.playAnimation(this.images_deadshock);
            }else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.images_movement)
                this.currentInactive = 0;
                this.sleeping_sound.pause()
            }
             else if (this.world.keyboard.SPACE) {
                this.playAnimation(this.images_shootbubble)
            }
            else if (this.isHurt()) {
                this.playAnimation(this.images_damage);

            } else {
                this.currentInactive = this.currentInactive + 100;
                this.setUserInactive();
            }
        }, 100);
    }


    keyBoardIntervall() {
        setInterval(() => {
            this.swimming_sound.pause()
            if (this.isDead()) { return; } else {
                if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                    this.x += this.speed;
                    this.otherDirection = false;
                    this.world.camera_x = -this.x + 70;
                    this.swimming_sound.play()
                }
                if (this.world.keyboard.LEFT && this.x > 70) {
                    this.x -= this.speed;
                    this.otherDirection = true;
                    this.world.camera_x = -this.x + 70;
                    this.swimming_sound.play()
                }
                if (this.world.keyboard.DOWN && this.y < 270) {
                    this.y += this.speed;
                    this.swimming_sound.play()
                }
                if (this.world.keyboard.UP && this.y > -100) {
                    this.y -= this.speed;
                    this.swimming_sound.play()
                }
            }
        }, 1000 / 60);

    }

    isDeadRequestForKeyboard() {
        clearInterval()
    }

    setUserInactive() {
        if (this.currentInactive - this.timeUserInactive > 0) {
            this.playAnimation(this.images_sleep)
        } else {
            this.playAnimation(this.images_nomove)
        }
    }

}