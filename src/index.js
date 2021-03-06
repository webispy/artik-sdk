/* Platform exports */
module.exports.artik520 = require('./platform/artik520');
module.exports.artik710 = require('./platform/artik710');
module.exports.artik1020 = require('./platform/artik1020');
module.exports.artik530 = require('./platform/artik530');

/* Addon exports */
var artik = require('../lib/artik-sdk');

module.exports.get_modules = artik.get_modules;
module.exports.get_platform = artik.get_platform;
module.exports.get_platform_name = artik.get_platform_name;
module.exports.get_device_info = artik.get_device_info;
module.exports.destroy = artik.destroy;

module.exports.adc = artik.adc;
module.exports.cloud = artik.cloud;
module.exports.http = artik.http;
module.exports.i2c = artik.i2c; 
module.exports.media = artik.media;
module.exports.network = artik.network;
module.exports.pwm = artik.pwm;
module.exports.sensor = artik.sensor;
module.exports.spi = artik.spi;
module.exports.time = artik.time;

/* Other exports */
module.exports.bluetooth = require('./bluetooth');
module.exports.wifi = require('./wifi');
module.exports.zigbee = require('./zigbee');
module.exports.gpio = require('./gpio');
module.exports.serial = require('./serial');
module.exports.websocket = require('./websocket');
module.exports.lwm2m = require('./lwm2m');
module.exports.mqtt = require('./mqtt');
