function ModuleLoader(){
	this.onFinished = document.createEvent("CustomEvent");
	this.onFinished.initCustomEvent("mod_finish",true,true,null);
	this.done = 0;
	this.total = 0;
}

ModuleLoader.prototype.LoadedModule = function(name)
{
	this.done++;
	console.log("ModuleLoader.js> Loaded " + name + "(" + this.done + " of " + this.total + ")");
	document.getElementById('console').innerHTML += "ModuleLoader.js> Loaded " + name + "(" + this.done + " of " + this.total + ")<br>";
	if(this.done === this.total){
		console.log("Finished Loading.");
		document.getElementById('console').innerHTML += "Finished Loading Code Files. Going to start the main program now.";
		document.body.dispatchEvent(this.onFinished);
	}
}

ModuleLoader.prototype.load = function()
{
	console.log("ModuleLoader.js> Beginning loading of javascript files.")
	this.total = req_core.length + req_libs.length + req_modules.length;
	this.done = 0;

	for (var i=0;i<req_libs.length;i++)
	{ 
		require([req_libs[i]], this.LoadedModule(req_libs[i]));
	}
	for (var i=0;i<req_core.length;i++)
	{ 
		require([req_core[i]], this.LoadedModule(req_core[i]));
	}
	for (var i=0;i<req_modules.length;i++)
	{ 
		require([req_modules[i]], this.LoadedModule(req_modules[i]));
	}
}