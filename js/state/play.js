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

		lakestar2 = new lakeStar(game, game.width - 150, game.height / 2 + 100);
		game.add.existing(lakestar2);
		lakestar2.anchor.setTo(0.5);


		// adding star prefab to game
		skystar = new skyStar(game, game.width / 2, game.height / 2 - 100, lakestar1);
		game.add.existing(skystar);
		// setting anchor to center
		skystar.anchor.setTo(0.5);

		skystar2 = new skyStar(game, game.width - 150, game.height / 2 - 100, lakestar2);
		game.add.existing(skystar2);
		skystar2.anchor.setTo(0.5);

		// player
		player = new Player(game, 100, 50, 1, 1);
		game.add.existing(player);

	},

	update: function() {

	},
};
