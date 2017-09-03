Pony.Array = {};

//#label includes
//#require Pony.Object.is
Pony.Array.includes = function (arr, elem) {
    if (Array.prototype.includes) {
        return Array.prototype.includes.apply(arr, [].slice.call(arguments, 1));
    }

    var fromIndex = arguments.length > 2 ? arguments[2] : 0;
    var length = arr.length;
    if (length === 0) {
        return false;
    }

    var k = fromIndex >= 0 ? fromIndex : Math.max(0, length + fromIndex);
    while (k < length) {
        if (Pony.Object.is(elem, arr[k])) {
            return true;
        }
        k += 1;
    }
    return false;
};
//#endlabel includes
