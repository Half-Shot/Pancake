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
var dta_textures = Array();
var dta_models = Array();

//Texture Example
//loader.add(new PxLoaderImage(basedir_content + 'textures' + 'file.png', 'name')); 
//Sound Example
//loader.add(new PxLoaderImage(basedir_content + 'textures' + 'file.png', 'name')); 
//dta_textures.push();
loader.add( new PxLoaderImage(basedir_content + 'textures/' + 'pancake.jpg', 'pancake'));
loader.add( new PxLoaderImage(basedir_content + 'textures/' + 'pancake.jpg', 'pancake'));
loader.add( new PxLoaderImage(basedir_content + 'textures/' + 'pancake.jpg', 'pancake'));
//dta_snds.push(loader.add( new PxLoaderSound(basedir_content + 'sounds/' + 'smb_test.ogg', 'smbtest'))); 