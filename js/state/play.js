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

		//middle blocker
		bounds = new Phaser.Rectangle(0, game.height/2, game.width, 1320);
		// bg music
		var musics = game.add.audio('twinkle', 0.5, true);
		musics.play();

		// adding reset button
		resetButton = game.add.button(64, 32, 'reset', resetPlay, this);
   		resetButton.anchor.setTo(0.5);
   		resetButton.scale.setTo(0.3);

   		// adding a mini instruction panel
    	rectangle = game.add.image(game.width / 2, game.height / 2, 'rectangle');
    	rectangle.anchor.setTo(0.5);
    	rectangle.scale.setTo(0.6);
    	style = {font: '32px Arial', fill: '#FFFFFF', wordWrap: true, wordWrapWidth: rectangle.width, align: 'center'};
    	text = game.add.text(0, 0, 'Drag the stars in the lake to move the stars in the sky until the sky stars lock in place. Then, use WAD to move the octoalien to the moon!\n\nClick to continue.', style);
    	text.anchor.setTo(0.5);
    	rectangle.addChild(text);
    	// destroy rectangle on click; destroySprite function in play.js
    	rectangle.inputEnabled = true;
    	rectangle.events.onInputDown.add(destroySprite, this);

    	// bg lakestars
		this.bglakestar = game.add.group();
		bglakeStar = this.bglakestar.create(80, 500, 'lakeStar2');
		bglakeStar.anchor.setTo(0.5);
		bglakeStar.scale.setTo(0.5);

		bglakeStar2 = this.bglakestar.create(240, 500, 'lakeStar2');
		bglakeStar2.anchor.setTo(0.5);
		bglakeStar2.scale.setTo(0.5);

		bglakeStar3 = this.bglakestar.create(400, 500, 'lakeStar2');
		bglakeStar3.anchor.setTo(0.5);
		bglakeStar3.scale.setTo(0.5);

		bglakeStar4 = this.bglakestar.create(480, 500, 'lakeStar2');
		bglakeStar4.anchor.setTo(0.5);
		bglakeStar4.scale.setTo(0.5);

		bglakeStar5 = this.bglakestar.create(560, 500, 'lakeStar2');
		bglakeStar5.anchor.setTo(0.5);
		bglakeStar5.scale.setTo(0.5);

		bglakeStar6 = this.bglakestar.create(640, 500, 'lakeStar2');
		bglakeStar6.anchor.setTo(0.5);
		bglakeStar6.scale.setTo(0.5);

		bglakeStar7 = this.bglakestar.create(720, 500, 'lakeStar2');
		bglakeStar7.anchor.setTo(0.5);
		bglakeStar7.scale.setTo(0.5);

		bglakeStar8 = this.bglakestar.create(880, 500, 'lakeStar2');
		bglakeStar8.anchor.setTo(0.5);
		bglakeStar8.scale.setTo(0.5);

		bglakeStar9 = this.bglakestar.create(960, 500, 'lakeStar2');
		bglakeStar9.anchor.setTo(0.5);
		bglakeStar9.scale.setTo(0.5);

		moon = this.bglakestar.create(990, game.height - 60, 'goal');
		moon.anchor.setTo(0.5);
		moon.inputEnabled = true;
		moon.events.onInputDown.add(jump, this)
		moon.scale.y*=-1;

		// adding star prefab to game
		lakestar = new lakeStar(game, 300, game.height / 2 + 100);
		game.add.existing(lakestar);

		lakestar1 = new lakeStar(game, 600, game.height / 2 + 100);
		game.add.existing(lakestar1);

		lakestar2 = new lakeStar(game, 800, game.height / 2 + 100);
		game.add.existing(lakestar2);

		// add goal
		goal = new Goal(game, 990, 90, 1, 1);
		game.add.existing(goal);

		// adding star prefab to game
		skystar = new skyStar(game, game.width / 2, game.height / 2 - 100, lakestar);
		game.add.existing(skystar);

		skystar1 = new skyStar(game, game.width - 150, game.height / 2 - 100, lakestar1);
		game.add.existing(skystar1);

		skystar2 = new skyStar(game, game.width - 150, game.height / 2 - 100, lakestar2);
		game.add.existing(skystar2);

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
		overlapStar.scale.setTo(2);
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


		// setbgStarProperties function in play.js
		bgStar = this.bgstar.create(80, 150, 'skyStar2');
		setbgStarProperties(bgStar);

		bgStar2 = this.bgstar.create(240, 150, 'skyStar2');
		setbgStarProperties(bgStar2);

		bgStar3 = this.bgstar.create(400, 150, 'skyStar2');
		setbgStarProperties(bgStar3);

		bgStar4 = this.bgstar.create(480, 150, 'skyStar2');
		setbgStarProperties(bgStar4);

		bgStar5 = this.bgstar.create(560, 150, 'skyStar2');
		setbgStarProperties(bgStar5);

		bgStar6 = this.bgstar.create(640, 150, 'skyStar2');
		setbgStarProperties(bgStar6);

		bgStar7 = this.bgstar.create(720, 150, 'skyStar2');
		setbgStarProperties(bgStar7);

		bgStar8 = this.bgstar.create(880, 150, 'skyStar2');
		setbgStarProperties(bgStar8);

		bgStar9 = this.bgstar.create(960, 150, 'skyStar2');
		setbgStarProperties(bgStar9);

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



		if(checkOverlap(skystar, overlapStar) && skystar.starLocked == false)
		{
			console.log('skystar locked: ' + skystar.starLocked);
			overlap(skystar, lakestar, overlapStar);
			//once overlapstar in its designated position enable collision disable drag
		}
		if(checkOverlap(skystar1, overlapStar1) && skystar1.starLocked == false)
		{
			overlap(skystar1, lakestar1, overlapStar1);
		}
		if(checkOverlap(skystar2, overlapStar2) && skystar2.starLocked == false)
		{
			overlap(skystar2, lakestar2, overlapStar2);
		}
		if(checkGoalOverlap(player, goal))
		{
			console.log('player collided with goal');
			game.state.start('fishLevel');
		}
		// making instruction thing first viewable thing
		game.world.bringToTop(rectangle);
		game.world.bringToTop(player);
	},
};
function resetPlay()
{
	game.state.start('play');
}

// checks to see if things overlap
function checkOverlap(star1, star2)
{
	if (game.math.difference(star1.x, star2.x) < 2 && game.math.difference(star1.y, star2.y) < 2){
		return true;
	}
}

function checkGoalOverlap(player, goal){
	if (game.math.difference(player.x, goal.x) < 10 && game.math.difference(player.y, goal.y) < 10){
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
	overlapStar.body.setSize(50, 0.0001, 0, 9.5);
	overlapStar.body.immovable = true;

	// replaces skystar sprite, or will call a new sprite
	skystar.alpha = 0;
	this.rskystar = game.add.group();
	let replacementskyStar = this.rskystar.create(skystar.x , skystar.y, 'skyStar2');
	replacementskyStar.anchor.setTo(0.5);

	// replaces lakestar sprite
	lakestar.alpha = 0;
	this.rlakestar = game.add.group();
	let replacementlakeStar = this.rlakestar.create(lakestar.x , lakestar.y, 'lakeStar2');
	replacementlakeStar.anchor.setTo(0.5);
	replacementlakeStar.scale.setTo(0.7);
	// sfx
	var sfx = game.add.audio('magic', 0.3, false);
	sfx.allowMultiple = false;
	sfx.play();

	// changing boolean to true so overlap wont repeat
	skystar.starLocked = true;
}



function destroySprite(sprite)
{
	sprite.destroy();
}

function setbgStarProperties(bgStar)
{
	bgStar.anchor.setTo(0.5);
	bgStar.scale.setTo(0.7);
	//add hitbox to sprite
	bgStar.body.collideWorldBounds = true;
	bgStar.body.setSize(50, 0.0001, 0, 52.5);
	bgStar.body.immovable = true;
}

function jump () {
	game.state.start('fishLevel');
	musics.destroy();
}
