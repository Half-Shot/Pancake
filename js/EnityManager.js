function SceneManager()
{
	this.scenes = new Array();
	this.stages = new Array();
	this.stage = "pregame";
}

this.prototype.getActiveScenes = function()
{
	var scns = new Array();
	for (var i=0;i<this.scenes.length;i++)
	{
		var scene = scenes[i];
		if(scene.tags.indexOf(stage) != -1)
			scns.push(scene);
	}
}

this.prototype.load = function()
{
	var scns = getActiveScenes();
	for (var i=0;i<scns.length;i++)
		scns[i].load();
}

this.prototype.update = function()
{
	var scns = getActiveScenes();
	for (var i=0;i<scns.length;i++)
		scns[i].update();
}

this.prototype.draw = function()
{
	var scns = getActiveScenes();
	for (var i=0;i<scns.length;i++)
		scns[i].draw();
}

this.prototype.unload = function()
{
	var scns = getActiveScenes();
	for (var i=0;i<scns.length;i++)
		scns[i].unload();
}

//Please use this instead of direct changes.
//Allows the stages to load and unload if they so desire.
this.prototype.changeScene = function(newStage)
{
	this.unload();
	this.stage = newStage;
	this.load();	
}
