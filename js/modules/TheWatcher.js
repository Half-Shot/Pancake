//Define a structure here
//Name: The Watcher
//By:	Will Hunt
//E-mail: half-shot@molrams.com
//Description:	A simple script to swap scenes around for the game when needed.

//Feel free to remove any functions you don't use. Pancake ommits any missing functions.
//Methods: load(), update(), draw(), unload()
function TheWatcher()
{
	this.name = "TheWatcher"; //Name of your module.
	this.version = 0.01; //Ver
	this.shouldUpdate = true;
	this.shouldDraw = false;
	this.shouldLoad = true;
	this.shouldUnload = false;
}

TheWatcher.prototype.load = function()
{
	game.sceneManager.changeScene("introduction-screen");
};

TheWatcher.prototype.update = function()
{

};

TheWatcher.prototype.draw = function()
{

};

TheWatcher.prototype.unload = function()
{
	
}

modules.push(new TheWatcher()); //Pushes the module to the global module list. Not needed if your not using it in game.
