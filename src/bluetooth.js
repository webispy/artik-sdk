var events = require('events');
var util = require('util');
var bt = require('../lib/artik-sdk').bluetooth();

var Bluetooth = function(){
	events.EventEmitter.call(this);
	
	setImmediate(function(self) {
		self.emit('started');
	}, this);
}

util.inherits(Bluetooth, events.EventEmitter);

exports.Bluetooth = new Bluetooth();

exports.Bluetooth.start_scan = function() {
	return bt.start_scan(function(device) {
		exports.Bluetooth.emit('scan', device);
	});
};

exports.Bluetooth.stop_scan = function() {
	return bt.stop_scan();
};

exports.Bluetooth.get_devices = function() {
	return bt.get_devices();
};

exports.Bluetooth.get_paired_devices = function() {
	return bt.get_paired_devices();
};

exports.Bluetooth.get_connected_devices = function() {
	return bt.get_connected_devices();
};

exports.Bluetooth.start_bond = function(addr) {
	return bt.start_bond(addr, function(status) {
		exports.Bluetooth.emit('bond', status);
	});
};

exports.Bluetooth.stop_bond = function(addr) {
	return bt.stop_bond(addr);
};

exports.Bluetooth.connect = function(addr) {
	return bt.connect(addr, function(status) {
		exports.Bluetooth.emit('connect', status);
	});
};

exports.Bluetooth.disconnect = function(addr) {
	return bt.disconnect(addr);
};

exports.Bluetooth.remove_unpaired_devices = function() {
	return bt.remove_unpaired_devices();
};

exports.Bluetooth.remove_device = function(addr) {
	return bt.remove_device(addr);
};

exports.Bluetooth.pxp_set_linkloss_level = function(addr, level) {
	return bt.pxp_set_linkloss_level(addr, level);
};

exports.Bluetooth.pxp_set_immediate_level = function(addr, level) {
	return bt.pxp_set_immediate_level(addr, level);
};
