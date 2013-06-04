//Define a structure here
//Name: Example Module
//By:	Will Hunt
//E-mail: half-shot@molrams.com
//Description:	A example module showing how to structure a module. Copy paste this plugin and paste your plugin file name into CLoader.js under modules to load it in Pancake when the framework loads.

//Feel free to remove any functions you don't use. Pancake ommits any missing functions.
//Methods: load(), update(), draw(), unload()
function ExampleModule()
{
	this.name = "ExampleModule"; //Name of your module.
	this.version = 0.01; //Version infomation
	this.shouldUpdate = true;  //Should the Game use the update method. If this is a managed module (eg a Entity in EntityManager) then it should be false
	this.shouldDraw = true; //Ditto.
	this.shouldLoad = true; //Ditto. SceneManager
	this.shouldUnload = true; //Ditto.
}

//Called when the program is loading resources.
ExampleModule.prototype.load = function()
{
	program.logger.toConsole("Module", this.name + "> Loaded"); //Its good manners to tell the console what your doing ;)
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
	this.red = Math.ceil(Math.random() * 255);
	this.green = Math.ceil(Math.random() * 255);
	this.blue = Math.ceil(Math.random() * 255);
	this.color = "rgb(" + this.red + "," + this.blue + "," + this.green + ")";

	//Draw a red rectangle as a test.
	//game.overlay.fillRectangle(new Rectangle(20,20,20,20),"#6600FF");
	//Y
	var rect = null;
	rect = new Rectangle(00,00,20,40); game.overlay.fillRectangle(rect,this.color,1);  //game.overlay.drawImageSliced(rect,rect,dta_textures[0]);
	rect = new Rectangle(20,20,20,60); game.overlay.fillRectangle(rect,this.color,1);  //game.overlay.drawImageSliced(rect,rect,dta_textures[0]);
	rect = new Rectangle(40,00,20,40); game.overlay.fillRectangle(rect,this.color,1);  //game.overlay.drawImageSliced(rect,rect,dta_textures[0]);
	//O
	rect = new Rectangle(80,00,60,80); game.overlay.fillRectangle(rect,this.color,1);  //game.overlay.drawImageSliced(rect,rect,dta_textures[0]);
	rect = new Rectangle(90,10,40,60); game.overlay.fillRectangle(rect,this.color,1);  //game.overlay.drawImageSliced(rect,rect,dta_textures[0]);
	//L
	rect = new Rectangle(160,00,20,80); game.overlay.fillRectangle(rect,this.color,1); //game.overlay.drawImageSliced(rect,rect,dta_textures[0]);
	rect = new Rectangle(180,60,40,20); game.overlay.fillRectangle(rect,this.color,1); //game.overlay.drawImageSliced(rect,rect,dta_textures[0]);
	//O
	rect = new Rectangle(240,00,60,80); game.overlay.fillRectangle(rect,this.color,1); //game.overlay.drawImageSliced(rect,rect,dta_textures[0]);
	rect = new Rectangle(260,10,40,60); game.overlay.fillRectangle(rect,this.color,1); //game.overlay.drawImageSliced(rect,rect,dta_textures[0]);
	
};



//Called when the program is being unloaded
ExampleModule.prototype.unload = function()
{
	alert("Test Module unloaded!")
}

//Make sure to add this in if you want to be able to use your module.
modules.push(new ExampleModule());
