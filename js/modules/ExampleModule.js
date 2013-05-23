//Define a structure here
//Name: Example Module
//By:	Will Hunt
//E-mail: half-shot@molrams.com
//Description:	A example module showing how to structure a module. Copy paste this plugin and paste your plugin file name into CLoader.js under modules to load it in Pancake when the framework loads.

//Feel free to remove any functions you don't use. Pancake ommits any missing functions.
//Methods: load(), update(), draw(), unload()
function ExampleModule()
{
	this.name = "ExampleModule";
	this.version = 0.01;
}

//Called when the program is loading resources.
ExampleModule.prototype.load = function()
{
	program.logger.toConsole("Module","ExampleModule> Loaded"); //Its good manners to tell the console what your doing ;)
};

//Called when the program is in the update loop.
ExampleModule.prototype.update = function()
{
	//program.logger.toConsole("Module","ExampleModule> Updating"); //Ok, not literally XD.
};

//Called when the program is in the draw loop.
ExampleModule.prototype.draw = function()
{
	game.overlay.clear();
	//Draw a red rectangle as a test.
	//game.overlay.fillRectangle(new Rectangle(20,20,20,20),"#6600FF");
	//Y
	game.overlay.drawRectangle(new Rectangle(00,00,20,40),"#6600FF",1);
	game.overlay.drawRectangle(new Rectangle(20,20,20,60),"#6600FF",1);
	game.overlay.drawRectangle(new Rectangle(40,00,20,40),"#6600FF",1);
	//O
	game.overlay.drawRectangle(new Rectangle(80,00,60,80),"#6600FF",1);
	game.overlay.drawRectangle(new Rectangle(90,10,40,60),"#6600FF",1);
	//L
	game.overlay.drawRectangle(new Rectangle(160,00,20,80),"#6600FF",1);
	game.overlay.drawRectangle(new Rectangle(180,60,40,20),"#6600FF",1);

	//O
	game.overlay.drawRectangle(new Rectangle(240,00,60,80),"#6600FF",1);
	game.overlay.drawRectangle(new Rectangle(250,10,40,60),"#6600FF",1);


	
};

//Called when the program is being unloaded
ExampleModule.prototype.unload = function()
{
	alert("Test Module unloaded!")
}

//Make sure to add this in if you want to be able to use your module.
modules.push(new ExampleModule());
