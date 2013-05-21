//Define a structure here

function ExampleModule()
{
	this.name = "ExampleModule";
	this.version = 0.01;
}

//Called when the program is loading resources.
ExampleModule.prototype.onload = function()
{
	alert("Test module in update loop!");
};

//Called when the program is in the update loop.
ExampleModule.prototype.update = function()
{
	alert("Test module in update loop!");
};

//Called when the program is in the draw loop.
ExampleModule.prototype.draw = function()
{
	alert("Test module in draw loop!");
};

//Called when the program is being unloaded
ExampleModule.prototype.unload = function()
{
	alert("Test Module unloaded!")
}

//Make sure to add this in if you want to be able to use your module.
modules.push(new ExampleModule());
