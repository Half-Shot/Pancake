function Program()
{
	//TODO: Bug that isn't letting me execute code inside here.
}

//When the program class loads, do this. At the moment its replacing Program()
Program.prototype.init = function()
{
	this.logger = new Logger();
	this.logger.toConsole("Init","Pancake Framework Version " + CVER);
	this.logger.toConsole("Init","Written by Will Hunt for Sharpened Studios");
	//TODO: Emplant modernizr so we can detect if all the nessacery support is here.
}

//When the game updates. This will eventually be placed into its own thread to run independently of the ui.
Program.prototype.update = function()
{
	for (var i=0;i<modules.length;i++)
	{
		if(modules[i].update !== undefined)
			modules[i].update;
	}
	//TODO: Add this into a thread of its own.
	//TODO:	Add in any other core modules requiring updates.
}

//Method that defines all the classes needed to load resources for the game.
Program.prototype.loadresources = function()
{
	//TODO:	PxLoader stuff in here. Also we need a array holding a list of resources.
	for (var i=0;i<modules.length;i++)
	{
		if(modules[i].onload !== undefined)
			modules[i].onload;
	}
}

Program.prototype.draw = function()
{
	//TODO:	Add in draw code.
	for (var i=0;i<modules.length;i++)
	{
		if(modules[i].draw !== undefined)
			modules[i].draw;
	}
}

Program.prototype.unload = function()
{
	//TODO:	When the program unloads run this code.
	for (var i=0;i<modules.length;i++)
	{
		if(modules[i].unload !== undefined)
			modules[i].unload;
	}
}