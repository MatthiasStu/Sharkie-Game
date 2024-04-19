let canvas;
let world;
let keyboard = new Keyboard();
let buttons = ['btnLeft', 'btnRight', 'btnUp', 'btnDown', 'btnAttack'];


function init() {
    let removeblurfilter = document.getElementById('canvas');
    removeblurfilter.classList.remove('blurfilter')
    document.getElementById('overlay').innerHTML = ` `
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard)
    mobileTouchstart();
    mobileTouchend();
};


/**
 * for loop goes to the buttons and checks if they start getting pressed by user 
 */
function mobileTouchstart() {
    for (let i = 0; i < buttons.length; i++) {
        document.getElementById(`${buttons[i]}`).addEventListener('touchstart', (e) => {
            checkKeyTrue(i);
            e.preventDefault();
        })
    }
};
/**
 * for loop goes to the buttons and checks if they end getting pressed by user 
 */
function mobileTouchend() {
    for (let i = 0; i < buttons.length; i++) {
        document.getElementById(`${buttons[i]}`).addEventListener('touchend', (e) => {
            checkKeyFalse(i);
            e.preventDefault();
        })
    }
};
/**
 * depening on the input by the keyboard value it sets the booleans to true if key getting pressed, these can be checked by other functions  
 */
function checkKeyTrue(i) {
    if (i == 0) {
        keyboard.LEFT = true;
    };
    if (i == 1) {
        keyboard.RIGHT = true;
    };
    if (i == 2) {
        keyboard.UP = true;
    };
    if (i == 3) {
        keyboard.DOWN = true;
    };
    if (i == 4) {
        keyboard.SPACE = true;
    };
};
/**
 * depening on the input by the keyboard value it sets the booleans to false if key getting not pressed anymore, these can be checked by other functions  
 */
function checkKeyFalse(i) {
    if (i == 0) {
        keyboard.LEFT = false;
    };
    if (i == 1) {
        keyboard.RIGHT = false;
    };
    if (i == 2) {
        keyboard.UP = false;
    };
    if (i == 3) {
        keyboard.DOWN = false;
    };
    if (i == 4) {
        keyboard.SPACE = false;
    };
};
/**
 * eventlistener to check if key is getting pressed down
 * */
window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
});
/**
 * eventlistener to check if key is getting not pressed anymore
 * */
window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
});

/**
 *  functions to stop audio and set the boolean for other objects, also reset the logo of the audio button
 */
function stopAudio() {
    let imgsrc = document.getElementById('stopAudio').src
    if (imgsrc.includes("On")) {
        document.getElementById('stopAudio').src = "img/7. Mobile/SoundOf.png";
        world.character.isMuted = true;
        world.isMuted = true;
        world.endboss.isMuted = true; 
    } else if (imgsrc.includes("Of")) {
        document.getElementById('stopAudio').src = "img/7. Mobile/SoundOn.png"
        world.character.isMuted = false;
        world.isMuted = false;
        world.endboss.isMuted = false; 
    }

};
/**
 * function to set canvas to fullscreen and normal screen 
 */
function enablefullscreen() {
    if (document.fullscreenElement == "" || document.fullscreenElement == null) {
        document.getElementById('canvas').style.width = "936px"
        document.getElementById('canvas').style.height = "624px"
        document.getElementById('fixedButtons').style.right = "420px"
        document.documentElement.requestFullscreen().catch((e) => {

        });
    } else {
        document.exitFullscreen();
        document.getElementById('canvas').style.width = "720px"
        document.getElementById('canvas').style.height = "480px"
        document.getElementById('fixedButtons').style.right = "310px"
    };
};
/** 
 * function is needed that the fullscreen is not only can used by button, also by esc button on keyboard
 */
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement === null) {
        document.getElementById('canvas').style.width = "720px";
        document.getElementById('canvas').style.height = "480px";
        document.getElementById('fixedButtons').style.right = "420px"
    } else {
        document.getElementById('canvas').style.width = "936px";
        document.getElementById('canvas').style.height = "624px";
        document.getElementById('fixedButtons').style.right = "310px"
    };
});

