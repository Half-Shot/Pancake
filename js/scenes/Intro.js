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
	this.introsound = 0; //Channel number for the intro sound.
	this.imageslicer = 0;
	this.pixelsmash = new Array();
}
	var plrrect = new Rectangle(0,0,64,64);
IntroductionScene.prototype.load = function()
{
	this.entityManager.load();
	this.introsound = game.soundManager.QueueSound("content/sounds/smb_test.ogg");
	this.explosion = new Texture(dta_textures["Explosion"],"content/textures/anim/explosion.info");
	this.explosion.LoadFile();
	this.spr = new Sprite(this.explosion);
	this.rectspr = new Rectangle(32,32,64,64);
	this.holelist = new Array();
}

IntroductionScene.prototype.update = function()
{
	this.entityManager.update();
	game.soundManager.PlaySound(this.introsound,true);
	
	if(game.elapsed / 100 < 100)
		this.imageslicer = Math.floor(game.elapsed / 100);
	this.spr.Animate();
	if(this.spr.activeFrame > 2)
	{
		this.holelist.push( new Rectangle(this.rectspr.x,this.rectspr.y,this.rectspr.width,this.rectspr.height));
		this.spr.activeFrame = 0;
		this.rectspr.x = RandomNumberGenerator(0,game.overlay.width) - (this.rectspr.x / 10);
		this.rectspr.y = RandomNumberGenerator(0,game.overlay.height) + (this.rectspr.y / 10);
	}
}

IntroductionScene.prototype.draw = function()
{
	this.entityManager.draw();
	
	var overlayunit_w = overlay.width / 20;
	var overlayunit_h = overlay.height / 20;
	
	//Spoof Commodore screen.
	game.overlay.fillRectangle(new Rectangle(0,0,overlay.width,overlay.height),new Color(106,90,205),"");
	game.overlay.fillRectangle(new Rectangle(overlayunit_w * 2,overlayunit_h * 2,overlayunit_w * 16,overlayunit_h * 16),new Color(120,120,205),"");
	game.overlay.drawImageSliced(new Rectangle(0,0,dta_textures["CommodoreHome"].width,(dta_textures["CommodoreHome"].height / 100) * this.imageslicer),new Rectangle(overlayunit_w * 2,overlayunit_h * 2,overlayunit_w * 16,(dta_textures["CommodoreHome"].height / 100) * this.imageslicer),dta_textures["CommodoreHome"]);

	game.overlay.drawSprite(this.rectspr,this.spr);
	for (var i=0;i<this.holelist.length;i++)
	{
		game.overlay.fillRectangle(this.holelist[i],new Color(0,0,0),"");
	}
}

IntroductionScene.prototype.unload = function()
{
	game.soundManager.RemoveSound(this.introsound);
	this.entityManager.unload();
}

sceneManager.scenes.push(new IntroductionScene());
