# Estimote iBeacons PhoneGap/Cordova Plugin for Android

**_NOTE: THIS IS A WORK IN PROGRESS. IT'S NOT EVEN A BETA VERSION YET. EVERYTHING MAY CHANGE_.**

## Overview

This is a [PhoneGap](http://phonegap.com/)/[Cordova](http://cordova.apache.org/) 3.x plugin for Android which allows interaction with [Estimote iBeacons](http://estimote.com). This plugin is just a wrapper around [Estimote Android SDK](https://github.com/Estimote/Android-SDK). Names for [Available Methods](#available-methods) come from it.

This plugin allows for:
- beacon ranging: Scan beacons and optionally filter them by their values.
- beacon characteristics reading (proximity UUID, major & minor values, etc.).

## Requirements

- [Adobe PhoneGap 3.x](http://phonegap.com/install/) or [Apache Cordova 3.x](http://cordova.apache.org/#download).
- [Eclipse](https://www.eclipse.org/downloads/) or [Android Studio](http://developer.android.com/sdk/installing/studio.html) IDE.
- [Android SDK](http://developer.android.com/sdk).
- Mobile device with Android 4.3 or above and Bluetooth 4.0 or above (a.k.a. [Bluetooth Low Energy](http://en.wikipedia.org/wiki/Bluetooth_low_energy) or BLE).

## Installation

In order to add this plugin into your app:

Using PhoneGap:

```
$ phonegap local plugin add https://github.com/mdc-ux-team/estimote-beacons-phonegap-plugin-for-android.git
```

Using Cordova:

```
$ cordova plugin add https://github.com/mdc-ux-team/estimote-beacons-phonegap-plugin-for-android.git
```

## Usage

### How to get the iBeacons in Region?

In your `www/js/index.js` file:

```
...
var myInterval = null;
...
var app = {
  ...
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    document.addEventListener('pause', this.onPause, false);
    document.addEventListener('resume', this.onResume, false);
  },
  ...
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
    window.EstimoteBeacons.startRangingBeaconsInRegion(function() {
      // Every now and then get the list of beacons in range
      myInterval = setInterval(function() {
        window.EstimoteBeacons.getBeacons(function(data) {
            // data contains the following information: proximityUUID, major, minor, rssi, macAddress, measuredPower
            ...
        });
      }, 3000);
    });  
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
          // data contains the following information: proximityUUID, major, minor, rssi, macAddress, measuredPower
          ...
        });
      }, 3000);
    });
  },
  ...
};
```

## Available Methods

### startRangingBeaconsInRegion

`EstimoteBeacons.startRangingBeaconsInRegion(successCallback)` Starts looking for beacons.

### stopRangingBeaconsInRegion

`EstimoteBeacons.stopRangingBeaconsInRegion(successCallback)` Stops looking for beacons.

### startEstimoteBeaconsDiscoveryForRegion

`EstimoteBeacons.startEstimoteBeaconsDiscoveryForRegion(successCallback)` Starts discoverying beacons.

### stopEstimoteBeaconsDiscoveryForRegion

`EstimoteBeacons.stopEstimoteBeaconsDiscoveryForRegion(successCallback)` Stops discoverying beacons.

### getBeacons

`EstimoteBeacons.getBeacons(successCallback)` Returns latest list of beacons found by `startRangingBeaconsInRegion` or `startEstimoteBeaconsDiscoveryForRegion`. You have to call this method periodically to be up to date with latest results.

## Known Issues

- Sometimes this plugin stops working because of an error: "Bluetooth Share has stopped". This is an [Android bug](https://code.google.com/p/android/issues/detail?id=67272). For more information about this bug read [bullet 2 within the FAQ section](https://github.com/Estimote/Android-SDK#faq) of [Estimote Android SDK](https://github.com/Estimote/Android-SDK). When this error appears, it may be necessary to factory reset your device. **NOTE: BACKUP YOUR DATA BEFORE FACTORY RESET YOUR DEVICE**.

## FAQ

1. How to create a PhoneGap/Cordova project/app for Android?

  Using PhoneGap:
  
  ```
  $ phonegap create myphonegapapp com.mycompany.myphonegapapp MyPhoneGapApp
  $ cd myphonegapapp
  $ phonegap build android
  ```
  
  Read [The Command-Line Interface](http://docs.phonegap.com/en/3.0.0/guide_cli_index.md.html) within [PhoneGap Documentation](http://docs.phonegap.com/en/3.0.0/) for more information.
  
  Using Cordova:
  
  ```
  $ cordova create mycordovaapp com.mycompany.mycordovaapp MyCordovaApp
  $ cd mycordovaapp
  $ cordova platform add android
  ```
  
  Read [The Command-Line Interface](http://cordova.apache.org/docs/en/3.4.0/guide_cli_index.md.html#The%20Command-Line%20Interface) within [Apache Cordova Documentation](http://cordova.apache.org/docs/en/3.4.0/) for more information.

2. Where can I find a sample app which uses this plugin?

  Take a look at [estimote-beacons-phonegap-sample-app](https://github.com/mdc-ux-team/estimote-beacons-phonegap-sample-app).

3. For which Android mobile devices could I develop an hybrid app using this plugin?

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

4. Is there an app to check if my Android mobile device supports BLE?

  [BLE Checker](https://play.google.com/store/apps/details?id=com.magicalboy.btd). We have tested this app in a couple of Android mobile devices and it seems to work fine.

5. Is there an Estimote iBeacons PhoneGap/Cordova Plugin for iOS?

  Yes. Take a look at the [phonegap-estimotebeacons](https://github.com/kdzwinel/phonegap-estimotebeacons) project being developed by [Konrad Dzwinel](https://github.com/kdzwinel). 

## License

MIT
