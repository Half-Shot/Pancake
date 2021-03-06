//TODO: Copy paste this scene and add your own to the game. 
function SandboxScene(smgr)
{
	this.tags = new Array("test-bed");
	this.parent = smgr;
	this.shouldUpdate = true;
	this.shouldDraw = true;
	this.shouldLoad = true;
	this.shouldUnload = true;
}

SandboxScene.prototype.load = function()
{
	//Load needed Textures
	this.background = new Texture(dta_textures["SB_Background"]);
	this.T_tileset1 = new Texture(dta_textures["SB_Tileset1"],"content/textures/anim/tiles.info");
	this.T_tileset1.LoadFile();
	this.T_tank = new Texture(dta_textures["SB_Tank"]);
	this.T_gun = new Texture(dta_textures["SB_Gun"]);
	
	this.tiles = new Array();
	this.tiles[0] = new Sprite(this.T_tileset1);
	this.tiles[0].Advance(1);

	//Load needed Rectangles
	this.rectangles = new Array();
	this.rectangles["BG"] = new Rectangle(0,0,game.overlay.width,game.overlay.height);
	this.rectangles["Tank"] = new Rectangle(0,game.overlay.height - 72,48,24);
	this.rectangles["TankGun"] = new Rectangle(18,game.overlay.height - 72 + 5,24,7);
	//Bind Tank Controls
	game.binder.AddKeyBinding(function(){game.sceneManager.active[0].playerV.x = game.sceneManager.active[0].playerV.x - 0.3; playerS = -1;},"LeftArrow","KeyDown");
	game.binder.AddKeyBinding(function(){game.sceneManager.active[0].playerV.x = game.sceneManager.active[0].playerV.x + 0.3; playerS = 1;},"RightArrow","KeyDown");
	this.shellv = new Vector2(0,0);
	this.playerV = new Vector2(0,0);
}
var playerS = 1;
SandboxScene.prototype.update = function()
{
	this.rectangles["Tank"].x = this.rectangles["Tank"].x + this.playerV.x;
	this.rectangles["TankGun"].x = this.rectangles["Tank"].x + 18;
	this.t_text_pos = new Vector2(this.rectangles["Tank"].x, this.rectangles["Tank"].y - 20);
	
	if(this.playerV.x < 0)
		this.playerV.x = this.playerV.x + 0.1;
	
	if(this.playerV.x > 0)
		this.playerV.x = this.playerV.x - 0.1;

	if(this.playerV.x < 0.1 && this.playerV.x > -0.1)
		this.playerV.x = 0;
	
	if(this.playerV.x > 10)
		this.playerV.x = 10;

	if(this.playerV.x < -10)
		this.playerV.x = -10;

	if(game.binder.Mouse.LeftButton)
		alert("You clicked my Tank!");
}

SandboxScene.prototype.draw = function()
{
	game.overlay.drawTexture(this.rectangles["BG"],this.background); 
	for (var i=0;i<game.overlay.width;i = i + 48)
	{
		//Code
		game.overlay.drawSprite(new Rectangle(i,game.overlay.height - 48,48,48),this.tiles[0]);
	}
	game.overlay.drawTexture(this.rectangles["Tank"],this.T_tank,0,playerS,1);
	game.overlay.drawText(this.t_text_pos,"bold 12px sans-serif","X:" + this.playerV.x + " Y:" + this.playerV.y);
	game.overlay.drawTexture(this.rectangles["TankGun"],this.T_gun,0,playerS,1,2,2);
}

SandboxScene.prototype.unload = function()
{

}

sceneManager.scenes.push(new SandboxScene());
