var gpio = require('../src/gpio');
var artik = require('../lib/artik-sdk');

const name = artik.get_platform_name();

if(name == 'Artik 520') {
	console.log('Running GPIO test on Artik 520');
	const a5 = require('../src/platform/artik520');
	var red = new gpio(a5.ARTIK_A5_GPIO_XEINT0, 'red', 'out', 'digital', 'none', 0);
	var green = new gpio(a5.ARTIK_A5_GPIO_XEINT1, 'green', 'out', 'digital', 'none', 0);
	var blue = new gpio(a5.ARTIK_A5_GPIO_XEINT2, 'blue', 'out', 'digital', 'none', 0);
	var button = new gpio(a5.ARTIK_A5_GPIO_XEINT3, 'button', 'in' , 'digital', 'both', 0);
	button.request();
} else if(name == 'Artik 1020') {
	console.log('Running GPIO test on Artik 1020');
	const a10 = require('../src/platform/artik1020');
	var red = new gpio(a10.ARTIK_A10_GPIO_XEINT0, 'red', 'out', 'digital', 'none', 0);
	var green = new gpio(a10.ARTIK_A10_GPIO_XEINT1, 'green', 'out', 'digital', 'none', 0);
	var blue = new gpio(a10.ARTIK_A10_GPIO_XEINT2, 'blue', 'out', 'digital', 'none', 0);
	var button = new gpio(a10.ARTIK_A10_GPIO_XEINT3, 'button', 'in' , 'digital', 'both', 0);
	button.request();
} else if(name == 'Artik 710') {
	console.log('Running GPIO test on Artik 710');
	const a7 = require('../src/platform/artik710');
	var red = new gpio(a7.ARTIK_A710_GPIO_GPIO0, 'red', 'out', 'digital', 'none', 0);
	var green = new gpio(a7.ARTIK_A710_GPIO_GPIO1, 'green', 'out', 'digital', 'none', 0);
	var blue = new gpio(a7.ARTIK_A710_GPIO_GPIO2, 'blue', 'out', 'digital', 'none', 0);
	var button = new gpio(a7.ARTIK_A710_GPIO_GPIO4, 'button', 'in' , 'digital', 'both', 0);
	button.request();
}

button.on('changed', function(val) {
	console.log("Button state: " + val);
});

var color = 0;

setInterval(function () {

    red.request();
    red.write(color & 1);
    red.release();

    green.request();
    green.write(color & 2);
    green.release();

    blue.request();
    blue.write(color & 4);
    blue.release();

    color = (color + 1) % 8;

},1000);

process.on('SIGINT', function () {
	console.log('exiting test');
	button.release();
    process.exit(0);
});



