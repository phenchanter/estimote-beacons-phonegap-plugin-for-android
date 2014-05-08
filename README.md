# Estimote iBeacons PhoneGap Plugin for Android

*NOTE: THIS IS A WORK IN PROGRESS. IT'S NOT EVEN A BETA VERSION YET. EVERYTHING MAY CHANGE.*

## Overview

This PhoneGap 3.x Plugin for Android allows interaction with [Estimote iBeacons](http://estimote.com). This PhoneGap Plugin is just a wrapper around [Estimote Android SDK](https://github.com/Estimote/Android-SDK). Names for [Available Methods](#available-methods) come from it.

This PhoneGap Plugin allows for:
- beacon ranging (scan beacons and optionally filters them by their values).
- beacon monitoring (monitors regions for those devices that have entered/exited a region).
- beacon characteristics reading (proximity UUID, major & minor values, broadcasting power, advertising interval).

### Requirements

- PhoneGap 3.x.
- Android 4.3 or above.
- Bluetooth 4.0 or above ([Bluetooth Low Energy](http://en.wikipedia.org/wiki/Bluetooth_low_energy) or BLE).

## Usage

### How to get the iBeacons in Region?

On your `assets/www/js/index.js` file, on the `onDeviceReady` method

```
window.EstimoteBeacons.startRangingBeaconsInRegion(function () {
    //every now and then get the list of beacons in range
    myInterval = setInterval(function () {
        window.EstimoteBeacons.getBeacons(function (data) {
            /**
             * The data variable contains the following information:
             *
             * proximityUUID
             * major
             * minor
             * rssi
             * macAddress
             * measuredPower
             **/
        });
    }, 3000);
});
```

### How to bind events?

On your `assets/www/js/index.js` file, on `var app` object:

```
bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    document.addEventListener('pause', this.onPause, false);
    document.addEventListener('resume', this.onResume, false);
}
```

```
onPause: function () {
    app.receivedEvent('pause');
    window.EstimoteBeacons.stopEstimoteBeaconsDiscoveryForRegion(function () {
        console.log("DEBUG :: Stopped Ranging");
    });
    clearInterval(myInterval);
}
```

```
onResume: function () {
    app.receivedEvent('resume');
    window.EstimoteBeacons.startRangingBeaconsInRegion(function () {
        //every now and then get the list of beacons in range
        myInterval = setInterval(function () {
            window.EstimoteBeacons.getBeacons(function (data) {

            });
        }, 3000);
    });
}
```

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

1. For which Android mobile devices could I develop an hybrid app using this PhoneGap Plugin?

  These are some of them:
    - [Samsung Galaxy S3](http://www.samsung.com/global/galaxys3/)
    - [Samsung Galaxy S4](http://www.samsung.com/global/microsite/galaxys4/)
    - [Samsung Galaxy S4 Mini](http://www.samsung.com/global/microsite/galaxys4/)
    - [Samsung Galaxy S5](http://www.samsung.com/global/microsite/galaxys5/)
    - [Samsung Galaxy Note 2](http://www.samsung.com/galaxynote2/)
    - [Samsung Galaxy Note 3](http://www.samsung.com/us/guide-to-galaxy-smart-devices/galaxy-note-3.html)
    - [Google Nexus 4](http://www.google.com/intl/all/nexus/4/)
    - [Google Nexus 5](http://www.google.com/nexus/5/)
    - [Google Nexus 7](http://www.google.com/nexus/7/)

2. Is there an app to check if my Android mobile device supports BLE?

  - [Check if your Android device supports Bluetooth Low Energy (BLE)](http://weimenglee.blogspot.com/2013/10/check-if-your-android-device-supports.html) (NOT TESTED)
  - [BLE Checker](https://play.google.com/store/apps/details?id=com.magicalboy.btd) (NOT TESTED)

## License

MIT
