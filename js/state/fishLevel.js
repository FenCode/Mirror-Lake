var fishLevel = function(game) {

	// Global state variables
	var fmove = 0;
}

var fishGone = false;
fishLevel.prototype = {
	preload: function() {
		this.bgstar;
	},
	create: function() {

		background = game.add.image(0, -120, 'starLakebg');

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// bg music

		// adding reset button
		resetButton = game.add.button(64, 32, 'reset', resetFish, this);
    	resetButton.anchor.setTo(0.5);
    	resetButton.scale.setTo(0.3);

    	// adding a mini instruction panel
    	rectangle = game.add.image(game.width / 2, game.height / 2, 'rectangle');
    	rectangle.anchor.setTo(0.5);
    	rectangle.scale.setTo(0.6);
    	style = {font: '32px Arial', fill: '#FFFFFF', wordWrap: true, wordWrapWidth: rectangle.width, align: 'center'};
    	instructionsText = 'Oh no! That stupid fish (the last of its kind) is messing with the stars. Click on it to kill it!\n\nClick to continue.'
    	text = game.add.text(0, 0, instructionsText, style);
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

		bglakeStar2 = this.bglakestar.create(450, 370, 'lakeStar2');
		bglakeStar2.anchor.setTo(0.5);
		bglakeStar2.scale.setTo(0.5);

		bglakeStar3 = this.bglakestar.create(300, game.height - 50, 'lakeStar2');
		bglakeStar3.anchor.setTo(0.5);
		bglakeStar3.scale.setTo(0.5);

		bglakeStar4 = this.bglakestar.create(630, 400, 'lakeStar2');
		bglakeStar4.anchor.setTo(0.5);
		bglakeStar4.scale.setTo(0.5);

		bglakeStar5 = this.bglakestar.create(700, 420, 'lakeStar2');
		bglakeStar5.anchor.setTo(0.5);
		bglakeStar5.scale.setTo(0.5);

		bglakeStar6 = this.bglakestar.create(770, 440, 'lakeStar2');
		bglakeStar6.anchor.setTo(0.5);
		bglakeStar6.scale.setTo(0.5);

		bglakeStar7 = this.bglakestar.create(900, 470, 'lakeStar2');
		bglakeStar7.anchor.setTo(0.5);
		bglakeStar7.scale.setTo(0.5);

		moon = this.bglakestar.create(1050, 450, 'goal');
		moon.anchor.setTo(0.5);
		moon.scale.y*=-1;

		// creating lake star group
		lakeStars = game.add.group();

		// adding star prefab to game
		lakestar = new lakeStar(game, game.width / 2, game.height / 2 + 100);
		game.add.existing(lakestar);

		lakestar1 = new lakeStar(game, game.width - 150, game.height / 2 + 100);
		game.add.existing(lakestar1);

		lakestar2 = new lakeStar(game, 320, game.height / 2 + 150);
		game.add.existing(lakestar2);

		lakestar3 = new lakeStar(game, 700, game.height / 2 + 150);
		game.add.existing(lakestar3);

		// adding lakestars into group
		lakeStars.add(lakestar);
		lakeStars.add(lakestar1);
		lakeStars.add(lakestar2);
		lakeStars.add(lakestar3);

		// add goal
		goal = new Goal(game, 1050, 200, 1, 1);
		game.add.existing(goal);

		// adding star prefab to game
		skystar = new skyStar(game, game.width / 2, game.height / 2 - 50, lakestar);
		game.add.existing(skystar);

		skystar1 = new skyStar(game, game.width - 150, game.height / 2 - 60, lakestar1);
		game.add.existing(skystar1);

		skystar2 = new skyStar(game, game.width - 80, game.height / 2 - 350, lakestar2);
		game.add.existing(skystar2);

		skystar3 = new skyStar(game, 800, game.height / 2 - 350, lakestar3);
		game.add.existing(skystar3);

		// skyStars to follow movement
		skyStars = game.add.group();

		skyStars.add(skystar);
		skyStars.add(skystar1);
		skyStars.add(skystar2);
		skyStars.add(skystar3);


		// add timed loop to move lake stars ever 2 seconds
		game.time.events.loop(2000, moveStars, this, lakeStars, skyStars);

		// fisherboy/girl/whatever
		fisher = new Fisher(game,100,100,1,1);
		game.add.existing(fisher);

		// background stars that made the bridge?

		// creating background star group
		this.bgstar = game.add.group();
		this.game.physics.enable(this.bgstar, Phaser.Physics.ARCADE);
		this.bgstar.enableBody = true;

		// bgstar to overlap with skystar
		overlapStar = this.bgstar.create(200, 210, 'skystar1');
		overlapStar.anchor.setTo(0.5);
		//bgStar2.scale.setTo(2);
		overlapStar.enableBody = true;
		overlapStar.body.immovable = true;

		//bg star to overlap with skystar2
		overlapStar1 = this.bgstar.create(320, 240, 'skystar1');
		overlapStar1.anchor.setTo(0.5);
		overlapStar1.enableBody = true;
		overlapStar1.body.immovable = true;

		overlapStar2 = this.bgstar.create(560, 270, 'skystar1');
		overlapStar2.anchor.setTo(0.5);
		overlapStar2.enableBody = true;
		overlapStar2.body.immovable = true;

		overlapStar3 = this.bgstar.create(840, 190, 'skystar1');
		overlapStar3.anchor.setTo(0.5);
		overlapStar3.enableBody = true;
		overlapStar3.body.immovable = true;

		bgStar = this.bgstar.create(80, 150, 'skyStar2');
		setbgStarProperties(bgStar);

		bgStar2 = this.bgstar.create(450, 280, 'skyStar2');
		setbgStarProperties(bgStar2);

		bgStar3 = this.bgstar.create(300, 40, 'skyStar2');
		setbgStarProperties(bgStar3);

		bgStar4 = this.bgstar.create(630, 250, 'skyStar2');
		setbgStarProperties(bgStar4);

		bgStar5 = this.bgstar.create(700, 230, 'skyStar2');
		setbgStarProperties(bgStar5);

		bgStar6 = this.bgstar.create(770, 210, 'skyStar2');
		setbgStarProperties(bgStar6);

		bgStar7 = this.bgstar.create(900, 180, 'skyStar2');
		setbgStarProperties(bgStar7);

		// fish
		fish = game.add.sprite(180, 400, 'fish');
		fish.scale.setTo(0.05);
		fish.inputEnabled = true;
    	fish.events.onInputDown.add(destroyFish, this);

		// player
		player = new Player(game, 50, 50, 1, 1);
		game.add.existing(player);

	},
	update: function() {
		game.physics.arcade.collide(player, bgStar);
		game.physics.arcade.collide(player, bgStar2);
		game.physics.arcade.collide(player, bgStar3);
		game.physics.arcade.collide(player, bgStar4);
		game.physics.arcade.collide(player, bgStar5);
		game.physics.arcade.collide(player, bgStar6);
		game.physics.arcade.collide(player, bgStar7);
		game.physics.arcade.collide(player, overlapStar);
		game.physics.arcade.collide(player, overlapStar1);
		game.physics.arcade.collide(player, overlapStar2);
		game.physics.arcade.collide(player, overlapStar3);

		if(checkOverlap(skystar, overlapStar) && fishGone && skystar.starLocked == false)
		{
			//once overlapstar in its designated position enable collision disable drag
			overlap(skystar, lakestar, overlapStar);
		}
		if(checkOverlap(skystar1, overlapStar1) && fishGone && skystar1.starLocked == false)
		{
			overlap(skystar1, lakestar1, overlapStar1);
		}
		if(checkOverlap(skystar2, overlapStar2) && fishGone && skystar2.starLocked == false)
		{
			overlap(skystar2, lakestar2, overlapStar2);
		}
		if(checkOverlap(skystar3, overlapStar3) && fishGone && skystar3.starLocked == false)
		{
			overlap(skystar3, lakestar3, overlapStar3);
		}
		if(checkGoalOverlap(player, goal))
		{
			console.log('player collided with goal');
			end();
		}
		// making instruction thing first viewable thing
		game.world.bringToTop(rectangle);
		game.world.bringToTop(player);
	},
};
function resetFish()
{
	game.state.start('fishLevel');
	musics.stop();
}

function end()
{
	rectangle = game.add.image(game.width / 2, game.height / 2, 'rectangle');
    rectangle.anchor.setTo(0.5);
   	rectangle.scale.setTo(0.6);
   	style = {font: '32px Arial', fill: '#FFFFFF', wordWrap: true, wordWrapWidth: rectangle.width, align: 'center'};
   	text = game.add.text(0, 0, 'You probably should not have killed that fish...\n\nThe End', style);
   	text.anchor.setTo(0.5);
   	rectangle.addChild(text);
}

function moveStars(lakeStar, skyStar)
{
	// if fish is in water, move the stars
	if(!fishGone){
		lakeStar.x += 20;
		skyStar.x += 20;
	}
}

function destroyFish(fish)
{
	fish.destroy();
	fishGone = true;
}
