function gameOver(game) {
	function preload() {
		game.load.image('overScreen', 'assets/overScreen.png')
		game.load.image('button', 'assets/Button.png')

	}
	var button;
	var background;

	function actionOnClick() {
		game.state.start("mainGame");
	}

	function create() {
		game.add.sprite(80, 80, 'overScreen');
		button = game.add.button(0, 0, 'button', actionOnClick, 2, 1, 0);
		button.scale.setTo(0.1)
	}
	function update() {

	}
	return {
		preload,
		create,
		update
	}
}