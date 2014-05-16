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

    EstimoteBeacons.prototype.startMonitoringBeaconsInRegion = function(successCallback) {
        var METHOD_NAME = 'startMonitoringBeaconsInRegion';

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

    EstimoteBeacons.prototype.stopMonitoringBeaconsInRegion = function(successCallback) {
        var METHOD_NAME = 'stopMonitoringBeaconsInRegion';

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

    var estimoteBeacons = new EstimoteBeacons();
    module.exports = estimoteBeacons;
});
