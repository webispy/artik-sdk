const artik = require('../lib/artik-sdk');

var network = artik.network();

network.get_current_ip(function(response) {
	console.log("MY IP Address : " + response);
});
