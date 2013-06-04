function Entity(parent)
{
	this.name = "";
	this.entityManager = parent;
	this.shouldUpdate = true;  //Should the Game use the update method. If this is a managed module (eg a Entity in EntityManager) then it should be false
	this.shouldDraw = true; //Ditto.
	this.shouldLoad = true; //Ditto. SceneManager
	this.shouldUnload = true; //Ditto.
}
//TODO: Do a bit more on entity work. But most of it should be left to developers.
Entity.prototype.load = function()
{

}

Entity.prototype.update = function()
{

}

Entity.prototype.draw = function()
{

}

Entity.prototype.unload = function()
{

}
