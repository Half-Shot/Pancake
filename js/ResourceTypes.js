function Texture(image,infofile)
{
	this.activeFrame = 0;
	this.frames;
	this.frameSize;
	this.updateEvery = 10;
	this.image = image;
	this.infofile = infofile;
	this.totalframes = 0;
	this.elapsed;
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
	this.frameSize = new Rectangle(0,0,json.width,json.height);
	this.updateEvery = Math.ceil( 1000 / json.fps );
	this.framewaiting = false;
}

Texture.prototype.GetSourceRect = function ()
{
	var rect = new Rectangle(this.activeFrame * this.frameSize.width,0,this.frameSize.width,this.frameSize.height);
	
	return rect;
}

Texture.prototype.Animate = function()
{
	if(!this.framewaiting){ 
		setTimeout(Texture.prototype.Advance,this.updateEvery);
		this.framewaiting = true;
	}
}

Texture.prototype.Advance = function(by)
{
	this.totalframes++;
	if(by == undefined)
	{
		this.activeFrame++;
	}
	else
	{
		this.activeFrame = this.activeFrame + by;
	}
	
	if(this.activeFrame == this.frames - 1)
	{
		this.activeFrame = 0;
	}
	this.framewaiting = false;
}
