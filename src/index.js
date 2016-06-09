/* Platform exports */
module.exports.artik520 = require('./platform/artik520');
module.exports.artik1020 = require('./platform/artik1020');

/* Addon exports */
var artik = require('../lib/artik-sdk');
module.exports.adc = artik.adc;
module.exports.cloud = artik.cloud;
module.exports.gpio = artik.gpio;
module.exports.http = artik.http;
module.exports.i2c = artik.i2c; 
module.exports.media = artik.media;
module.exports.network = artik.network;
module.exports.pwm = artik.pwm;
module.exports.sensor = artik.sensor;
module.exports.serial = artik.serial;
module.exports.spi = artik.spi;
module.exports.time = artik.time;

/* Other exports */
module.exports.bluetooth = require('./bluetooth').Bluetooth;
module.exports.wifi = require('./wifi').Wifi;
module.exports.zigbee = require('./zigbee').Zigbee;

