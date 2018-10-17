// Player prefab constructor function
function Fisher(game, key, frame, scale, rotation) {
	// call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, game.world.width/2, game.world.height /2, 'player', '', 1);
	this.anchor.setTo(0.5);
	this.scale.setTo(0.1);
	this.enableBody = true;

	game.physics.enable(this, Phaser.Physics.ARCADE);
	// tried to pass a global boolean for movement swtching, didn't work so more low level code for allan!
	fmove = 0;

}
// explicitly define prefab's prototype (Phaser.Sprite) and constructor (Player)
Fisher.prototype = Object.create(Phaser.Sprite.prototype);
Fisher.prototype.constructor = Player;


Fisher.prototype.update = function() {
	//movement controls
	//function to change the value of fmove for character movement switching
	if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)){
			move();
			console.log('spacebar');
	}

	if(fmove == 1){
		if(game.input.keyboard.isDown(Phaser.Keyboard.D)){
			this.body.velocity.x = 50;
			console.log('right');
		}else if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
			this.body.velocity.x = -50;
			console.log('left');
		}else{
			this.body.velocity.x = 0;
		}
	}
}

// changes fmove value to 1 or 0 yadida
function move(){
	if(fmove == 1){
		console.log('fmove false');
		fmove = 0;
	}else{
		fmove = 1;
		console.log('fmove true');
	}
}
