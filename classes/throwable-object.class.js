class ThrowableObject extends MovableObject{
    speedY = 0; 
    acceleration = 1; 


    constructor(){ 
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'); 
        this.x = 100; 
        this.y = 100; 
        this.height = 50; 
        this.width = 50; 
        this.throw(100, 100); 
    }


  

    throw(x, y){ 
        this.x = x; 
        this.y = y; 
        this.speedY = 30;
        setInterval(() => { 
            this.x += 10;
        }, 25)
        setTimeout(() => { 
            setInterval(() => { 
                this.y -= 5; 
            }, 25)
        }, 800)
               
    }
}