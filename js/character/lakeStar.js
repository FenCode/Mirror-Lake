// lakeStar prefab constructor function

function lakeStar(game, xpos, ypos) {

	// call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, xpos, ypos, 'lakeStar');

	// adding drag properties
	this.inputEnabled = true;
	game.time.events.loop(Phaser.Timer.SECOND*1, delayDrag, this);
	this.input.boundsRect = bounds;
	this.game.physics.enable(this, Phaser.Physics.ARCADE);
	this.enableBody = true;
	this.anchor.setTo(0.5);

}

function delayDrag() {

	this.input.enableDrag();
}
// explicitly define prefab's prototype (Phaser.Sprite) and constructor (lakeStar)
lakeStar.prototype = Object.create(Phaser.Sprite.prototype);
lakeStar.prototype.constructor = lakeStar;

lakeStar.prototype.update = function() {

}
