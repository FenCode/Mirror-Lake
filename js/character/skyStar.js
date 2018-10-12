// skyStar prefab constructor function
var thislakestarID;

function skyStar(game, xpos, ypos, lakestarID) {

	// call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, xpos, ypos, 'skystar');

	// setting properties
	this.scale.setTo(0.3);

	// for scope reasons
	thislakestarID = lakestarID;
}
// explicitly define prefab's prototype (Phaser.Sprite) and constructor (skyStar)
skyStar.prototype = Object.create(Phaser.Sprite.prototype);
skyStar.prototype.constructor = skyStar;

skyStar.prototype.update = function() {
	this.x = thislakestarID.x;
	this.y = -(thislakestarID.y - 600);

	//console.log('this.x pos: ' + this.x);
	//console.log('this.y pos: ' + this.y)
}
