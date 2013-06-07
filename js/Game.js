var sceneManager = new SceneManager();
function Game()
{
	this.overlay = new Overlay(); //Create a new 2D 'overlay'. If this is a 2D only game, this is your main view.
	this.soundManager = new SoundManager();
	this.frames = 0;
    this.elapsed;
	this.starttime = new Date().getTime();
	this.fps
	this.lastfps = 0;
	this.averagefps
	this.sceneManager = sceneManager;
	sceneManager = undefined;
}

//When the game updates. This will eventually be placed into its own thread to run independently of the ui.
Game.prototype.update = function() {
    //FPS
    game.frames++;
    game.elapsed = (new Date().getTime() - game.starttime) + 1000;
	game.lastfps = fps;
    game.fps = Math.floor(game.frames / Math.floor(game.elapsed / 1000));
    $('#fps').get(0).innerHTML = game.fps + "fps"
    for (var i=0;i<modules.length;i++)
    {
        if(modules[i].update !== undefined && modules[i].shouldUpdate)
            modules[i].update();
    }
    game.sceneManager.update();
    //TODO: Add in any other core modules requiring updates.

    //Finished updating, going to draw.
    game.draw();
};

//Method that defines all the classes needed to load resources for the game.
Game.prototype.loadresources = function() {
	var loadscreen = $('#loading');
	var load_audio = $('#aload').get(0);
	loadscreen.show();
	load_audio.play();
	//All the resource decleration stuff is in CResources.js
	program.logger.toConsole("Init",loader.log(true));

	loader.addProgressListener(function(e) { 
		if(e.resource.img !== undefined){ //Its a image
			program.logger.toConsole("Resource","Loaded image " + e.resource.tags.first);
			dta_textures[e.resource.tags.first] = e.resource.img;
		}
	});
	
	loader.addCompletionListener(function(args) { 
			program.logger.toConsole("Init",loader.log(true));
			loadscreen.hide();
			load_audio.pause();
			program.logger.toConsole("Res","Loaded all resources. Good to go");
				//Module loading
				for (var i=0;i<modules.length;i++)
			    	{
					if(modules[i].load !== undefined && modules[i].shouldLoad)
					    modules[i].load();
			    	}
				game.sceneManager.load();
				//Put this just after loading resources so that modules won't get any problems when preloading them.
				game.sceneManager.changeScene("introduction-screen"); //Start the intro.
			requestAnimationFrame(game.update); //Yes, its a hack but its my best idea without plowing into layers of threading.
	});
	loader.start(); 
	

	
};

Game.prototype.draw = function() {
	//TODO:	Add in draw code.
	for (var i=0;i<modules.length;i++)
	{
		if(modules[i].draw !== undefined && modules[i].shouldDraw)
			modules[i].draw();
	}
	game.sceneManager.draw();	
	//Finished drawing so start back at update.
	requestAnimationFrame(this.update);
};

Game.prototype.unload = function() {
	//TODO:	When the Game unloads run this code.
	for (var i=0;i<modules.length;i++)
	{
		if(modules[i].unload !== undefined && modules[i].shouldUnload)
			modules[i].unload();
	}
	game.sceneManager.unload();
};
