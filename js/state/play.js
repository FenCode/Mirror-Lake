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
		lakestar1 = new lakeStar(game, game.width / 2, game.height / 2 + 100);
		game.add.existing(lakestar1);
		// setting anchor to center
		lakestar1.anchor.setTo(0.5);

		// adding star prefab to game
		skystar = new skyStar(game, game.width / 2, game.height / 2 - 100, lakestar1);
		game.add.existing(skystar);
		// setting anchor to center
		skystar.anchor.setTo(0.5);

	},

	update: function() {

	},
};
