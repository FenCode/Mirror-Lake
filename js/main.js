// global variables

var game;
var fmove = false;

// State management
window.onload = function() {
	game = new Phaser.Game(1120, 630, Phaser.AUTO, 'game');
	//states
	game.state.add('Load', Load);
	game.state.add('play', play);
	game.state.add('fishLevel', fishLevel);
	game.state.start('Load');
}

var Load = function(game) {};
Load.prototype = {
	preload: function()
	{
		// setting load path
		game.load.path = './assets/placeholders/';
		game.load.image('skystar1', 'skyStar1.png');
		game.load.image('player', 'player.png');
		game.load.image('reset', 'reset.png');
		game.load.image('rectangle', 'rectangle.png');
		game.load.image('fish', 'fish.png');

		game.load.path = './assets/artwork/';
		game.load.image('skyStar', 'skyStar.png');
		game.load.image('lakeStar', 'lakeStar.png');
		game.load.image('starLakebg', 'starLakebg.png');
		game.load.image('goal', 'moon.png');
		game.load.image('skyStar2', 'skyStar2.png');
		game.load.image('lakeStar2', 'lakeStar2.png');
		game.load.image('fisherboy', 'Fisherboy.png');
		game.load.image('starchild', 'starchild.png');

		// Sounds
		// Load all sounds into corresponding array
		game.load.path = './assets/sounds/';
		// BG
		game.load.audio('twinkle', 'TwinkleLittleStar.mp3');
		// sfx from sound-bible.com
		game.load.audio('magic', 'magic.mp3');

	},
	create: function()
	{
		game.state.start('play');
	},
};

// function reset()
// {
// 	game.state.start('play');
// }
