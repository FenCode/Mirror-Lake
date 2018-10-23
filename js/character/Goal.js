// Goal prefab constructor function
function Goal(game, xpos, ypos, scale, rotation) {
	// call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	//Phaser.Sprite.call(this, game, 430, 130, 'goal', '', 1);
	Phaser.Sprite.call(this, game, xpos, ypos, 'goal');
	this.anchor.setTo(0.5);
	this.enableBody = true;

	game.physics.enable(this, Phaser.Physics.ARCADE);
}
// explicitly define prefab's prototype (Phaser.Sprite) and constructor (Goal)
Goal.prototype = Object.create(Phaser.Sprite.prototype);
Goal.prototype.constructor = Goal;


Goal.prototype.update = function() {


}