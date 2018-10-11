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
		game.load.image('star', 'star.png');
	},
	create: function()
	{
		game.state.start('play');
	},
};
