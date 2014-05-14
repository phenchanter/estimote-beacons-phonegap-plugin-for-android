/* global cordova */

cordova.define('ux.mx.phonegap.EstimoteBeacons', function(require, exports, module) {
    'use strict';

    var exec = require('cordova/exec');

    // ======================
    // Constants
    // ======================

    var CLASS_NAME = 'EstimoteBeacons',
        EMPTY_FUNCTION = function() {};

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
        return (!isNaN(parseInt(o, 10)) && (parseFloat(o) == parseInt(o, 10)));
    }

    /**
     * Returns true if passed Object is equal to null or is empty, otherwise false.
     * @param {Object} o Object to be verified
     * @returns {boolean} True if passed Object is equal to null or is empty, otherwise false
     */
    function isNullOrEmpty(o) {
        return (!o || o.length === 0);
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
     * @param {String} errorMessage Error message
     * @param {String} [methodName] Name of the method in which the error occurred
     */
    function logError(errorMessage, methodName) {
        if(!isNullOrEmpty(methodName)) errorMessage = CLASS_NAME + '.' + methodName + ' error: ' + errorMessage;
        console.error(errorMessage);
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
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }

        exec(
            successCallback,
            EMPTY_FUNCTION,
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };

    EstimoteBeacons.prototype.stopEstimoteBeaconsDiscoveryForRegion = function(successCallback) {
        var METHOD_NAME = 'stopEstimoteBeaconsDiscoveryForRegion';

        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }

        exec(
            successCallback,
            EMPTY_FUNCTION,
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };

    EstimoteBeacons.prototype.startRangingBeaconsInRegion = function(successCallback) {
        var METHOD_NAME = 'startRangingBeaconsInRegion';

        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }

        exec(
            successCallback,
            EMPTY_FUNCTION,
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };

    EstimoteBeacons.prototype.stopRangingBeaconsInRegion = function(successCallback) {
        var METHOD_NAME = 'stopRangingBeaconsInRegion';

        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }
    
        exec(
            successCallback,
            EMPTY_FUNCTION,
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };

/*
    EstimoteBeacons.prototype.startMonitoringForRegion = function(id, majorOrCallback, minorOrCallback, successCallback, errorCallback) {
        var METHOD_NAME = 'startMonitoringForRegion';

        var major = isFunction(majorOrCallback) ? null : majorOrCallback,
            minor = isFunction(minorOrCallback) ? null : minorOrCallback;
        successCallback = isFunction(majorOrCallback) ? majorOrCallback : successCallback;
        errorCallback = isFunction(minorOrCallback) ? minorOrCallback : errorCallback;

        if(!errorCallback) {
            errorCallback = EMPTY_FUNCTION;
        }
        if(!isString(id)) {
            logError('id parameter must be a string', METHOD_NAME);
            return;
        }
        if(major && !isInt(major)) {
            logError('major parameter must be a valid integer', METHOD_NAME);
            return;
        }
        if(minor && !isInt(minor)) {
            logError('minor parameter must be a valid integer', METHOD_NAME);
            return;
        }
        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }
        if(!isFunction(errorCallback)) {
            logError('errorCallback parameter must be a function', METHOD_NAME);
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
*/

/*
    EstimoteBeacons.prototype.stopMonitoringForRegion = function(id, successCallback, errorCallback) {
        var METHOD_NAME = 'stopMonitoringForRegion';

        if(!errorCallback) {
            errorCallback = EMPTY_FUNCTION;
        }
        if(!isString(id)) {
            logError('id parameter must be a string', METHOD_NAME);
            return;
        }
        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }
        if(!isFunction(errorCallback)) {
            logError('errorCallback parameter must be a function', METHOD_NAME);
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
*/

/*
    EstimoteBeacons.prototype.getBeaconByIdx = function(idx, successCallback, errorCallback) {
        var METHOD_NAME = 'getBeaconByIdx';

        if(!errorCallback) {
            errorCallback = EMPTY_FUNCTION;
        }
        if(!isInt(idx)) {
            logError('idx parameter must be a valid integer', METHOD_NAME);
            return;
        }
        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }
        if(!isFunction(errorCallback)) {
            logError('errorCallback parameter must be a function', METHOD_NAME);
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
*/

/*
    EstimoteBeacons.prototype.getClosestBeacon = function(successCallback, errorCallback) {
        var METHOD_NAME = 'getClosestBeacon';

        if(!errorCallback) {
            errorCallback = EMPTY_FUNCTION;
        }
        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }
        if(!isFunction(errorCallback)) {
            logError('errorCallback parameter must be a function', METHOD_NAME);
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
*/

/*
    EstimoteBeacons.prototype.getConnectedBeacon = function(successCallback, errorCallback) {
        var METHOD_NAME = 'getConnectedBeacon';

        if(!errorCallback) {
            errorCallback = EMPTY_FUNCTION;
        }
        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }
        if(!isFunction(errorCallback)) {
            logError('errorCallback parameter must be a function', METHOD_NAME);
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
*/

/*
    EstimoteBeacons.prototype.connectToBeacon = function(major, minor, successCallback, errorCallback) {
        var METHOD_NAME = 'connectToBeacon';

        if(!errorCallback) {
            errorCallback = EMPTY_FUNCTION;
        }
        if(!isInt(major)) {
            logError('major parameter must be a valid integer', METHOD_NAME);
            return;
        }
        if(!isInt(minor)) {
            logError('minor parameter must be a valid integer', METHOD_NAME);
            return;
        }
        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }
        if(!isFunction(errorCallback)) {
            logError('errorCallback parameter must be a function', METHOD_NAME);
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
*/

/*
    EstimoteBeacons.prototype.connectToBeaconByMacAddress = function(macAddress, successCallback, errorCallback) {
        var METHOD_NAME = 'connectToBeaconByMacAddress';

        if(!errorCallback) {
            errorCallback = EMPTY_FUNCTION;
        }
        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }
        if(!isFunction(errorCallback)) {
            logError('errorCallback parameter must be a function', METHOD_NAME);
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
*/    

/*
    EstimoteBeacons.prototype.disconnectFromBeacon = function(successCallback, errorCallback) {
        var METHOD_NAME = 'disconnectFromBeacon';

        if(!errorCallback) {
            errorCallback = EMPTY_FUNCTION;
        }
        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }
        if(!isFunction(errorCallback)) {
            logError('errorCallback parameter must be a function', METHOD_NAME);
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
*/

/*
    EstimoteBeacons.prototype.setFrequencyOfConnectedBeacon = function(frequency, successCallback, errorCallback) {
        var METHOD_NAME= 'setFrequencyOfConnectedBeacon';

        if(!errorCallback) {
            errorCallback = EMPTY_FUNCTION;
        }
        if(!isInt(frequency)) {
            logError('frequency parameter must be a valid integer', METHOD_NAME);
            return;
        }
        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }

        if(!isFunction(errorCallback)) {
            logError('errorCallback parameter must be a function', METHOD_NAME);
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
*/

/*
    EstimoteBeacons.prototype.setPowerOfConnectedBeacon = function(power, successCallback, errorCallback) {
        var METHOD_NAME = 'setPowerOfConnectedBeacon';

        if(!errorCallback) {
            errorCallback = EMPTY_FUNCTION;
        }
        if(!isInt(power)) {
            logError('power parameter must be a valid integer', METHOD_NAME);
            return;
        }
        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }
        if(!isFunction(errorCallback)) {
            logError('errorCallback parameter must be a function', METHOD_NAME);
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
*/    

/*
    EstimoteBeacons.prototype.updateFirmwareOfConnectedBeacon = function(progressCallback, successCallback, errorCallback) {
        var METHOD_NAME = 'updateFirmwareOfConnectedBeacon';

        if(!errorCallback) {
            errorCallback = EMPTY_FUNCTION;
        }
        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }
        if(!isFunction(errorCallback)) {
            logError('errorCallback parameter must be a function', METHOD_NAME);
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
                        logError(error, 'getFirmwareUpdateProgress');
                    },
                    CLASS_NAME,
                    'getFirmwareUpdateProgress',
                    []
                );
            }, 100);
        }
    };
*/

    EstimoteBeacons.prototype.getBeacons = function(successCallback) {
        var METHOD_NAME = 'getBeacons';

        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }

        exec(
            successCallback,
            EMPTY_FUNCTION,
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };

/*
    EstimoteBeacons.prototype.startVirtualBeacon = function(major, minor, id, successCallback) {
        var METHOD_NAME = 'startVirtualBeacon';

        if(!isInt(major)) {
            logError('major parameter must be a valid integer', METHOD_NAME);
            return;
        }
        if(!isInt(minor)) {
            logError('minor parameter must be a valid integer', METHOD_NAME);
            return;
        }
        if(!isString(id)) {
            logError('id parameter must be a string', METHOD_NAME);
            return;
        }
        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }

        exec(
            successCallback,
            EMPTY_FUNCTION,
            CLASS_NAME,
            METHOD_NAME,
            [major, minor, id]
        );
    };
*/

/*
    EstimoteBeacons.prototype.stopVirtualBeacon = function(successCallback) {
        var METHOD_NAME = 'stopVirtualBeacon';

        if(!isFunction(successCallback)) {
            logError('successCallback parameter must be a function', METHOD_NAME);
            return;
        }
    
        exec(
            successCallback,
            EMPTY_FUNCTION,
            CLASS_NAME,
            METHOD_NAME,
            []
        );
    };
*/

    var estimoteBeacons = new EstimoteBeacons();
    module.exports = estimoteBeacons;
});
