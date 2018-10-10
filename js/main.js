var game;


// State management
window.onload = function() {
	game = new Phaser.Game(500, 600, Phaser.AUTO, 'game');
	//states
	game.state.add('play', play);
	game.state.start('play');
}
