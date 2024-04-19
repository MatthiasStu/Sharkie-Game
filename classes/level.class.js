class Level {
    enemies;
    backgroundObjects;
    collectObjects;
    endBoss;
    poisons;
    level_end_x = 3300;
    tryagain;
    /**
     * 
     * @param {all enemies of the leve} enemies 
     * @param {all backgroundObjects of the level} backgroundObjects 
     * @param {all collectobjects of the level} collectObjects 
     * @param {the endboss} endBoss 
     * @param {the poisonbottles } poisons 
     */
    constructor(enemies, backgroundObjects, collectObjects, endBoss, poisons) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.collectObjects = collectObjects;
        this.endBoss = endBoss;
        this.poisons = poisons;
    }
}