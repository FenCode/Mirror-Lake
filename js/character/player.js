// Player prefab constructor function
function Player(game, key, frame, scale, rotation) {
	// call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, 30, 120, 'player', '', 1);
	this.anchor.setTo(0.5);
	this.scale.setTo(0.1);
	this.enableBody = true;
	game.physics.enable(this, Phaser.Physics.ARCADE);
}
// explicitly define prefab's prototype (Phaser.Sprite) and constructor (Player)
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;


Player.prototype.update = function() {
	//movement controls

	if(game.input.keyboard.isDown(Phaser.Keyboard.D)){
		this.body.velocity.x = 50;
		console.log('right');
	}
	else if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
		this.body.velocity.x = -50;
		console.log('left');
	}else{
		this.body.velocity.x = 0;
	} 
	


}
