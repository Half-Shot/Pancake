function Rectangle(x,y,width,height)
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.intersects = function(ins,detail)
	{
		var A = ins.x >= this.x + this.width; //Is intersector too far right.
		var B = ins.x + ins.width <= this.x; //Is intersector too far left.	

		var C = ins.y >= this.y + this.height; //Is intersector too far down.
		var D = ins.y + ins.height <= this.y; //Is intersector too far up.

		var intersects = !(A || B || C || D);
		
		if(detail && intersects){
			var rect = new Rectangle(0,0,0,0);
			//Work out X
			if(ins.x > this.x){
				rect.x = ins.x - this.x;
				//Width
				if(ins.x + ins.width <= this.x + this.width)
					rect.width = ins.width;
				else
					rect.width = this.width - rect.x; 
			}
			else{
				rect.x = 0;
				//Width
				if(ins.x + ins.width <= this.x + this.width)
					rect.width = (ins.x + ins.width) - this.x;
				else
					rect.width = this.width;
			}
			//Same with Y
			if(ins.y > this.y){
				rect.y = ins.y - this.y;
				//Height
				if(ins.y + ins.height <= this.y + this.height)
					rect.height = ins.height;
				else
					rect.height = this.height - rect.y;
			}
			else{
				rect.y = this.y - ins.y;
				//Height
				if(ins.y + ins.height <= this.y + this.height)
					rect.height = (ins.y + ins.height) - this.y;
				else
					rect.height = this.height;			
			}			
		return rect;
		}
		else{
		return intersects;s		
		}

			
	}
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

Overlay.prototype.drawImage = function(rect,image,rotation,sx,sy,originx,originy)
{
	sx = typeof sx !== 'undefined' ? sx : 1;
	sy = typeof sy !== 'undefined' ? sy : 1;
	originx = typeof originx !== 'undefined' ? originx : (rect.width / 2);
	originy = typeof originy !== 'undefined' ? originy : (rect.height / 2);

	this.context.save();
	this.context.translate(rect.x + originx, rect.y + originy);
	if(rotation != undefined)
		this.context.rotate(rotation); 

	this.context.scale(sx,sy);
	this.context.drawImage(image,-originx,-originy,rect.width,rect.height);	
	this.context.restore();
}
Overlay.prototype.drawTexture = function(rect,texture,rotation,sx,sy,originx,originy)
{
	this.drawImage(rect,texture.image,rotation,sx,sy,originx,originy);
}
Overlay.prototype.drawSprite = function(rect,spr,rotation,sx,sy,originx,originy)
{
	this.drawImageSliced(spr.GetSourceRect(),rect,spr.texture.image,rotation,sx,sy,originx,originy);
}
Overlay.prototype.drawImageSliced = function(sRect,dRect,image,rotation,originx,originy)
{
	sx = typeof sx !== 'undefined' ? sx : 1;
	sy = typeof sy !== 'undefined' ? sy : 1;
	originx = typeof originx !== 'undefined' ? originx : (dRect.width / 2);
	originy = typeof originy !== 'undefined' ? originy : (dRect.height / 2);

	this.context.save();	
	this.context.translate(dRect.x + originx, dRect.y + originy);
	if(rotation != undefined)
		this.context.rotate(rotation); 
	
	this.context.scale(sx,sy);
	this.context.drawImage(image,sRect.x,sRect.y,sRect.width,sRect.height,-originx,-originy,dRect.width,dRect.height);
	this.context.restore();
}

Overlay.prototype.drawText = function(vector,font,Text)
{
	this.context.font = font;
	this.context.fillText(Text,vector.x,vector.y);
}

function DegToRad(value)
{
	return value * (Math.PI / 180);
}

function Vector2(x,y)
{
	this.x = x;
	this.y = y;
}
