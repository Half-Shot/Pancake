function Rectangle(x,y,width,height)
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

function Color(r,g,b)
{
	this.setcolor = function(r,g,b) {
		this.red = r;
		this.green = g;
		this.blue = b;
		this.RGBValue = "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
	}
	this.setcolor(r,g,b);
}

function Overlay()
{
	this.width = $(document).width();
	this.height = $(document).height();
	this.dom = $('#overlay').get(0); //Get the element of the canvas

	//Set Canvas
	$("#overlay").attr("width",  this.width + "px");
    $("#overlay").attr("height", this.height + "px");
	program.logger.toConsole("Graphics","Overlay Set Bounds " + $('#overlay').width() + "x" + 	$('#overlay').height());
	this.context = $('#overlay').get(0).getContext("2d"); //Get the context
}

//Clear the whole screen on the 2D Overlay.
Overlay.prototype.clear = function()
{
	this.context.clearRect(0,0,this.dom.width,this.dom.height);
}

//Draw a unfilled rectangele. The linewidth should be at least 1
Overlay.prototype.drawRectangle = function(rect,color,style,linewidth)
{
	this.context.strokeStyle = color.RGBValue + " " + style;
	this.context.strokeRect(rect.x,rect.y,rect.width,rect.height);
	this.context.lineWidth =linewidth;
}

//Draw a filled rectangele. The options are x, y, width and height. The style is optional.
Overlay.prototype.fillRectangle = function(rect,color,style)
{
	this.context.fillStyle = color.RGBValue + " " + style;;
	this.context.fillRect(rect.x,rect.y,rect.width,rect.height);
}

Overlay.prototype.drawImage = function(rect,image)
{
	this.context.drawImage(image,rect.x,rect.y,rect.width,rect.height);	
}

Overlay.prototype.drawTexture = function(rect,texture)
{
	this.drawImageSliced(texture.GetSourceRect(),rect,texture.image);
}

Overlay.prototype.drawImageSliced = function(sRect,dRect,image)
{
	  this.context.drawImage(image,sRect.x,sRect.y,sRect.width,sRect.height,dRect.x,dRect.y,dRect.width,dRect.height);
}
