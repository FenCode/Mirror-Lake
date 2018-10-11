// Star prefab constructor function

function Star(game, xpos, ypos) {

	// call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, xpos, ypos, 'star');

	// setting properties
	this.scale.setTo(0.3);

	// adding drag properties
	this.inputEnabled = true;
	this.input.enableDrag();
}
// explicitly define prefab's prototype (Phaser.Sprite) and constructor (Star)
Star.prototype = Object.create(Phaser.Sprite.prototype);
Star.prototype.constructor = Star;

Star.prototype.update = function() {
		
}