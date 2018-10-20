// Goal prefab constructor function
function Goal(game, key, frame, scale, rotation) {
	// call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, 425, 120, 'goal', '', 1);
	this.anchor.setTo(0.5);
	this.scale.setTo(0.1);
	this.enableBody = true;

	game.physics.enable(this, Phaser.Physics.ARCADE);
}
// explicitly define prefab's prototype (Phaser.Sprite) and constructor (Goal)
Goal.prototype = Object.create(Phaser.Sprite.prototype);
Goal.prototype.constructor = Goal;


Goal.prototype.update = function() {


}