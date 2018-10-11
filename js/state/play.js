var play = function(game) {

	// Global state variables
}
	
play.prototype = {
	preload: function() {
		
	},
	create: function() {
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		platforms = game.add.group(); 
		platforms.enableBody = true; 

		// adding star prefab to game
		star = new Star(game, game.width / 2, game.height / 2,);
		game.add.existing(star);
		// setting anchor to center
		star.anchor.setTo(0.5);	
	},
	
	update: function() {
			
	},
};