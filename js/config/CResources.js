//Set up Sm2

// initialize the sound manager 
soundManager.url = '/'; 
soundManager.flashVersion = 9; 
soundManager.useHighPerformance = true; // reduces delays 
 
// reduce the default 1 sec delay to 500 ms 
soundManager.flashLoadTimeout = 500; 
 
// mp3 is required by default, but we don't want any requirements 
soundManager.audioFormats.mp3.required = false; 

//URLs to data
var loader = new PxLoader();

//Data Arrays
var dta_snds = Array(); 
var dta_textures = Array(); var names_textures = new Array();
var dta_models = Array();

function GrabTexture(name)
{
	var number = names_texture.indexOf(name);
	if(number != -1)
		return dta_textures[number];
	else
		program.logger.toConsole("Error","Texture " + name + " not found!");
}

//Texture Example
//loader.add(new PxLoaderImage(basedir_content + 'textures' + 'file.png', 'name')); 
//Sound Example
//loader.add(new PxLoaderImage(basedir_content + 'textures' + 'file.png', 'name')); 
//dta_textures.push();
loader.add( new PxLoaderImage(basedir_content + 'textures/' + 'pancake.jpg', 'pancake'));
loader.add( new PxLoaderImage(basedir_content + 'textures/' + 'pancake.jpg', 'pancake'));
loader.add( new PxLoaderImage(basedir_content + 'textures/' + 'pancake.jpg', 'pancake'));
loader.add( new PxLoaderImage(basedir_content + 'textures/' + 'intro-screen.jpg', 'introscreen'));
//dta_snds.push(loader.add( new PxLoaderSound(basedir_content + 'sounds/' + 'smb_test.ogg', 'smbtest'))); 
