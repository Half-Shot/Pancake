function ModuleLoader(){
	this.onFinished = document.createEvent("CustomEvent");
	this.onFinished.initCustomEvent("mod_finish",true,true,null);
	this.done = 0;
	this.total = 0;
	this.queue = new Array();
}
var failedLoading = false;
ModuleLoader.prototype.LoadModule = function(file)
{
	modloader.done++;
	console.log("ModuleLoader.js> Loaded " + file + "(" + modloader.done + " of " + (modloader.total + 1) + ")");
	document.getElementById('console').innerHTML += "ModuleLoader.js> Loaded " + file + "(" + modloader.done + " of " + (modloader.total + 1) + ")<br>";
	if(modloader.done === (modloader.total + 1)){
	    if(!failedLoading){
		console.log("Finished Loading.");
		document.getElementById('console').innerHTML += "Finished Loading Code Files. Going to start the main program now.";
		document.body.dispatchEvent(modloader.onFinished);
		}
		else
		{
		    console.log("Failed loading. Not continuing.");
		    alert("Some files failed to load. This could be a disconnection or some files could not be found.");
		}
	}
}

ModuleLoader.prototype.load = function()
{
	console.log("ModuleLoader.js> Beginning loading of javascript files.")
	this.total = req_core.length + req_libs.length + req_modules.length;
	this.done = 0;
        this.queue = this.queue.concat(req_libs,req_core,req_modules,req_scenes);
    
	for (var i=0;i<this.queue.length;i++)
	{ 
	    var file = basedir_js + this.queue[i];
	    $LAB.script(file);
	    this.LoadModule(file)
	}
	$LAB.script(basedir_js + "Program.js");
	this.LoadModule(basedir_js + "Program.js");
}
