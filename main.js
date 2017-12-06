var game = new Phaser.Game(2000, 800, Phaser.CANVAS, 'phaser-example');

game.state.add("mainGame", mainGame(game));
game.state.add("winState", winState(game));
game.state.add("gameOver", gameOver(game));

game.state.start("mainGame");