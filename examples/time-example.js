/*
 * Time module test. Note that any running NTP service must be disabled prio
 * to running this test. On Fedora based ARTIK boards, use the following command:
 *
 *   $ systemctl stop systemd-timesyncd
 */
const artik = require('../lib/artik-sdk');

var module = artik.time();
var alarm = null;
var hostname = "fr.pool.ntp.org";

console.log("Synchronizing with NTP server " + hostname);
console.log(module.sync_ntp(hostname) == 0 ? "Sync successful": "Sync failed");

var new_date = module.get_time();
console.log("Current time is " + new_date.toUTCString());
new_date.setUTCSeconds(new_date.getUTCSeconds() + 15);
console.log("Set alarm to trigger at " + new_date.toUTCString());

try {
    alarm = module.create_alarm_date(new_date.getTimezoneOffset() / 60, new_date, function() {
        console.log("Alarm triggered, it is " + module.get_time().toUTCString());
        process.exit(0);
    });
} catch (err) {
    console.log("[ERROR] create_alarm : " + err);
    process.exit(-1);
}

process.on('SIGINT', () => {
    if (alarm)
	alarm.cancel();

    process.exit(-1);
});
