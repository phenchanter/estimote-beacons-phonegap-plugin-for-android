# Estimote iBeacons PhoneGap Plugin for Android

**NOTE: THIS IS A WORK IN PROGRESS. IT'S NOT EVEN A BETA VERSION YET. EVERYTHING MAY CHANGE.**

## Overview

This PhoneGap 3.x Plugin for Android allows interaction with [Estimote iBeacons](http://estimote.com). This PhoneGap Plugin is just a wrapper around [Estimote Android SDK](https://github.com/Estimote/Android-SDK). Names for [Available Methods](#available-methods) come from it.

This PhoneGap Plugin allows for:
- beacon ranging: Scan beacons and optionally filters them by their values.
- beacon monitoring: Monitor regions for those devices that have entered/exited a region.
- beacon characteristics reading (proximity UUID, major & minor values, etc.).

### Requirements

- [PhoneGap 3.x](http://phonegap.com/install/).
- [Eclipse](https://www.eclipse.org/downloads/) or [Android Studio](http://developer.android.com/sdk/installing/studio.html) IDE.
- [Android SDK](http://developer.android.com/sdk).
- Mobile device with Android 4.3 or above and Bluetooth 4.0 or above ([Bluetooth Low Energy](http://en.wikipedia.org/wiki/Bluetooth_low_energy) or BLE).

## Usage

### How to get the iBeacons in Region?

On your `assets/www/js/index.js` file:

```
var myInterval;
...
function onDeviceReady() {
  window.EstimoteBeacons.startRangingBeaconsInRegion(function() {
    // Every now and then get the list of beacons in range
    myInterval = setInterval(function() {
        window.EstimoteBeacons.getBeacons(function(data) {
            // data argument contains the following information: proximityUUID, major, minor, rssi, macAddress, measuredPower
            ...
        });
    }, 3000);
  });  
}
document.addEventListener('deviceready', onDeviceReady, false);
```

### How to bind events?

On your `assets/www/js/index.js` file:

```
var app = {
  ...
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    document.addEventListener('pause', this.onPause, false);
    document.addEventListener('resume', this.onResume, false);
  },
  ...
  onPause: function() {
    app.receivedEvent('pause');
    window.EstimoteBeacons.stopEstimoteBeaconsDiscoveryForRegion(function() {
        console.log("DEBUG :: Stop ranging");
    });
    clearInterval(myInterval);
  },
  ...
  onResume: function() {
    app.receivedEvent('resume');
    window.EstimoteBeacons.startRangingBeaconsInRegion(function() {
      // Every now and then get the list of beacons in range
      myInterval = setInterval(function() {
        window.EstimoteBeacons.getBeacons(function(data) {
          ...
        });
      }, 3000);
    });
  },
  ...
```

## Available Methods

Not all methods are listed below, see [EstimoteBeacons.js](https://github.com/mdc-ux-team/estimote-beacons-phonegap-plugin-for-android//blob/master/www/EstimoteBeacons.js) for a full list.

### startRangingBeaconsInRegion

`EstimoteBeacons.startRangingBeaconsInRegion(callback)` Starts looking for beacons.

### stopRangingBeaconsInRegion

`EstimoteBeacons.stopRangingBeaconsInRegion(callback)` Stops looking for beacons.

### getBeacons

`EstimoteBeacons.getBeacons(callback)` Returns latest list of beacons found by `startRangingBeaconsInRegion` or `startEstimoteBeaconsDiscoveryForRegion`. You have to call this method periodically to be up to date with latest results.

## Known Issues

- Sometimes this PhoneGap Plugin stops working because of an error: "Bluetooth Share has stopped". This is an [Android bug](https://code.google.com/p/android/issues/detail?id=67272). For more information about this bug read the [bullet 2 within the FAQ section](https://github.com/Estimote/Android-SDK#faq) of the [Estimote Android SDK](https://github.com/Estimote/Android-SDK) repo. When this error appears, it may be necessary to factory reset your device.

## FAQ

1. For which Android mobile devices could I develop an hybrid app using this PhoneGap Plugin?

  These could be some of them:
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
  
3. How to create a Cordova Project/App for Android?

  ```
  $ cordova create mycordovaapp com.mycompany.mycordovaapp MyCordovaApp
  ```

  ```
  $ cordova platform add android
  ```

## License

MIT
