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
		var scene = scenes[i];
		if(scene.tags.indexOf(stage) != -1)
			this.active.push(scene);
	}
}

SceneManager.prototype.load = function()
{
	this.getActiveScenes();
	for (var i=0;i<this.active.length;i++)
		scns[i].load();
}

SceneManager.prototype.update = function()
{
	this.getActiveScenes();
	for (var i=0;i<this.active.length;i++)
		scns[i].update();
}

SceneManager.prototype.draw = function()
{
	this.getActiveScenes();
	for (var i=0;i<this.active.length;i++)
		scns[i].draw();
}

SceneManager.prototype.unload = function()
{
	this.getActiveScenes();
	for (var i=0;i<this.active.length;i++)
		scns[i].unload();
}

//Please use this instead of direct changes.
//Allows the stages to load and unload if they so desire.
SceneManager.prototype.changeScene = function(newStage)
{
	this.unload();
	this.stage = newStage;
	this.load();	
}
