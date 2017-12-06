function winState(game) {
    function preload() {
        game.load.spritesheet('winScreen','assets/winScreen.png', 160/5,160/5)
        

    }      

    function create() {
        var sprite = game.add.sprite(40, 100, 'winScreen');
        sprite.animations.add("flash", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22])
        sprite.animations.play("flash", 10, true)
        sprite.scale.setTo(15)
        
    }
    function update() {

    }
    return {
        preload,
        create,
        update
    }
}