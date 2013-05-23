//This file is loaded last, so we can safely know that all core modules have loaded. The game execution acutally starts at the bottom.
$('#loading').hide();
function Program()
{
	this.logger = new Logger();
	this.logger.toConsole("Init","Console Service Started.");
	this.logger.toConsole("None","-------------------------");
	this.logger.toConsole("Init","Pancake Framework Version " + CVER);
	this.logger.toConsole("Init","Written by Will Hunt for Sharpened Studios");
	this.logger.toConsole("None","-------------------------");
}

var program = new Program(); //Start the main program.
var game = new Game(); //Start the game class.
program.logger.toConsole("Init","Program Started. Asset loading shall begin.");
game.loadresources();
game.draw();
