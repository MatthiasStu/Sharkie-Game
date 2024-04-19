const level1 = new Level(createEnemies(), createBackground(), createCoins(),
 [
    new Endboss()
], [
    new Poison(),
    new Poison(),
    new Poison(),
    new Poison(),
    new Poison(),
    new Poison()
]
); 

function createEnemies(){ 
    return [
    new Jellyfish(),
    new Jellyfish(),
    new Jellyfish(),
    new Jellyfish(),
    new Jellyfish(),
    new Jellyfish()
] 
}

function createPoisons(){ 
    return   [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ]
}

function createCoins(){ 
    return   [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ]
}
function createBackground(){ 
    return  [
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject(' img/3. Background/Layers/1. Light/1.png', 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 1000),
        new BackgroundObject(' img/3. Background/Layers/1. Light/2.png', 1000),
        new BackgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/D2.png', 1000),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 1000),
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 2000),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 2000),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 2000),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 3000),
        new BackgroundObject(' img/3. Background/Layers/1. Light/2.png', 3000),
        new BackgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/D2.png', 3000),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 3000),
    ]
}