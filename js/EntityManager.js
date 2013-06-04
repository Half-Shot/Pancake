//TODO: Add more functionality, like logging.
function EntityManager()
{
	this.entitys = new Array();
}

EntityManager.prototype.load = function()
{
	for (var i=0;i<this.entitys.length;i++)
		this.entitys[i].load();
}

EntityManager.prototype.update = function()
{
	for (var i=0;i<this.entitys.length;i++)
		this.entitys[i].update();
}

EntityManager.prototype.draw = function()
{
	for (var i=0;i<this.entitys.length;i++)
		this.entitys[i].draw();
}

EntityManager.prototype.unload = function()
{
	for (var i=0;i<this.entitys.length;i++)
		this.entitys[i].unload();
}
