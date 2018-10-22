var play = function(game) {

	// Global state variables
	var fmove = 0;
}


play.prototype = {
	preload: function() {
		this.bgstar;
	},
	create: function() {

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// add background
		background = game.add.image(0, 0, 'starLakebg');
		background.scale.setTo(0.7);

		// bg music
		var musics = game.add.audio('twinkle', 0.5, true);
		//musics.play();

		// adding reset button
		resetButton = game.add.button(64, 32, 'reset', resetPlay, this);
   		resetButton.anchor.setTo(0.5);
   		resetButton.scale.setTo(0.3);

   		// adding a mini instruction panel
    	rectangle = game.add.image(game.width / 2, game.height / 2, 'rectangle');
    	rectangle.anchor.setTo(0.5);
    	rectangle.scale.setTo(0.6);
    	style = {font: '32px Arial', fill: '#FFFFFF', wordWrap: true, wordWrapWidth: rectangle.width, align: 'center'};
    	text = game.add.text(0, 0, 'Drag the golden stars to move the blue stars in the sky to their correct positions. Then, use WASD to move the sky player to the goal!\n\nClick to continue.', style);
    	text.anchor.setTo(0.5);
    	rectangle.addChild(text);
    	// destroy rectangle on click; destroySprite function in play.js
    	rectangle.inputEnabled = true;
    	rectangle.events.onInputDown.add(destroySprite, this);

		// adding star prefab to game
		lakestar = new lakeStar(game, 300, game.height / 2 + 100);
		game.add.existing(lakestar);
		// setting anchor to center
		lakestar.anchor.setTo(0.5);


		lakestar1 = new lakeStar(game, 600, game.height / 2 + 100);
		game.add.existing(lakestar1);
		lakestar1.anchor.setTo(0.5);

		lakestar2 = new lakeStar(game, 800, game.height / 2 + 100);
		game.add.existing(lakestar2);
		lakestar2.anchor.setTo(0.5);

		// add goal
		goal = new Goal(game, 960, 120, 1, 1);
		game.add.existing(goal);

		// adding star prefab to game
		skystar = new skyStar(game, game.width / 2, game.height / 2 - 100, lakestar);
		game.add.existing(skystar);
		// setting anchor to center
		skystar.anchor.setTo(0.5);

		skystar1 = new skyStar(game, game.width - 150, game.height / 2 - 100, lakestar1);
		game.add.existing(skystar1);
		skystar1.anchor.setTo(0.5);

		skystar2 = new skyStar(game, game.width - 150, game.height / 2 - 100, lakestar2);
		game.add.existing(skystar2);
		skystar2.anchor.setTo(0.5);

		// fisherboy/girl/whatever
		fisher = new Fisher(game,100,100,1,1);
		game.add.existing(fisher);

		// background stars that made the bridge?

		// creating background star group
		this.bgstar = game.add.group();
		this.game.physics.enable(this.bgstar, Phaser.Physics.ARCADE);
		this.bgstar.enableBody = true;

		// bgstar to overlap with skystar
		overlapStar = this.bgstar.create(160, 150, 'skystar1');
		overlapStar.anchor.setTo(0.5);
		//bgStar2.scale.setTo(2);
		overlapStar.enableBody = true;


		//bg star to overlap with skystar2
		overlapStar1 = this.bgstar.create(320, 150, 'skystar1');
		overlapStar1.anchor.setTo(0.5);
		overlapStar1.enableBody = true;

		//bg star to overlap with skystar3
		overlapStar2 = this.bgstar.create(800, 150, 'skystar1');
		overlapStar2.anchor.setTo(0.5);
		overlapStar2.enableBody = true;


		bgStar = this.bgstar.create(80, 150, 'skyStar');
		bgStar.anchor.setTo(0.5);
		//add hitbox to sprite
		bgStar.body.collideWorldBounds = true;
		bgStar.body.setSize(60, 1, 0, 52);
		bgStar.body.immovable = true;


		bgStar2 = this.bgstar.create(240, 150, 'skyStar');
		bgStar2.anchor.setTo(0.5);
		bgStar2.body.collideWorldBounds = true;
		bgStar2.body.setSize(60, 1, 0, 52);
		bgStar2.body.immovable = true;

		bgStar3 = this.bgstar.create(400, 150, 'skyStar');
		bgStar3.anchor.setTo(0.5);
		bgStar3.body.collideWorldBounds = true;
		bgStar3.body.setSize(60, 1, 0, 52);
		bgStar3.body.immovable = true;

		bgStar4 = this.bgstar.create(480, 150, 'skyStar');
		bgStar4.anchor.setTo(0.5);
		bgStar4.body.collideWorldBounds = true;
		bgStar4.body.setSize(60, 1, 0, 52);
		bgStar4.body.immovable = true;

		bgStar5 = this.bgstar.create(560, 150, 'skyStar');
		bgStar5.anchor.setTo(0.5);
		bgStar5.body.collideWorldBounds = true;
		bgStar5.body.setSize(60, 1, 0, 52);
		bgStar5.body.immovable = true;

		bgStar6 = this.bgstar.create(640, 150, 'skyStar');
		bgStar6.anchor.setTo(0.5);
		bgStar6.body.collideWorldBounds = true;
		bgStar6.body.setSize(60, 1, 0, 52);
		bgStar6.body.immovable = true;

		bgStar7 = this.bgstar.create(720, 150, 'skyStar');
		bgStar7.anchor.setTo(0.5);
		bgStar7.body.collideWorldBounds = true;
		bgStar7.body.setSize(60, 1, 0, 52);
		bgStar7.body.immovable = true;

		bgStar8 = this.bgstar.create(880, 150, 'skyStar');
		bgStar8.anchor.setTo(0.5);
		bgStar8.body.collideWorldBounds = true;
		bgStar8.body.setSize(60, 1, 0, 52);
		bgStar8.body.immovable = true;

		bgStar9 = this.bgstar.create(960, 150, 'skyStar');
		bgStar9.anchor.setTo(0.5);
		bgStar9.body.collideWorldBounds = true;
		bgStar9.body.setSize(60, 1, 0, 52);
		bgStar9.body.immovable = true;

		// bg lakestars

		this.bglakestar = game.add.group();
		bglakeStar = this.bglakestar.create(80, 450, 'lakeStar');
		bglakeStar.anchor.setTo(0.5);
		bglakeStar.scale.setTo(0.5);

		bglakeStar2 = this.bglakestar.create(240, 450, 'lakeStar');
		bglakeStar2.anchor.setTo(0.5);
		bglakeStar2.scale.setTo(0.5);

		bglakeStar3 = this.bglakestar.create(400, 450, 'lakeStar');
		bglakeStar3.anchor.setTo(0.5);
		bglakeStar3.scale.setTo(0.5);

		bglakeStar4 = this.bglakestar.create(480, 450, 'lakeStar');
		bglakeStar4.anchor.setTo(0.5);
		bglakeStar4.scale.setTo(0.5);

		bglakeStar5 = this.bglakestar.create(560, 450, 'lakeStar');
		bglakeStar5.anchor.setTo(0.5);
		bglakeStar5.scale.setTo(0.5);

		bglakeStar6 = this.bglakestar.create(640, 450, 'lakeStar');
		bglakeStar6.anchor.setTo(0.5);
		bglakeStar6.scale.setTo(0.5);

		bglakeStar7 = this.bglakestar.create(720, 450, 'lakeStar');
		bglakeStar7.anchor.setTo(0.5);
		bglakeStar7.scale.setTo(0.5);

		// player
		player = new Player(game, 50, 50, 1, 1);
		game.add.existing(player);
	},
	update: function() {
		//collision between player and skystars
		game.physics.arcade.collide(player, bgStar);
		game.physics.arcade.collide(player, bgStar2);
		game.physics.arcade.collide(player, bgStar3);
		game.physics.arcade.collide(player, bgStar4);
		game.physics.arcade.collide(player, bgStar5);
		game.physics.arcade.collide(player, bgStar6);
		game.physics.arcade.collide(player, bgStar7);
		game.physics.arcade.collide(player, bgStar8);
		game.physics.arcade.collide(player, bgStar9);
		game.physics.arcade.collide(player, overlapStar);
		game.physics.arcade.collide(player, overlapStar1);
		game.physics.arcade.collide(player, overlapStar2);


		if(checkOverlap(skystar, overlapStar))
		{
			overlap(skystar, lakestar, overlapStar);
			//once overlapstar in its designated position enable collision disable drag
		}
		if(checkOverlap(skystar1, overlapStar1))
		{
			overlap(skystar1, lakestar1, overlapStar1);
		}
		if(checkOverlap(skystar2, overlapStar2))
		{
			overlap(skystar2, lakestar2, overlapStar2);
		}
		if(checkOverlap(player, goal))
		{
			console.log('player collided with goal');
			game.state.start('fishLevel');
		}
		// making instruction thing first viewable thing
		game.world.bringToTop(rectangle);
	},
};

// checks to see if things overlap
function checkOverlap(star1, star2)
{
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
	overlapStar.body.collideWorldBounds = true;
	overlapStar.body.setSize(70, 1, 0, 10.5);
	overlapStar.body.immovable = true;
}

function destroySprite(sprite)
{
	sprite.destroy();
}

function resetPlay()
{
	game.state.start('play');
}
