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
	this.rectangle = new Rectangle(0,0,20,20);
	this.colors = new Array();
	this.xincrement = 20;
	this.yincrement = 20;
	this.red = 0;
	this.green = 0;
	this.blue = 0;
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
	switch(Math.ceil(Math.random() * 6))
	{
		case 1:
			this.red = this.red - 25;
			break;
		case 2:
			this.red = this.red + 25;
			break;
		case 3:
			this.green = this.green - 25;
			break;
		case 4:
			this.green = this.green + 25;
			break;
		case 5:
			this.blue = this.blue - 25;
			break;
		case 6:
			this.blue = this.blue + 25;
			break;
	}
	this.color = "rgb(" + this.red + "," + this.blue + "," + this.green + ")";
	this.colors[this.rectangle.x + "x" + this.rectangle.y] = "rgb(" + this.red + "," + this.blue + "," + this.green + ")";

	
	if(this.rectangle.x < game.overlay.width) { 
		this.rectangle.x = this.rectangle.x + this.xincrement; 
	}
	else {
		if(this.rectangle.y > game.overlay.height) {
		
			this.rectangle = new Rectangle(0,0,this.xincrement,this.yincrement);
		}	
		this.rectangle.x = 0;
		this.rectangle.y = this.rectangle.y + this.yincrement; 
	}
	

	
};

//Called when the program is in the draw loop.
ExampleModule.prototype.draw = function()
{
	game.overlay.clear();
	
	for (var x=0;x<game.overlay.width;x = x + this.xincrement)
	{
		for (var y=0;y<game.overlay.height;y = y + this.yincrement)
		{
			var color = this.colors[x + "x" + y];
				if(color != undefined)
				{
					game.overlay.fillRectangle(new Rectangle(x,y,this.xincrement,this.yincrement),color);
				}
		}
	}
};



//Called when the program is being unloaded
ExampleModule.prototype.unload = function()
{
	alert("Test Module unloaded!")
}

//Make sure to add this in if you want to be able to use your module.
//modules.push(new ExampleModule());
