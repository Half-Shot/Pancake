function Mouse()
{

}

function binding(action, string, type)
{
	this.Action = action;	
	this.KeyStr = string;
	this.Type = type;
}

function Bindings()
{
	this.KeyBind = new Array();
	this.MouseBind = new Array();
	this.Mouse = new Mouse();
	this.init = function()
	{
		$(window).keyup(this.KeyUp);
		$(window).keydown(this.KeyDown);
		$(window).keypress(this.KeyPress);
	}
}

Bindings.prototype.AddKeyBinding = function(Action,Key,Type)
{
	this.KeyBind.push(new binding(Action,Key,Type));
}

Bindings.prototype.KeyPress = function(args)
{
	var key = args.keyCode || args.which;
	var Key = game.binder.KeyToString(key);		
	for (var i=0;i<game.binder.KeyBind.length;i++)
	{
		if(game.binder.KeyBind[i].KeyStr == Key && game.binder.KeyBind[i].Type == "KeyPress")
		{
			game.binder.KeyBind[i].Action();
		}

	
	}
}

Bindings.prototype.KeyUp = function(args)
{
	var key = args.keyCode || args.which;
	var Key = game.binder.KeyToString(key);		
	for (var i=0;i<game.binder.KeyBind.length;i++)
	{
		if(game.binder.KeyBind[i].KeyStr == Key && game.binder.KeyBind[i].Type == "KeyUp")
		{
			game.binder.KeyBind[i].Action();
		}

	
	}
}

Bindings.prototype.KeyDown = function(args)
{
	var key = args.keyCode || args.which;
	var Key = game.binder.KeyToString(key);		
	for (var i=0;i<game.binder.KeyBind.length;i++)
	{
		if(game.binder.KeyBind[i].KeyStr == Key && game.binder.KeyBind[i].Type == "KeyDown")
		{
			game.binder.KeyBind[i].Action();
		}

	
	}
}


Bindings.prototype.KeyToString = function(key)
{
	if(key >= 112 && key <= 123)
	{	
		var keyname = "F" + (key - 111);
		return keyname;
	}
	
	switch(key)
	{
		case 32:
			return "Space";		
		case 13:
			return "Enter";	
		case 9:
			return "Tab";	
		case 27:
			return "Esc";	
		case 8:
			return "Backspace";	
		case 16:
			return "Shift";	
		case 17:
			return "Control";	
		case 18:
			return "Alt";	
		case 20:
			return "CapsLock";		
		case 144:
			return "Numlock";
	
		case 37:
			return "LeftArrow";
		case 38:
			return "UpArrow";
		case 39:
			return "RightArrow";
		case 40:
			return "DownArrow";

		case 45:
			return "Insert";
		case 46:
			return "Delete";
		case 36:
			return "Home";
		case 35:
			return "End";
		case 33:
			return "PageUp";
		case 34:
			return "PageDown";
	}
	
	//Must be ascii, surely
 	return String.fromCharCode(key);
}
