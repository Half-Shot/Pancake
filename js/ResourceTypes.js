//Texture class - Holds image data.
function Texture(image,infofile)
{
	this.sets;
	this.frameSize;
	this.updateEvery = 10;
	this.image = image;
	this.infofile = infofile;
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
	this.sets = json.sets;
	this.totalanimations = json.sets.length;
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
	this.setnumber = 0;
	this.animationset = this.texture.sets[0];
}


Sprite.prototype.GetSourceRect = function ()
{
	var rect = new Rectangle(this.activeFrame * this.texture.frameSize.width,this.setnumber * this.texture.frameSize.height,this.texture.frameSize.width,this.texture.frameSize.height);
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
	if(by == undefined)
	{
		this.activeFrame++;
	}
	else
	{
		this.activeFrame = this.activeFrame + by;
	}
	
	if(this.activeFrame == this.animationset.frames - 1)
	{
		this.activeFrame = 0;
	}
	this.framewaiting = false;
}

Sprite.prototype.SwitchSet = function(name)
{
	for (var i=0;i<this.totalanimations;i++)
	{
		 if(this.texture.sets[i].name == name){
			this.animationset = this.texture.sets[i];
			this.activeFrame = 0;
			this.setnumber = i;
		 }
	}	
}
