// skyStar prefab constructor function
var thislakestarID;

function skyStar(game, xpos, ypos, lakestarID) {

	// call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, xpos, ypos, 'skyStar');
	this.enableBody = true;


	// for scope reasons
	this.thislakestarID = lakestarID;
}
// explicitly define prefab's prototype (Phaser.Sprite) and constructor (skyStar)
skyStar.prototype = Object.create(Phaser.Sprite.prototype);
skyStar.prototype.constructor = skyStar;

skyStar.prototype.update = function() {
	this.x = this.thislakestarID.x;
	this.y = -(this.thislakestarID.y - 600);

	//console.log('this.x pos: ' + this.x);
	//console.log('this.y pos: ' + this.y)
}
