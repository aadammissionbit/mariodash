
var game = new Phaser.Game(2000, 800, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

var player
var platforms
var cursors
var slamTime

var currentImage = 0;


function preload() {

    game.load.image('star', 'assets/star.png')
    game.load.image('platform', 'assets/platform.png')
    game.load.image('sky', 'assets/sky.png')
    game.load.spritesheet('mario', 'assets/mario.png', 395, 448, 3)
    game.load.image('platformV', 'assets/platformV.png')

    game.load.image('mario1', 'assets/mario/1.png')
    game.load.image('mario2', 'assets/mario/2.png')
    game.load.image('mario3', 'assets/mario/3.png');
    game.load.image('star', 'assets/star.png')
    
}

function create() {
    game.add.tileSprite(0, 0, 8000, 800, 'sky');

    player = game.add.sprite(5, 5, 'mario1')
    game.physics.arcade.enable(player);
    player.body.gravity.y = 200
    player.scale.setTo(0.1);
    
    

    platforms = game.add.physicsGroup()
    platforms.create(0, 500, 'platform')
    platforms.create(800, 600, 'platform')
    platforms.create(1500, 500, 'platform')
    platforms.create(2400, 400, 'platform')
    platforms.create(3200, 300, 'platform')
    platforms.create(4000, 150, 'platform')
    platforms.create(4800, 50, 'platformV')
    star.create(4800,50, "star")

    
    

    platforms.forEach(function(platform) {
        platform.body.immovable = true;
        platform.body.moves = false;

    })
    function changeVolume(pointer) {

       
    }

    cursors = game.input.keyboard.createCursorKeys();

    timer = game.time.create(false);
    timer.loop(100, updateSprite, this);
    timer.start();

    game.camera.follow(player);
    game.world.setBounds(0, 0, 8000, 800)

}

function update() {
    game.physics.arcade.collide(player, platforms, function() {
        if (cursors.up.isDown) {
            player.body.velocity.y = 150
            if (cursors.up.isDown && player.body.onFloor() && game.time.now > slamTime) {}

            player.body.velocity.y = -250;
            slamTime = game.time.now + 750;
        }
        stars = game.add.group();

    stars.enableBody = true;


        //  Let gravity do its thing
        star.body.gravity.y = 6;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
var score = 0;
var scoreText;
scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

function collectStar (player, star) {

    // Removes the star from the screen
    star.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}

    });

    if (cursors.left.isDown) {
        player.body.velocity.x = -400;
        player.body.acceleration.x++
    } else if (cursors.right.isDown) {
        player.body.velocity.x = 400;
    } else {
        player.body.velocity.x = 0;
    }
    //if(player.body.y=2000){
        //.add.text(16, 16, 'Game Over.', { fontSize: '32px', fill: '#000' });
    //}
}

function render() {

    game.debug.cameraInfo(game.camera, 32, 32);
    

}


function updateSprite() {
    switch (currentImage) {
        case 0:
            player.loadTexture("mario1")
            currentImage++;
            break;
        case 1:
            player.loadTexture("mario2")
            currentImage++;
            break;
        case 2:
            player.loadTexture("mario3")
            currentImage = 0;
            break;
        default:
            throw new Error("Invalid sprite image");
    }
}