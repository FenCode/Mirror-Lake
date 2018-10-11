// lakeStar prefab constructor function

function lakeStar(game, xpos, ypos) {

	// call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, xpos, ypos, 'lakestar');

	// setting properties
	this.scale.setTo(0.3);

	// adding drag properties
	this.inputEnabled = true;
	this.input.enableDrag();
}
// explicitly define prefab's prototype (Phaser.Sprite) and constructor (lakeStar)
lakeStar.prototype = Object.create(Phaser.Sprite.prototype);
lakeStar.prototype.constructor = lakeStar;

lakeStar.prototype.update = function() {
		
}