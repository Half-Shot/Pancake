function SceneManager()
{
	this.stages = new Array();
	this.scenes = new Array();
	this.stage = "pregame";
}

SceneManager.prototype.getActiveScenes = function()
{
	this.active = new Array();
	for (var i=0;i<this.scenes.length;i++)
	{
		var scene = this.scenes[i];
		if(scene.tags.indexOf(this.stage) != -1)
			this.active.push(scene);
	}
	return this.active;
}

SceneManager.prototype.load = function()
{
	var scns = this.getActiveScenes();
	for (var i=0;i<scns.length;i++){
		scns[i].load();
	}
}

SceneManager.prototype.update = function()
{
	var scns = this.getActiveScenes();
	for (var i=0;i<scns.length;i++){
		scns[i].update();
	}
}

SceneManager.prototype.draw = function()
{
	var scns = this.getActiveScenes();
	for (var i=0;i<scns.length;i++){
		scns[i].draw();
	}
}

SceneManager.prototype.unload = function()
{
	var scns = this.getActiveScenes();
	for (var i=0;i<scns.length;i++){
		scns[i].unload();
	}
}

//Please use this instead of direct changes.
//Allows the stages to load and unload if they so desire.
SceneManager.prototype.changeScene = function(newStage,timer)
{
	if(timer != undefined)
	{
		setTimeout(function(){ game.sceneManager.changeScene(newStage) },timer);
	}
	else
	{
		this.unload();
		this.stage = newStage;
		this.load();
	}
		
}
