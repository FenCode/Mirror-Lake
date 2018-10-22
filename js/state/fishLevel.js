var fishLevel = function(game) {

	// Global state variables
	var fmove = 0;
}


fishLevel.prototype = {
	preload: function() {
		this.bgstar;
	},
	create: function() {

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// bg music
		var musics = game.add.audio('twinkle', 0.5, true);
		//musics.play();

		// adding reset button 
		resetButton = game.add.button(64, 32, 'reset', resetFish, this);
    	resetButton.anchor.setTo(0.5);
    	resetButton.scale.setTo(0.3);

    	// adding a mini instruction panel
    	rectangle = game.add.image(game.width / 2, game.height / 2, 'rectangle');
    	rectangle.anchor.setTo(0.5);
    	rectangle.scale.setTo(0.6);
    	style = {font: '32px Arial', fill: '#FFFFFF', wordWrap: true, wordWrapWidth: rectangle.width, align: 'center'};
    	text = game.add.text(0, 0, 'Avoid the fish!\n\nClick to continue.', style);
    	text.anchor.setTo(0.5);
    	rectangle.addChild(text);
    	// destroy rectangle on click; destroySprite function in play.js
    	rectangle.inputEnabled = true;
    	rectangle.events.onInputDown.add(destroySprite, this);

		// adding star prefab to game
		lakestar = new lakeStar(game, game.width / 2, game.height / 2 + 100);
		game.add.existing(lakestar);
		// setting anchor to center
		lakestar.anchor.setTo(0.5);

		lakestar1 = new lakeStar(game, game.width - 150, game.height / 2 + 100);
		game.add.existing(lakestar1);
		lakestar1.anchor.setTo(0.5);

		lakestar2 = new lakeStar(game, 320, game.height / 2 + 150);
		game.add.existing(lakestar2);
		lakestar2.anchor.setTo(0.5);

		// player
		player = new Player(game, 50, 50, 1, 1);
		game.add.existing(player);

		// add goal
		goal = new Goal(game, 470, 180, 1, 1);
		game.add.existing(goal);

		// adding star prefab to game
		skystar = new skyStar(game, game.width / 2, game.height / 2 - 100, lakestar);
		game.add.existing(skystar);
		// setting anchor to center
		skystar.anchor.setTo(0.5);


		skystar2 = new skyStar(game, game.width - 150, game.height / 2 - 100, lakestar1);
		game.add.existing(skystar2);
		skystar2.anchor.setTo(0.5);

		skystar3 = new skyStar(game, game.width - 80, game.height / 2 - 300, lakestar2);
		game.add.existing(skystar3);
		skystar3.anchor.setTo(0.5);


		// fisherboy/girl/whatever
		fisher = new Fisher(game,100,100,1,1);
		game.add.existing(fisher);

		// background stars that made the bridge?

		// creating background star group
		this.bgstar = game.add.group();
		this.game.physics.enable(this.bgstar, Phaser.Physics.ARCADE);
		this.bgstar.enableBody = true;
		console.log('abc');

		// bgstar to overlap with skystar
		overlapStar = this.bgstar.create(170, 210, 'skystar1');
		overlapStar.anchor.setTo(0.5);
		//bgStar2.scale.setTo(2);
		overlapStar.enableBody = true;

		//bg star to overlap with skystar2
		overlapStar2 = this.bgstar.create(250, 180, 'skystar1');
		overlapStar2.anchor.setTo(0.5);
		overlapStar2.enableBody = true;

		overlapStar3 = this.bgstar.create(440, 250, 'skystar1');
		overlapStar3.anchor.setTo(0.5);
		overlapStar3.enableBody = true;

		bgStar = this.bgstar.create(80, 150, 'skystar');
		bgStar.anchor.setTo(0.5);
		//add hitbox to sprite
		bgStar.body.collideWorldBounds = true;
		bgStar.body.setSize(60, 1, 0, 40);
		bgStar.body.immovable = true;


		bgStar2 = this.bgstar.create(350, 280, 'skystar');
		bgStar2.anchor.setTo(0.5);
		bgStar2.body.collideWorldBounds = true;
		bgStar2.body.setSize(60, 1, 0, 40);
		bgStar2.body.immovable = true;

		bgStar3 = this.bgstar.create(200, 40, 'skystar');
		bgStar3.anchor.setTo(0.5);
		bgStar3.body.collideWorldBounds = true;
		bgStar3.body.setSize(10, 1, 0, 10);
		bgStar3.body.immovable = true;

		bgStar4 = this.bgstar.create(530, 220, 'skystar');
		bgStar4.anchor.setTo(0.5);
		bgStar4.body.collideWorldBounds = true;
		bgStar4.body.setSize(60, 1, 0, 40);
		bgStar4.body.immovable = true;

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
		game.physics.arcade.collide(player, bgStar);
		game.physics.arcade.collide(player, bgStar2);
		game.physics.arcade.collide(player, bgStar3);
		game.physics.arcade.collide(player, bgStar4);
		game.physics.arcade.collide(player, overlapStar);
		game.physics.arcade.collide(player, overlapStar2);
		game.physics.arcade.collide(player, overlapStar3);



		if(checkOverlap(skystar, overlapStar))
		{
			overlap(skystar, lakestar, overlapStar);
			//once overlapstar in its designated position enable collision disable drag
		}
		if(checkOverlap(skystar2, overlapStar2))
		{
			overlap(skystar2, lakestar1, overlapStar2);
		}
		if(checkOverlap(skystar3, overlapStar3))
		{
			overlap(skystar3, lakestar2, overlapStar3);
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
function resetFish()
{
	game.state.start('fishLevel');
}
