function Game()
{
	this.overlay = new Overlay(); //Create a new 2D 'overlay'. If this is a 2D only game, this is your main view.
}

//When the game updates. This will eventually be placed into its own thread to run independently of the ui.
Game.prototype.update = function() {
    for (var i=0;i<modules.length;i++)
    {
        if(modules[i].update !== undefined)
            modules[i].update();
    }
    //TODO: Add this into a thread of its own.
    //TODO:	Add in any other core modules requiring updates.

    //Finished updating, going to draw.
    game.draw();
};

//Method that defines all the classes needed to load resources for the game.
Game.prototype.loadresources = function() {
	var loadscreen = $('#loading');
	var load_audio = $('#aload').get(0);
	loadscreen.show();
	load_audio.play();
	//Module loading
	for (var i=0;i<modules.length;i++)
    	{
        	if(modules[i].load !== undefined)
        	    modules[i].load();
    	}

	//All the resource decleration stuff is in CResources.js
	program.logger.toConsole("Init",loader.log(true));

	loader.addProgressListener(function(e) { 
		if(e.resource.img !== undefined){ //Its a image
			program.logger.toConsole("Resource","Loaded image " + e.resource.tags.first);
			dta_textures.push(e.resource.img);
		}
	});
	
	loader.addCompletionListener(function(args) { 
			program.logger.toConsole("Init",loader.log(true));
			loadscreen.hide();
			load_audio.pause();
			program.logger.toConsole("Res","Loaded all resources. Good to go");
			//load_audio.src = "content/sounds/smb_test.ogg";
			//load_audio.play();
			requestAnimationFrame(game.update);
	});
	loader.start(); 
	

	
};

Game.prototype.draw = function() {
	//TODO:	Add in draw code.
	for (var i=0;i<modules.length;i++)
	{
		if(modules[i].draw !== undefined)
			modules[i].draw();
	}
	//Finished drawing so start back at update.
	requestAnimationFrame(this.update);
};

Game.prototype.unload = function() {
	//TODO:	When the Game unloads run this code.
	for (var i=0;i<modules.length;i++)
	{
		if(modules[i].unload !== undefined)
			modules[i].unload();
	}
};