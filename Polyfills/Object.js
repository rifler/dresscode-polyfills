//#label keys
if (!Object.keys) {
    Object.keys = (function() {
        'use strict';
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
            dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],
            dontEnumsLength = dontEnums.length;

        return function (obj) {
            if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                throw new TypeError('Object.keys called on non-object');
            }

            var result = [], prop, i;

            for (prop in obj) {
                if (hasOwnProperty.call(obj, prop)) {
                    result.push(prop);
                }
            }

            if (hasDontEnumBug) {
                for (i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) {
                        result.push(dontEnums[i]);
                    }
                }
            }
            return result;
        };
    }());
}
//#endlabel keys

//#label entries
//#require ::keys
if (!Object.entries) {
    Object.entries = function (obj) {
        var keys = Object.keys(obj);
        var entries = [];
        var key;

        for (var i = 0; i < keys.length; i++) {
            key = keys[i];
            entries.push([key, obj[key]]);
        }

        return entries;

    };
}
//#endlabel entries

//#label is
if (!Object.is) {
    Object.is = function (v1, v2) {
        if (v1 === 0 && v2 === 0) {
            return 1 / v1 === 1 / v2;
        }

        if (v1 !== v1) {
            return v2 !== v2;
        }

        return v1 === v2;
    };
}
//#endlabel is
