class Endboss extends MovableObject{

   height = 650;  
   width = 580; 
   y = -170; 

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
   ]
   
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


    constructor(){ 
        super().loadImage(this.images_movement[0]); 
        this.loadImages(this.images_movement);
        this.x = 3250;  
        this.animate();
    }

    animate(){
        setInterval(() =>{
        this.playAnimation(this.images_movement)
    }, 200 ); 
    }
    


}