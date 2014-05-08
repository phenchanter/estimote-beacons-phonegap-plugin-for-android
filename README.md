# Estimote iBeacons PhoneGap Plugin for Android

*NOTE: THIS IS A WORK IN PROGRESS. IT'S NOT EVEN A BETA VERSION YET. EVERYTHING MAY CHANGE.*

## Overview

This PhoneGap 3.x Plugin for Android allows interaction with [Estimote iBeacons](http://estimote.com). Requirements are PhoneGap 3.x, Android 4.3 or above and Bluetooth 4.0 or above (a.k.a. [Bluetooth Low Energy](http://en.wikipedia.org/wiki/Bluetooth_low_energy) or BLE).

This PhoneGap 3.x Plugin is just a wrapper around [Estimote Android SDK](https://github.com/Estimote/Android-SDK). All naming conventions come from it.

It allows for:
- beacon ranging (scan beacons and optionally filters them by their values).
- beacon monitoring (monitors regions for those devices that have entered/exited a region).
- beacon characteristics reading (proximity UUID, major & minor values, broadcasting power, advertising interval).

## Available Methods

Not all methods are listed below, see EstimoteBeacons.js for a full list.

### startRangingBeaconsInRegion

`EstimoteBeacons.startRangingBeaconsInRegion ...` Stats looking for beacons.

### stopRangingBeaconsInRegion

`EstimoteBeacons.stopRangingBeaconsInRegion(successCallback) ...` Stops looking for beacons.

### getBeacons

`EstimoteBeacons.getBeacons(successCallback) ...` Returns latest list of beacons found by `startRangingBeaconsInRegion` or `startEstimoteBeaconsDiscoveryForRegion`. You have to call this method periodically to be up to date with latest results.

## Known Issues

- Sometimes this PhoneGap Plugin stops working because of an error: "Bluetooth Share has stopped". This is an [Android bug](https://github.com/Estimote/Android-SDK#faq). When this error appears, it may be necessary to factory reset your phone.

## FAQ

1. For which Android mobile devices can I develop an hybrid app using this PhoneGap Plugin?

- [Samsung Galaxy S3](http://www.samsung.com/global/galaxys3/)
- [Samsung Galaxy S4](http://www.samsung.com/global/microsite/galaxys4/)
- Samsung Galaxy S4 Mini
- [Samsung Galaxy Note 2](http://www.samsung.com/galaxynote2/)
- [Samsung Galaxy Note 3](http://www.samsung.com/us/guide-to-galaxy-smart-devices/galaxy-note-3.html)
- [Google Nexus 7] (http://www.google.com/nexus/7/)
- [Google Nexus 4](http://www.google.com/intl/all/nexus/4/)
- [Google Nexus 5](http://www.google.com/nexus/5/)
- etc.

## License

MIT
