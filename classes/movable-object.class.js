class MovableObject extends DrawableObject{ 
    x_min; 
    x_max; 
    speed = 0.15; 
    otherDirection = false; 
    energy = 100; 
    lastHit = 0; 

    offset = {
        top: 0, 
        left:  0, 
        right: 0, 
        bottom: 0
    }; 


    isColliding (mo) {
       return this.x + this.width - this.offset.right > mo.x + mo.offset.left && 
       this.y + this.height - this.offset.bottom > mo.y + mo.offset.top && 
       this.x + this.offset.left < mo.x + mo.width - mo.offset.right && 
       this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom; 
     } 

     hit(){ 
        this.energy -= 5; 
        if(this.energy < 0){
            this.energy = 0; 
        }else { 
            this.lastHit = new Date().getTime(); 
        }
     }

     isHurt(){ 
        let timepassed = new Date().getTime() - this.lastHit; 
        timepassed = timepassed / 1000; 
        return timepassed < 1; 

     }

     isDead(){
        return this.energy == 0; 
     }


    moveRight() {
        console.log('Moving Right')
    }

    moveLeft(){ 
        setInterval(() => { 
            this.x -= this.speed;
        }, 1000 / 60)
    }

    moveLeftandRight(){         
        setInterval(() => {
        if(this.x >= this.x_max){
            this.speed = -0.15;
        }
        if(this.x <= this.x_min) {
            this.speed = 0.15;
        }
        this.x += this.speed;
    }, 100 / 60)
}

playAnimation(images){  
    let i = this.currentImage % images.length;
                let path = images[i];
                this.img = this.imageCache[path];
                this.currentImage++; 
} 

}
