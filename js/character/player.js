// Player prefab constructor function
function Player(game, key, frame, scale, rotation) {
	// call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, 470, 500, 'sprites', 'player', 33);

	

}
// explicitly define prefab's prototype (Phaser.Sprite) and constructor (Player)
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;


Player.prototype.update = function() {
	//movement controls

	if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
		this.body.velocity.x = 50;
		console.log('right');
	}
	else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
		this.body.velocity.x = -50;
		console.log('left');
	}else {
		this.body.stop();
	}


}
