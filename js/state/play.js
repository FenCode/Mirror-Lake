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
		lakestar = new lakeStar(game, game.width / 2, game.height / 2 + 100);
		game.add.existing(lakestar);
		// setting anchor to center
		lakestar.anchor.setTo(0.5);

		lakestar1 = new lakeStar(game, game.width - 150, game.height / 2 + 100);
		game.add.existing(lakestar1);
		lakestar1.anchor.setTo(0.5);


		// adding star prefab to game
		skystar = new skyStar(game, game.width / 2, game.height / 2 - 100, lakestar);
		game.add.existing(skystar);
		skystar.enableBody = true;
		// setting anchor to center
		skystar.anchor.setTo(0.5);

		skystar2 = new skyStar(game, game.width - 150, game.height / 2 - 100, lakestar1);
		game.add.existing(skystar2);
		skystar2.anchor.setTo(0.5);

		// player
		player = new Player(game, 50, 50, 1, 1);
		game.add.existing(player);

		// background stars that made the bridge?

		// creating background star group
		this.bgstar = game.add.group();
		this.bgstar.physicsBodyType = Phaser.Physics.ARCADE;
		this.bgstar.enableBody = true;

		// bgstar to overlap with skystar
		overlapStar = this.bgstar.create(160, 150, 'skystar1');
		overlapStar.anchor.setTo(0.5);
		//bgStar2.scale.setTo(2);
		overlapStar.enableBody = true;

		//bg star to overlap with skystar2
		overlapStar2 = this.bgstar.create(320, 150, 'skystar1');
		overlapStar2.anchor.setTo(0.5);
		overlapStar2.enableBody = true;

		bgStar = this.bgstar.create(80, 150, 'skystar');
		bgStar.anchor.setTo(0.5);

		bgStar2 = this.bgstar.create(240, 150, 'skystar');
		bgStar2.anchor.setTo(0.5);

		bgStar3 = this.bgstar.create(400, 150, 'skystar');
		bgStar3.anchor.setTo(0.5);

		// bg lakestars

		this.bglakestar = game.add.group();
		bglakeStar = this.bglakestar.create(80, 450, 'lakestar');
		bglakeStar.anchor.setTo(0.5);
		bglakeStar.scale.setTo(0.1);

		bglakeStar2 = this.bglakestar.create(240, 450, 'lakestar');
		bglakeStar2.anchor.setTo(0.5);
		bglakeStar2.scale.setTo(0.1);

		bglakeStar3 = this.bglakestar.create(400, 450, 'lakestar');
		bglakeStar3.anchor.setTo(0.5);
		bglakeStar3.scale.setTo(0.1);

	},
	update: function() {

		// overlap not working obviously
		// game.physics.arcade.overlap(skystar, this.bgstar, this.bridge1, null, this);
		// overlap = game.physics.arcade.overlap(skystar2, this.bgstar, this.bridge2, null, this);

		if(checkOverlap(skystar, overlapStar))
		{
			overlap(skystar, lakestar, overlapStar);
			console.log('bridge 1 overlap');
		}
		if(checkOverlap(skystar2, overlapStar2))
		{
			overlap(skystar2, lakestar1, overlapStar2);
			console.log('bridge 2 overlap');
			// call overlap function
		}
	},
	// bridge1: function(star1, star2) {
	// 	console.log('bridge 1 damit');
	// },
	// bridge2: function() {
	// 	console.log('work goddamit');
	// },
	// render: function() {
	// 	game.debug.body(true);
	// }
};

// example from phaser site
// checks to see if things overlap
function checkOverlap(star1, star2)
{
	//var bounds1 = star1.getBounds();
	//var bounds2 = star2.getBounds();
	//return Phaser.Rectangle.intersects(bounds1, bounds2);
	if (game.math.difference(star1.x, star2.x)<1 && game.math.difference(star1.y, star2.y)<1){
		return true;
	}
}
// if correct stars overlap, then snap them in place
function overlap(skystar, lakestar, overlapStar)
{
	skystar.x = overlapStar.x;
	skystar.y = overlapStar.y;
	lakestar.input.disableDrag();
	// not snapping correctly
	//console.log('skystar x: ' + skystar.x);
	//console.log('overlap star x: ' + overlapStar.x);
}
