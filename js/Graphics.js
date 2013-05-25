function Rectangle(x,y,width,height)
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}
function Overlay()
{
	this.dom = $('#overlay').get(0); //Get the element of the canvas
	this.context = $('#overlay').get(0).getContext("2d"); //Get the context
}

//Clear the whole screen on the 2D Overlay.
Overlay.prototype.clear = function()
{
	this.context.clearRect(0,0,this.dom.width,this.dom.height);
}

//Draw a unfilled rectangele. The options are the Rectangle object The style is optional.
Overlay.prototype.drawRectangle = function(rect,style)
{
	this.context.strokeStyle=style;
	this.context.strokeRect(rect.x,rect.y,rect.width,rect.height);
}

//Draw a filled rectangele. The options are x, y, width and height. The style is optional. The linewidth should be at least 1
Overlay.prototype.fillRectangle = function(rect,style,linewidth)
{
	this.context.fillStyle=style;
	this.context.lineWidth=linewidth;
	this.context.fillRect(rect.x,rect.y,rect.width,rect.height);
}

Overlay.prototype.drawImage = function(rect,image)
{
	this.context.drawImage(image,rect.x,rect.y,rect.width,rect.height);	
}

Overlay.prototype.drawImageSliced = function(sRect,dRect,image)
{
	  this.context.drawImage(image,sRect.x,sRect.y,sRect.width,sRect.height,dRect.x,dRect.y,dRect.width,dRect.height);
}
