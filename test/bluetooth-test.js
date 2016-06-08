var bt = require('../src/bluetooth').Bluetooth;

var remote_addr = "A4:E4:B8:6C:38:B9";

function findDevice(item) {
	return item.address == remote_addr;
}

bt.on('started', function() {
	console.log('onstarted');
	bt.start_scan();
});

bt.on('scan', function(device) {
	console.log('onscan: '+ device);
	var device = JSON.parse(device).find(findDevice);

	if (device) {
		console.log('Bonding to ' + remote_addr);
		bt.stop_scan();
		bt.start_bond(device.address);
	}
});

bt.on('bond', function(paired) {
	console.log('bonded: '+ paired);
	bt.connect(remote_addr);
});

bt.on('connect', function(connected) {
	console.log('connected: '+ connected);
});

process.on('SIGINT', function () {
	bt.stop_scan();
    process.exit(0);
});
