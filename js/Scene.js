//TODO: Copy paste this scene and add your own to the game. 
function Scene(smgr)
{
	this.tags = new Array("pregame","menu","game","exit");
	this.entityManager = new EntityManager();
	this.parent = smgr;
}

Scene.prototype.load = function()
{
	this.entityManager.load();
}

Scene.prototype.update = function()
{
	this.entityManager.update()
}

Scene.prototype.draw = function()
{
	this.entityManager.draw()
}

Scene.prototype.unload = function()
{
	this.entityManager.unload()
}
