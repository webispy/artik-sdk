var events = require('events');
var util = require('util');
var wifi = require('../lib/artik-sdk').wifi();

var Wifi = function(){
	events.EventEmitter.call(this);

	setImmediate(function(self) {
		self.emit('started');
	}, this);
}

util.inherits(Wifi, events.EventEmitter);

exports.Wifi = new Wifi();

exports.Wifi.scan_request = function() {
	return wifi.scan_request(function(list) {
		exports.Wifi.emit('scan', list);
	});
};

exports.Wifi.connect = function(ssid, password, is_persistent) {
	return wifi.connect(ssid, password, is_persistent, function() {
		exports.Wifi.emit('connect');
	});
};

exports.Wifi.disconnect = function() {
	return wifi.disconnect();
};

exports.Wifi.get_scan_result = function() {
	return wifi.get_scan_result();
};
