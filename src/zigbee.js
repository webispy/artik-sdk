var events = require('events');
var util = require('util');
var zb_lib = require('../lib/artik-sdk').zigbee();

var Zigbee = function(){
	events.EventEmitter.call(this);
	
	setImmediate(function(self) {
		self.emit('started');
	}, this);
}

util.inherits(Zigbee, events.EventEmitter);

exports.Zigbee = new Zigbee();

exports.Zigbee.ON_OFF_SWITCH = 0x0000;
exports.Zigbee.LEVEL_CONTROL_SWITCH = 0x0001;
exports.Zigbee.ON_OFF_LIGHT = 0x0100;
exports.Zigbee.DIMMABLE_LIGHT = 0x0101;

exports.Zigbee.ZCL_ON_OFF_CLUSTER_ID = 0x0006;

exports.Zigbee.ZIGBEE_ONOFF_OFF = 3220;
exports.Zigbee.ZIGBEE_ONOFF_ON =3221;
exports.Zigbee.ZIGBEE_ONOFF_TOGGLE =3222;

/* TX_POWER */
exports.Zigbee.ZIGBEE_TX_POWER_8 = 8;
exports.Zigbee.ZIGBEE_TX_POWER_7 = 7;
exports.Zigbee.ZIGBEE_TX_POWER_6 = 6;
exports.Zigbee.ZIGBEE_TX_POWER_5 = 5;
exports.Zigbee.ZIGBEE_TX_POWER_4 = 4;
exports.Zigbee.ZIGBEE_TX_POWER_3 = 3;
exports.Zigbee.ZIGBEE_TX_POWER_2 = 2;
exports.Zigbee.ZIGBEE_TX_POWER_1 = 1;
exports.Zigbee.ZIGBEE_TX_POWER_0 = 0;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS1 = -1;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS2 = -2;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS3 = -3;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS4 = -4;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS5 = -5;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS6 = -6;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS7 = -7;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS8 = -8;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS9 = -9;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS11 = -11;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS12 = -12;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS14 = -14;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS17 = -17;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS20 = -20;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS26 = -26;
exports.Zigbee.ZIGBEE_TX_POWER_MINUS43 = -43;


exports.Zigbee.initialize = function(devices) {
	return zb_lib.initialize(
		devices,
		function(data) {
			exports.Zigbee.emit('event', data);
		}
	);
};

exports.Zigbee.network_start = function() {
	return zb_lib.network_start();
};

exports.Zigbee.network_leave = function() {
	return zb_lib.network_leave();
};

exports.Zigbee.network_form = function() {
	return zb_lib.network_form();
};

exports.Zigbee.network_form_manually = function(network_info) {
	return zb_lib.network_form_manually(network_info);
};

exports.Zigbee.network_permitjoin = function(duration_sec) {
	return zb_lib.network_permitjoin(duration_sec);
};

exports.Zigbee.network_join = function() {
	return zb_lib.network_join();
};

exports.Zigbee.network_request_my_network_status = function() {
	return zb_lib.network_request_my_network_status();
};

exports.Zigbee.device_request_my_node_type = function() {
	return zb_lib.device_request_my_node_type();
};

exports.Zigbee.device_find_by_cluster = function(cluster_id) {
	return zb_lib.device_find_by_cluster(cluster_id);
};

exports.Zigbee.onoff_command = function(endpoint, onoff_value) {
	return zb_lib.onoff_command(endpoint, onoff_value);
};

exports.Zigbee.onoff_get_value = function(endpoint_id) {
	return zb_lib.onoff_get_value(endpoint_id);
};


