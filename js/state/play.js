var play = function(game) {

	// Global state variables
}




play.prototype = {
	preload: function() {
		this.bgstar;
	},
	create: function() {

		game.physics.startSystem(Phaser.Physics.ARCADE);
		platforms = game.add.group();
		platforms.enableBody = true;

		// bg music
		var musics = game.add.audio('twinkle', 0.5, true);
		musics.play();

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
		skystar.enableBody = true;
		// setting anchor to center
		skystar.anchor.setTo(0.5);

		skystar2 = new skyStar(game, game.width - 150, game.height / 2 - 100, lakestar2);
		game.add.existing(skystar2);
		skystar2.anchor.setTo(0.5);

		// player
		player = new Player(game, 50, 50, 1, 1);
		game.add.existing(player);

		// background stars that made the bridge?

		this.bgstar = game.add.group();
		this.bgstar.physicsBodyType = Phaser.Physics.ARCADE;
		this.bgstar.enableBody = true;
		
		let bgStar = this.bgstar.create(80, 150, 'skystar');
		bgStar.anchor.setTo(0.5);

		// bgstar to overlap with skystar
		bgStar2 = this.bgstar.create(160, 150, 'skystar');
		bgStar2.anchor.setTo(0.5);
		//bgStar2.scale.setTo(2);
		bgStar2.enableBody = true;

		bgStar = this.bgstar.create(240, 150, 'skystar');
		bgStar.anchor.setTo(0.5);

		//bg star to overlap with skystar2
		bgStar3 = this.bgstar.create(320, 150, 'skystar1');
		bgStar3.anchor.setTo(0.5);
		bgStar3.enableBody = true;
		
		bgStar = this.bgstar.create(400, 150, 'skystar');
		bgStar.anchor.setTo(0.5);
		
		// bg lakestars

		this.bglakestar = game.add.group();
		let bglakeStar = this.bglakestar.create(80, 450, 'lakestar');
		bglakeStar.anchor.setTo(0.5);
		bglakeStar.scale.setTo(0.1);

		bglakeStar = this.bglakestar.create(240, 450, 'lakestar');
		bglakeStar.anchor.setTo(0.5);
		bglakeStar.scale.setTo(0.1);

		bglakeStar = this.bglakestar.create(400, 450, 'lakestar');
		bglakeStar.anchor.setTo(0.5);
		bglakeStar.scale.setTo(0.1);

	},
	

	update: function() {

		// overlap not working obviously
		game.physics.arcade.overlap(skystar, this.bgstar, this.bridge1, null, this);
		overlap = game.physics.arcade.overlap(skystar2, this.bgstar, this.bridge2, null, this);

	},
	bridge1: function(star1, star2) {
		console.log('bridge 1 damit');
	},
	bridge2: function() {
		console.log('work goddamit');
	},
	render: function() {
		game.debug.body(true);
	}
};


