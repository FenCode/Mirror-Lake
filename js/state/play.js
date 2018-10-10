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

	},
	
	update: function() {

	// Char control is implemented in protag.js
}