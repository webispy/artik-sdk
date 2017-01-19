var artik = require('artik-sdk');
var sleep = require('sleep');
var cloud = new artik.cloud();

var dtid = '<fill up with device type ID>';
var vid = '<fill up with vendor id>';

var regId = '';
var regNonce = '';

function getRegistrationStatus(response) {
	var regStatus = JSON.parse(response).data.status;
	if (regStatus == "PENDING_USER_CONFIRMATION") {
		sleep.sleep(1);
		cloud.sdr_registration_status(regId, getRegistrationStatus);
	} else if (regStatus == "PENDING_DEVICE_COMPLETION") {
		cloud.sdr_complete_registration(regId, regNonce, function(response) {
			console.log('Response: ' + response);
			process.exit(0);
		});
	}
}

cloud.sdr_start_registration(dtid, vid, function(response) {
	var json = JSON.parse(response);
	
	regId = json.data.rid;
	regNonce = json.data.nonce;
	
	console.log('Enter pin ' + json.data.pin + ' in the ARTIK Cloud portal');
	
	cloud.sdr_registration_status(regId, getRegistrationStatus);
});
