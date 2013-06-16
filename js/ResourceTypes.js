//Texture class - Holds image data.
function Texture(image,infofile)
{
	this.frames;
	this.frameSize;
	this.updateEvery = 10;
	this.image = image;
	this.infofile = infofile;
	this.totalframes = 0;
	this.animationset = 0;
	this.totalanimations = 0;
}

Texture.prototype.LoadFile = function()
{
	//TODO: Add a preloading texture system instead of loading ondemand, which would cause some slowdowns.
	var oReq = new XMLHttpRequest();
	oReq.open("get",  this.infofile, false);
	oReq.overrideMimeType("application/json");
	oReq.send();
	var json = JSON.parse(oReq.response);
	this.frames = json.frames;
	this.totalanimations = json.animations;
	this.frameSize = new Rectangle(0,0,json.width,json.height);
	this.updateEvery = Math.ceil( 1000 / json.fps );
	this.framewaiting = false;
}

function Sprite(texture)
{
	this.texture = texture;
	this.activeFrame = 0;
	this.framewaiting = false;
	this.updateEvery = texture.updateEvery;
	this.set = 0;
}


Sprite.prototype.GetSourceRect = function ()
{
	var rect = new Rectangle(this.activeFrame * this.texture.frameSize.width,this.set * this.texture.frameSize.height,this.texture.frameSize.width,this.texture.frameSize.height);
	return rect;
}


Sprite.prototype.Animate = function()
{	
	if(!this.framewaiting){
		var _this = this;
		window.setTimeout(function(){_this.Advance()},this.updateEvery);
		this.framewaiting = true;
	}
	
}

Sprite.prototype.Advance = function(by)
{
	this.texture.totalframes++;
	if(by == undefined)
	{
		this.activeFrame++;
	}
	else
	{
		this.activeFrame = this.activeFrame + by;
	}
	
	if(this.activeFrame == this.texture.frames - 1)
	{
		this.activeFrame = 0;
	}
	this.framewaiting = false;
}
