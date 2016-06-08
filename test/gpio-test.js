const artik = require('../lib/artik-sdk');

const name = artik.get_platform_name();

if(name == 'Artik 5') {
	console.log('Running GPIO test on Artik 5');
	const a5 = require('../src/platform/artik520');
	var red = artik.gpio(a5.ARTIK_A5_GPIO_XEINT0, 'red', 'out', 'digital', 'none', 0);
	var green = artik.gpio(a5.ARTIK_A5_GPIO_XEINT1, 'green', 'out', 'digital', 'none', 0);
	var blue = artik.gpio(a5.ARTIK_A5_GPIO_XEINT2, 'blue', 'out', 'digital', 'none', 0);
	var button = artik.gpio(a5.ARTIK_A5_GPIO_XEINT3, 'button', 'in' , 'digital', 'both', 0);
} else if(name == 'Artik 10') {
	console.log('Running GPIO test on Artik 10');
	const a10 = require('../src/platform/artik1020');
	var red = artik.gpio(a10.ARTIK_A10_GPIO_XEINT0, 'red', 'out', 'digital', 'none', 0);
	var green = artik.gpio(a10.ARTIK_A10_GPIO_XEINT1, 'green', 'out', 'digital', 'none', 0);
	var blue = artik.gpio(a10.ARTIK_A10_GPIO_XEINT2, 'blue', 'out', 'digital', 'none', 0);
	var button = artik.gpio(a10.ARTIK_A10_GPIO_XEINT3, 'button', 'in' , 'digital', 'both', 0);
}

button.register_interrupt(function() {
	console.log("Button state " + button.read());
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
	button.unregister_interrupt();
    process.exit(0);
});



