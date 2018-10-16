var game;


// State management
window.onload = function() {
	game = new Phaser.Game(500, 600, Phaser.AUTO, 'game');
	//states
	game.state.add('Load', Load);
	game.state.add('play', play);
	game.state.start('Load');
}

var Load = function(game) {};
Load.prototype = {
	preload: function()
	{
		// setting load path
		game.load.path = './assets/placeholders/';
		game.load.image('lakestar', 'lakeStar.png');
		game.load.image('skystar', 'skyStar.png');
		game.load.image('skystar1', 'skyStar1.png');
		game.load.image('player', 'player.png');
		game.load.image('reset', 'reset.png');

		// Sounds
		// Load all sounds into corresponding array
		game.load.path = './assets/sounds/';
		// BG
		game.load.audio('twinkle', 'TwinkleLittleStar.mp3');
	},
	create: function()
	{
		game.state.start('play');
	},
};

function reset()
{
	game.state.start('play');
}
