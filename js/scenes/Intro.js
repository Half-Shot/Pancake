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
	this.sprlist = new Array();
	this.sprlist.push(new Sprite(this.explosion));  this.sprlist[0].texture.updateEvery = 10;
	this.sprlist.push(new Sprite(this.explosion));  this.sprlist[1].texture.updateEvery = 20;
	this.sprlist.push(new Sprite(this.explosion));  this.sprlist[2].texture.updateEvery = 30;
	this.sprlist.push(new Sprite(this.explosion));  this.sprlist[3].texture.updateEvery = 40;
	this.sprlist.push(new Sprite(this.explosion));  this.sprlist[4].texture.updateEvery = 50;
	
	game.binder.AddKeyBinding(function(){plrrect.x--;},"LeftArrow","KeyPress");
	game.binder.AddKeyBinding(function(){plrrect.x++;},"RightArrow","KeyPress");
	game.binder.AddKeyBinding(function(){plrrect.y--;},"UpArrow","KeyPress");
	game.binder.AddKeyBinding(function(){plrrect.y++;},"DownArrow","KeyPress");
}

IntroductionScene.prototype.update = function()
{
	this.entityManager.update();
	if(!game.soundManager.channels[this.introsound].ended){}
		//game.soundManager.PlaySound(this.introsound,true);
	
	if(game.elapsed / 100 < 100)
		this.imageslicer = Math.floor(game.elapsed / 100);
	
	this.sprlist[0].Animate(); //Will advance to the specified framerate.
	this.sprlist[1].Animate();
	this.sprlist[2].Animate();
	this.sprlist[3].Animate();
	this.sprlist[4].Animate();
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

	game.overlay.drawSprite(plrrect,this.sprlist[0]);
}

IntroductionScene.prototype.unload = function()
{
	this.entityManager.unload();
}

sceneManager.scenes.push(new IntroductionScene());
