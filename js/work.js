
require('../index.html');
//require(['../phaser.min.js']);

 var Preload = require('./states/preload.js');
 var Main =require('./states/main.js');

var game = new Phaser.Game(512, 512, Phaser.AUTO, new Boot() );
game.state.add('preload', new Preload());
game.state.add('main', new Main());


var CB1
var CB2
var bullet

function create() {
	CB1 = game.add.sprite(0, 0, 'CB1');
	CB2 = game.add.sprite(40, 0, 'CB2');
	bullet = game.add.sprite(30, 0, 'Bullet');
	
	cursors = game.input.keyboard.createCursorKeys();
	
	game.physics.arcade.enable(CB1);
}

function update() {
	CB1.body.velocity.y = 0;
    CB1.body.velocity.x = 0;

	if (cursors.up.isDown) { CB1.body.velocity.y = -150; }
	else if (cursors.down.isDown) {CB1.body.velocity.y = 150; }
    else if (cursors.left.isDown) { CB1.body.velocity.x = -150; }
    else if (cursors.right.isDown) { CB1.body.velocity.x = 150; }
    else {}
	
}

