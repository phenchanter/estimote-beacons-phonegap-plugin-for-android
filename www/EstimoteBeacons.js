/* global cordova */

cordova.define('me.habel.MyEstimotePlugin.EstimoteBeacons', function(require, exports, module) {
    'use strict';

    var exec = require('cordova/exec');

    // ======================
    // Constants
    // ======================

    var CLASS_NAME = 'EstimoteBeacons';

    // ======================
    // Helper Functions
    // ======================

    /**
     * Returns true if passed Object is a Function, otherwise false.
     * @param {Object} o Object to be verified
     * @returns {boolean} True if passed Object is a Function, otherwise false
     */
    function isFunction(o) {
        return (typeof o === 'function');
    }

    /**
     * Returns true if passed Object is an integer, otherwise false.
     * @param {Object} o Object to be verified
     * @return {boolean} True if passed Object is an integer, otherwise false
     */
    function isInt(o) {
        return (o && !isNaN(parseInt(o, 10)) && (parseFloat(o) == parseInt(o, 10)));
    }

    /**
     * Returns true if passed Object is a String, otherwise false.
     * @param {Object} o Object to be verified
     * @return {boolean} True if passed Object is a String, otherwise false
     */
    function isString(o) {
        return (typeof o === 'string');
    }

    /**
     * Logs error message.
     * @param {String} methodName Name of the method
     * @param {String} errorMessage Error message
     */
    function logError(methodName, errorMessage) {
        console.error(CLASS_NAME + '.' + methodName + ' error: ' + errorMessage);
    }

    /**
     * Constructor.
     * @constructor
     */
    function EstimoteBeacons() {
    }

    EstimoteBeacons.prototype.startEstimoteBeaconsDiscoveryForRegion = function(successCallback) {
        var METHOD_NAME = 'startEstimoteBeaconsDiscoveryForRegion';

        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }

        exec(
            successCallback,
            function() {},
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };

    EstimoteBeacons.prototype.stopEstimoteBeaconsDiscoveryForRegion = function(successCallback) {
        var METHOD_NAME = 'stopEstimoteBeaconsDiscoveryForRegion';

        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }

        exec(
            successCallback,
            function() {},
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };

    EstimoteBeacons.prototype.startRangingBeaconsInRegion = function(successCallback) {
        var METHOD_NAME = 'startRangingBeaconsInRegion';

        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }

        exec(
            successCallback,
            function() {},
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };

    EstimoteBeacons.prototype.stopRangingBeaconsInRegion = function(successCallback) {
        var METHOD_NAME = 'stopRangingBeaconsInRegion';

        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }
    
        exec(
            successCallback,
            function() {},
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };

    EstimoteBeacons.prototype.startMonitoringForRegion = function(id, majorOrCallback, minorOrCallback, successCallback, errorCallback) {
        var METHOD_NAME = 'startMonitoringForRegion';

        var major = isFunction(majorOrCallback) ? null : majorOrCallback,
            minor = isFunction(minorOrCallback) ? null : minorOrCallback;
        successCallback = isFunction(majorOrCallback) ? majorOrCallback : successCallback;
        errorCallback = isFunction(minorOrCallback) ? minorOrCallback : errorCallback;

        if(!errorCallback) {
            errorCallback = function() {};
        }

        if(!isString(id)) {
            logError(METHOD_NAME, 'id parameter must be a string');
            return;
        }
        if(!isInt(major)) {
            logError(METHOD_NAME, 'major parameter must be a valid integer');
            return;
        }
        if(!isInt(minor)) {
            logError(METHOD_NAME, 'minor parameter must be a valid integer');
            return;
        }
        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }
        if(!isFunction(errorCallback)) {
            logError(METHOD_NAME, 'errorCallback parameter must be a function');
            return;
        }

        exec(
            successCallback,
            errorCallback,
            CLASS_NAME,
            METHOD_NAME,
            [id, major, minor]
        );
    };

    EstimoteBeacons.prototype.stopMonitoringForRegion = function(id, successCallback, errorCallback) {
        var METHOD_NAME = 'stopMonitoringForRegion';

        if(!errorCallback) {
            errorCallback = function() {};
        }

        if(!isString(id)) {
            logError(METHOD_NAME, 'id parameter must be a string');
            return;
        }
        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }
        if(!isFunction(errorCallback)) {
            logError(METHOD_NAME, 'errorCallback parameter must be a function');
            return;
        }

        exec(
            successCallback,
            errorCallback,
            CLASS_NAME,
            METHOD_NAME,
            [id]
        );
    };

    EstimoteBeacons.prototype.getBeaconByIdx = function(idx, successCallback, errorCallback) {
        var METHOD_NAME = 'getBeaconByIdx';

        if(!errorCallback) {
            errorCallback = function() {};
        }

        if(!isInt(idx)) {
            logError(METHOD_NAME, 'idx parameter must be a valid integer');
            return;
        }
        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }
        if(!isFunction(errorCallback)) {
            logError(METHOD_NAME, 'errorCallback parameter must be a function');
            return;
        }

        exec(
            successCallback,
            errorCallback,
            CLASS_NAME,
            METHOD_NAME,
            [idx]
        );
    };

    EstimoteBeacons.prototype.getClosestBeacon = function(successCallback, errorCallback) {
        var METHOD_NAME = 'getClosestBeacon';

        if(!errorCallback) {
            errorCallback = function() {};
        }

        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }
        if(!isFunction(errorCallback)) {
            logError(METHOD_NAME, 'errorCallback parameter must be a function');
            return;
        }

        exec(
            successCallback,
            errorCallback,
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };

    EstimoteBeacons.prototype.getConnectedBeacon = function(successCallback, errorCallback) {
        var METHOD_NAME = 'getConnectedBeacon';

        if(!errorCallback) {
            errorCallback = function() {};
        }

        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }
        if(!isFunction(errorCallback)) {
            logError(METHOD_NAME, 'errorCallback parameter must be a function');
            return;
        }

        exec(
            successCallback,
            errorCallback,
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };

    EstimoteBeacons.prototype.connectToBeacon = function(major, minor, successCallback, errorCallback) {
        var METHOD_NAME = 'connectToBeacon';

        if(!errorCallback) {
            errorCallback = function() {};
        }

        if(!isInt(major)) {
            logError(METHOD_NAME, 'major parameter must be a valid integer');
            return;
        }
        if(!isInt(minor)) {
            logError(METHOD_NAME, 'minor parameter must be a valid integer');
            return;
        }
        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }
        if(!isFunction(errorCallback)) {
            logError(METHOD_NAME, 'errorCallback parameter must be a function');
            return;
        }

        exec(
            successCallback,
            errorCallback,
            CLASS_NAME,
            METHOD_NAME,
            [major, minor]
        );
    };

    EstimoteBeacons.prototype.connectToBeaconByMacAddress = function(macAddress, successCallback, errorCallback) {
        var METHOD_NAME = 'connectToBeaconByMacAddress';

        if(!errorCallback) {
            errorCallback = function() {};
        }

        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }
        if(!isFunction(errorCallback)) {
            logError(METHOD_NAME, 'errorCallback parameter must be a function');
            return;
        }

        exec(
            successCallback,
            errorCallback,
            CLASS_NAME,
            METHOD_NAME,
            [macAddress]
        );
    };

    EstimoteBeacons.prototype.disconnectFromBeacon = function(successCallback, errorCallback) {
        var METHOD_NAME = 'disconnectFromBeacon';

        if(!errorCallback) {
            errorCallback = function() {};
        }

        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }
        if(!isFunction(errorCallback)) {
            logError(METHOD_NAME, 'errorCallback parameter must be a function');
            return;
        }
    
        exec(
            successCallback,
            errorCallback,
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };

    EstimoteBeacons.prototype.setFrequencyOfConnectedBeacon = function(frequency, successCallback, errorCallback) {
        var METHOD_NAME= 'setFrequencyOfConnectedBeacon';

        if(!errorCallback) {
            errorCallback = function() {};
        }
    
        if(!isInt(frequency)) {
            logError(METHOD_NAME, 'frequency parameter must be a valid integer');
            return;
        }
        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }

        if(!isFunction(errorCallback)) {
            logError(METHOD_NAME, 'errorCallback parameter must be a function');
            return;
        }
    
        exec(
            successCallback,
            errorCallback,
            CLASS_NAME,
            METHOD_NAME,
            [frequency]
        );
    };

    EstimoteBeacons.prototype.setPowerOfConnectedBeacon = function(power, successCallback, errorCallback) {
        var METHOD_NAME = 'setPowerOfConnectedBeacon';

        if(!errorCallback) {
            errorCallback = function() {};
        }

        if(!isInt(power)) {
            logError(METHOD_NAME, 'power parameter must be a valid integer');
            return;
        }
        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }
        if(!isFunction(errorCallback)) {
            logError(METHOD_NAME, 'errorCallback parameter must be a function');
            return;
        }

        exec(
            successCallback,
            errorCallback,
            CLASS_NAME,
            METHOD_NAME,
            [power]
        );
    };

    EstimoteBeacons.prototype.updateFirmwareOfConnectedBeacon = function(progressCallback, successCallback, errorCallback) {
        var METHOD_NAME = 'updateFirmwareOfConnectedBeacon';

        if(!errorCallback) {
            errorCallback = function() {};
        }

        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }
        if(!isFunction(errorCallback)) {
            logError(METHOD_NAME, 'errorCallback parameter must be a function');
            return;
        }
    
        var progressInterval;
    
        exec(
            function() {
                if(progressInterval) {
                    clearInterval(progressInterval);
                }
                successCallback.apply(this, arguments);
            },
            function() {
                if(progressInterval) {
                    clearInterval(progressInterval);
                }
                errorCallback.apply(this, arguments);
            },
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    
        if(isFunction(progressCallback)) {
            progressInterval = setInterval(function() {
                exec(
                    progressCallback,
                    function(error) {
                        logError('getFirmwareUpdateProgress', error);
                    },
                    CLASS_NAME,
                    'getFirmwareUpdateProgress',
                    []
                );
            }, 100);
        }
    };

    EstimoteBeacons.prototype.getBeacons = function(successCallback) {
        var METHOD_NAME = 'getBeacons';

        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }

        exec(
            successCallback,
            function() {},
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };

    EstimoteBeacons.prototype.startVirtualBeacon = function(major, minor, id, successCallback) {
        var METHOD_NAME = 'startVirtualBeacon';

        if(!isInt(major)) {
            logError(METHOD_NAME, 'major parameter must be a valid integer');
            return;
        }
        if(!isInt(minor)) {
            logError(METHOD_NAME, 'minor parameter must be a valid integer');
            return;
        }
        if(!isString(id)) {
            logError(METHOD_NAME, 'id parameter must be a string');
            return;
        }
        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }

        exec(
            successCallback,
            function() {},
            CLASS_NAME,
            METHOD_NAME,
            [major, minor, id]
        );
    };

    EstimoteBeacons.prototype.stopVirtualBeacon = function(successCallback) {
        var METHOD_NAME = 'stopVirtualBeacon';

        if(!isFunction(successCallback)) {
            logError(METHOD_NAME, 'successCallback parameter must be a function');
            return;
        }
    
        exec(
            successCallback,
            function() {},
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };

    var estimoteBeacons = new EstimoteBeacons();
    module.exports = estimoteBeacons;
});