# Module Media
   > This README permits to introduce each API function of the module Media.  

## 1. Initialize & clean an usage with the module Media
   * Include the headers
   > First of all, we should include the main module of the Artik SDK and its depedencies wich depend on the Artik board version.    
   > **_ex\._**:  

```javascript
	const artik = require('../lib/artik-sdk'); // Instantiate the main module object for accessing to the Artik SDK.  
	const name = artik.get_platform_name(); // Get the platform name.  

	if (name == 'Artik 5') { // Check for a board ARTIK 5.  
		const a5 = require('../src/platform/artik520'); // If 'yes', then instantiate the platform depedencies.  
	} else if (name == 'Artik 10') { // Check for a board ARTIK 10.  
		const a10 = require('../src/platform/artik1020'); // If 'yes', then instantiate the platform depedencies.  
	}
		...
```
 __NB__:  
   After this step you should always call the main module object and use its dependencies for retrieve or operate with the modules of the Artik SDK.   
   
   * Instantiate the module
   > Then from the main module we can call the module PWM constructor.
   > **_ex\._**:  

```javascript
	var media = artik.media();
		...
```

## 2. Process with the Media module
   *  Function : 'play_sound_file'
   > 'play_sound_file' permits to play a sound file and launch a callback at the end of its process.  
   > **_ex\._**:  

```javascript
	var sound_file = '/usr/share/sounds/alsa/Front_Center.wav'; // store the path of the sound file.  

	media.play_sound_file(sound_file, function(response, status) {
		console.log('Finished playing');
		process.exit(0);	
	});
		...
```

## 3. Full example

   * See [the test file](/test/media-test.js)
