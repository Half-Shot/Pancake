//TODO: Copy paste this scene and add your own to the game. 
function IntroductionScene(smgr)
{
	this.tags = new Array("introduction-screen");
	this.entityManager = new EntityManager();
	this.parent = smgr;
	this.shouldUpdate = true;  //Should the Game use the update method. If this is a managed module (eg a Entity in EntityManager) then it should be false
	this.shouldDraw = true; //Ditto.
	this.shouldLoad = true; //Ditto. SceneManager
	this.shouldUnload = true; //Ditto.
}

IntroductionScene.prototype.load = function()
{
	this.entityManager.load();
}

IntroductionScene.prototype.update = function()
{
	this.entityManager.update()
}

IntroductionScene.prototype.draw = function()
{
	this.entityManager.draw()
}

IntroductionScene.prototype.unload = function()
{
	this.entityManager.unload()
}

game.sceneManager.scenes(new IntroductionScene());
