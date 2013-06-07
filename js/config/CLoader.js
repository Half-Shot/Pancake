//--LEAVE THESE ALONE. THEY ARE REQUIRED
//Libs
var req_libs = new Array();
req_libs.push("libs/jquery.js");
req_libs.push("libs/pxloader.externs.js");
req_libs.push("libs/PxLoaderImage.js");
req_libs.push("libs/PxLoaderSound.js");
req_libs.push("libs/sm2.js");
req_libs.push("libs/PxLoaderVideo.js");
req_libs.push("libs/PxLoader.js");
req_libs.push("libs/three.js");

//Core 
var req_core = new Array();
req_core.push("config/CGraphics.js");
req_core.push("config/Config.js");
req_core.push("config/CResources.js");
req_core.push("ControlSystem.js")
req_core.push("Graphics.js");
req_core.push("Logger.js");
req_core.push("PacketHandler.js");
req_core.push("SoundSystem.js");
req_core.push("SceneManager.js");
req_core.push("EntityManager.js");
req_core.push("ResourceTypes.js");
req_core.push("Game.js");
//req_core.push("Program.js"); //Not needed, it loads last as it is dependant on EVERYTHING. See ModuleLoader.js
req_core.push("Client.js");
//--END OF REQUIRED

//Modules -- Enter module plugins here. Make sure to order them right or some modules will not load due to missing dependencies.
var req_modules = new Array();
//req_modules.push("modules/ExampleModule.js");

var modules = new Array();//Holds all the custom modules. 

//Scenes
var req_scenes = new Array();
req_scenes.push("scenes/Intro.js");

var scenes = new Array();
