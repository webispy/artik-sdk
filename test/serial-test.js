const artik = require('../lib/artik-sdk');
const artik_serial = require('../src/serial');

const name = artik.get_platform_name();

if(name == 'Artik 5') {
	console.log("Running SERIAL test on Artik 5");
	const a5 = require('../src/platform/artik520');
	var loopback = new artik_serial(a5.ARTIK_A5_SERIAL.SCOM.XSCOM4,
							  "serial-loopback",
							  a5.ARTIK_A5_SERIAL.BAUD.B115200,
							  a5.ARTIK_A5_SERIAL.PARITY.NONE,
							  a5.ARTIK_A5_SERIAL.DATA.BIT8,
							  a5.ARTIK_A5_SERIAL.STOP.BIT1,
							  a5.ARTIK_A5_SERIAL.FLOWCTRL.NONE);
} else if(name == 'Artik 10') {
	console.log("Running SERIAL test on Artik 10");
	const a10 = require('../src/platform/artik1020');
	var loopback = new artik_serial(a10.ARTIK_A10_SERIAL.SCOM.XSCOM2,
							  "serial-loopback",
							  a10.ARTIK_A10_SERIAL.BAUD.B115200,
							  a10.ARTIK_A10_SERIAL.PARITY.NONE,
							  a10.ARTIK_A10_SERIAL.DATA.BIT8,
							  a10.ARTIK_A10_SERIAL.STOP.BIT1,
							  a10.ARTIK_A10_SERIAL.FLOWCTRL.NONE);
}

var buf = new Buffer([0xaa, 0xbb, 0xcc, 0xdd, 0xee, 0xff], 'hex');

loopback.request();

loopback.on('read', function(data) {
    if (data)
	console.log("Rx Data: " + Buffer(data).toString('hex'));
});

var written = loopback.write(buf);
console.log("Wrote " + written + " bytes");

process.on('SIGINT', function () {
    loopback.release();
    process.kill(process.pid);
});
