var artik = require('../lib/artik-sdk');


/* Put your configuration here */
var server_id   = 0
var server_ip   = "0.0.0.0";
var server_port = "5683";
var local_port  = "56830";
var name       = "YourTestClientName";
var lifetime   = 300;
var storing    = false;
var bootstrap  = false;
var dtls_cert_path = "unused";
var dtls_key_path = "unused";


/* Instantiate the module */
var lwm2m_module = new artik.lwm2m();

/* Create lwm2m client */
var ret = lwm2m_module.client_create(server_id, server_ip, server_port, local_port, name, lifetime, storing, bootstrap);
console.log("LWM2M Client created. Return value " + ret);

/* Update Config */
var ret = lwm2m_module.client_config(server_id, server_ip, server_port, local_port, name, lifetime, storing, bootstrap, dtls_cert_path, dtls_key_path );
console.log("LWM2M Client Config Updated. Return value " + ret);

/* Test - Update server id */
server_id = 1;
var ret = lwm2m_module.client_update(server_id);
console.log("LWM2M Client Server Id Updated. Return value " + ret);

/* Test - Update object resource */
var uri = "URI";
var buffer = new Buffer([0xaa], 'hex');
var buffer_length = 1;
var ret = lwm2m_module.client_change_object(uri, buffer, buffer_length);
console.log("LWM2M Client Change Object. Return value " + ret);


process.on('SIGINT', function () {
    process.exit(0);
});


